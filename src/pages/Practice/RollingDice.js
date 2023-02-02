import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class RollingDice extends Component {
    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctNumerator: '',
        correctDenominator: '',
        userNumerator: '',
        userDenominator: '',
    };

    count = (operation, property) => { // 15 operations + properties: {X+Y, |X-Y|, X*Y} is {even, odd, prime, composite, perfect square}
        let X, Y;
        let count = 0;
        let operationID = ['X+Y', '|X-Y|', String.raw`X \times Y`].findIndex(e => e === operation);
        let propertyID = ['even', 'odd', 'prime', 'composite', 'a perfect square'].findIndex(e => e === property);
        let result;

        for (X = 1; X <= 6; X++) {
            for (Y = 1; Y <= 6; Y++) {
                switch (operationID) { //['X+Y', '|X-Y|', String.raw`X \times Y`]
                    case 0: result = X + Y; break;
                    case 1: result = Math.abs(X - Y); break;
                    case 2: result = X * Y; break;
                    default: console.log('operationID:' + operationID);
                }
                switch (propertyID) { //['even', 'odd', 'prime', 'composite', 'a perfect square']
                    case 0: if (result % 2 === 0) { count++ } break;
                    case 1: if (result % 2 === 1) { count++ } break;
                    case 2: if (myMath.isPrime(result)) { count++ } break;
                    case 3: if (myMath.isComposite(result)) { count++ } break;
                    case 4: if (Number.isInteger(Math.sqrt(result))) { count++ } break;
                    default: console.log('propertyID:' + propertyID);
                }
            }
        }
        return count;
    }

    generateQuestion = () => {
        // Types:
        // 15 operations + properties: {X+Y, |X-Y|, X*Y} is {even, odd, prime, composite, a perfect square}
        // 5 relationships: {X=Y, X>Y, X>=Y, X|Y, X!=Y}
        // 14 comparisons: X+Y{>=, <=}[3, 11], X-Y>=[1, 5]
        // 16 values: X+Y=[2,12], X-Y=[1,5]
        // 6 three dice: X+Y+Z is {even, odd}; X*Y*Z is {even, odd, prime, composite}

        let X = <MathComponent display={false} tex={'X'} />;
        let Y = <MathComponent display={false} tex={'Y'} />;
        let Z = <MathComponent display={false} tex={'Z'} />;

        let diceDescription = <>Two standard dice are rolled with results {X} and {Y} respectively. </>;

        const typeSelector = Math.ceil(Math.random() * 56);
        let total = 36;
        let count;
        const operations = ['X+Y', '|X-Y|', String.raw`X \times Y`];
        const properties = ['even', 'odd', 'prime', 'composite', 'a perfect square'];
        const relationships = ['=', '>', String.raw`\ge`, '|', String.raw`\neq`];
        let questionString;
        let operation, property, relationship;
        let difficulty = '';
        if (typeSelector <= 15) { 
        // 15 operations + properties: {X+Y, |X-Y|, X*Y} is {even, odd, prime, composite, a perfect square}
            operation = operations[Math.floor((typeSelector - 1) / properties.length)];
            property = properties[Math.floor(typeSelector - 1) % properties.length];
            count = this.count(operation, property);
            if (property !== 'odd' && property !== 'even') {
                if (operation === '|X-Y|') { difficulty = ' (Super Hard)' }
                else { difficulty = ' (Hard)' }
            }
            questionString = <><MathComponent display={false} tex={operation} /> is {property}?{difficulty}</>;
        } else if (typeSelector <= 15 + 5) {
        // 5 relationships: {X=Y, X>Y, X>=Y, X|Y, X!=Y}
            let relationshipID = typeSelector - 16;
            relationship = relationships[relationshipID];
            count = [6, 15, 21, 14, 30][relationshipID];
            difficulty = ' (Hard)'
            if (relationship === '=') { difficulty = '' }
            questionString = <><MathComponent display={false} tex={String.raw`X ${relationship} Y`} />?{difficulty}</>;
        } else if (typeSelector <= 15 + 5 + 14) { 
        // 14 comparisons: X+Y{>=, <=}[3, 11], X-Y>=[1, 5]
            if (typeSelector <= 15 + 5 + 9) {
                let comparisonID = Math.floor(Math.random() * 2); // 0: >=; 1: <=;
                let comparisonSymbol = [String.raw`\ge`, String.raw`\le`][comparisonID];
                let number = typeSelector - (15 + 5) + 2; //[3, 11]
                let counts = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]; //X+Y=2,3,...,12;
                count = myMath.sumArray(comparisonID ? counts.slice(0, number - 1) : counts.slice(number - 13));
                questionString = <><MathComponent display={false} tex={String.raw`X+Y ${comparisonSymbol} ${number}`} />? (Hard)</>;
            } else {
                let number = typeSelector - (15 + 5 + 9);
                let counts = [5, 4, 3, 2, 1]; //X-Y=1,2,3,4,5;
                count = myMath.sumArray(counts.slice(number - 6));
                questionString = <><MathComponent display={false} tex={String.raw`X-Y \ge ${number}`} />? (Hard)</>;
            }
        } else if (typeSelector <= 15 + 5 + 14 + 16) {
        // 16 values: X+Y=[2,12], X-Y=[1,5]
            if (typeSelector <= 15 + 5 + 14 + 11) {
                let number = typeSelector - (15 + 5 + 14) + 1; //[2, 12]
                let counts = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]; //X+Y=2,3,...,12;
                count = counts[number-2];
                questionString = <><MathComponent display={false} tex={String.raw`X+Y= ${number}`} />?</>;
            } else {
                let number = typeSelector - (15 + 5 + 14 + 11); //[1, 5]
                let counts = [5, 4, 3, 2, 1]; //X-Y=1,2,3,4,5;
                count = counts[number-1];
                questionString = <><MathComponent display={false} tex={String.raw`X-Y = ${number}`} />?</>;
            }
        } else { 
        // 6 three dice: X+Y+Z is {even, odd}; X*Y*Z is {even, odd, prime, composite}
            const localTypeID = typeSelector - (15 + 5 + 14 + 16);
            total = 216;
            let counts = [108, 108, 189, 27, 9, 206];
            count = counts[localTypeID - 1];
            let expression = localTypeID <= 2 ? 'X+Y+Z' : String.raw`X \times Y \times Z`;
            let property = ['even', 'odd', 'even', 'odd', 'prime', 'composite'][localTypeID - 1];
            if (localTypeID >= 5) { difficulty='(Super Hard)' }
            diceDescription = <>Three standard dice are rolled with results {X}, {Y} and {Z} respectively. </>;
            questionString = <><MathComponent display={false} tex={expression} /> is {property} ? {difficulty}</>;
        }

        let [numerator, denominator] = myMath.reduceFraction(count, total);
        this.setState({ correctNumerator: numerator, correctDenominator: denominator });

        return (<><p style={{ textAlign: 'left' }}> {diceDescription}
            What is the probability that </p> {questionString}</>);
    }

    clearAnswerForm = () => {
        this.setState({
            userDenominator: '',
            userNumerator: '',
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctNumerator = this.state.correctNumerator;
        let correctDenominator = this.state.correctDenominator;
        let userNumerator = parseInt(this.state.userNumerator);
        let userDenominator = parseInt(this.state.userDenominator);
        if (userNumerator === correctNumerator
            && userDenominator === correctDenominator) {
            return true;
        }
        let reduceHint = '';
        if (userNumerator && userDenominator) {
            if (myMath.gcdOfTwo(userNumerator, userDenominator) === 1) { }
            else {
                reduceHint = <MathComponent display={false}
                    tex={String.raw`\text{. Please simply your fraction.}`} />
            }
        }

        return (<>
            <MathComponent display={false}
                tex={String.raw`\text{Incorrect! Answer: }{${correctNumerator}\over ${correctDenominator}}`} />
            {reduceHint}
        </>
        );
    }

    render() {

        //let answerForm = (<>
        //    Your answer: <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
        //        onChange={e => this.setState({ userAnswer: e.target.value })}></input><br />
        //</>);
        let answerForm = (<>
            Your answer:
            <table className="fraction">
                <thead>
                    <tr>
                        <th className="numerator">
                            <input type="number" value={this.state.userNumerator} ref={this.answerForm} autoFocus
                                onChange={e => this.setState({ userNumerator: e.target.value })}></input>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <input type="number" value={this.state.userDenominator}
                                onChange={e => this.setState({ userDenominator: e.target.value })}></input>
                        </th>
                    </tr>
                </thead>
            </table>
        </>);
        return (
            <FillBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={answerForm}
            />
        );
    }
}

export default RollingDice;
