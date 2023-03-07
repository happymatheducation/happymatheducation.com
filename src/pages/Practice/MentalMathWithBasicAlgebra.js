import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"

class MentalMathWithBasicAlgebra extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        formulaID: '',
        ifAddition: '',
        formulaString: '',
    };

    generateQuestion = () => {
        // (a+-b)^2, a^2-b^2, (a+-b)^3
        // 20:4:1

        const formulaSelector = myMath.randomInteger(1, 25);
        let formulaID, questionString, formulaString;
        let a, b, n;
        const ifAddition = myMath.randomInteger(0, 1);
        if (formulaSelector <= 20) { formulaID = 1 } else if (formulaSelector <= 24) { formulaID = 2 } else { formulaID = 3 };
        switch (formulaID) {
            case 1:
                n = myMath.randomInteger(1, 20);
                b = myMath.randomInteger(1, 100 * n) / 100;
                a = ifAddition ? n - b : n + b;
                a = Math.round(a * 100) / 100;
                questionString = ifAddition
                    ? a + '^2 + 2\\times' + a + '\\times' + b + '+' + b + '^2'
                    : a + '^2 - 2\\times' + a + '\\times' + b + '+' + b + '^2';
                formulaString = ifAddition
                    ? 'a^2+2ab+b^2=(a+b)^2'
                    : 'a^2-2ab+b^2=(a-b)^2'
                this.setState({ correctAnswer: n * n, formulaString: formulaString });
                break;
            case 2:
                b = myMath.randomInteger(7, 50);
                a = b + 1;
                questionString = a + '^2-' + b + '^2';
                formulaString = 'a^2-b^2=(a+b)(a-b)';
                this.setState({ correctAnswer: a ** 2 - b ** 2, formulaString: formulaString });
                break;
            case 3:
                n = myMath.randomInteger(1, 10);
                b = myMath.randomInteger(1, 100 * n) / 100;
                a = ifAddition ? n - b : n + b;
                a = Math.round(a * 100) / 100;
                questionString = ifAddition
                    ? a + '^3 + 3\\times' + a + '^2\\times' + b + '+ 3\\times' + a + '\\times' + b + '^2+' + b + '^3'
                    : a + '^3 - 3\\times' + a + '^2\\times' + b + '+ 3\\times' + a + '\\times' + b + '^2-' + b + '^3';
                questionString = '\\text{(Hard) } ' + questionString;
                formulaString = ifAddition
                    ? 'a^3+3a^2b+3ab^2+b^3=(a+b)^3'
                    : 'a^3-3a^2b+3ab^2-b^3=(a-b)^3';
                this.setState({ correctAnswer: n ** 3, formulaString: formulaString });
                break;
            default:
                console.log(formulaID);
                break
        }
        this.setState({ formulaID: formulaID, ifAddition: ifAddition });

        return (<MathComponent display={false} tex={questionString} />);
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: ''
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctAnswer;
        if (parseInt(this.state.userAnswer) === this.state.correctAnswer) {
            return true;
        } else {
            correctAnswer = this.state.correctAnswer;
        }
        let hint = this.state.formulaString;

        return (<>
            <MathComponent display={false}
                tex={String.raw`\text{Incorrect! Answer: }${correctAnswer}.~`} />
            <MathComponent display={false} tex={'\\text{Hint: }'+hint} />
        </>
        );
}

render() {

    let answerForm = (<>
        Your answer: <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
            onChange={e => this.setState({ userAnswer: e.target.value })}></input><br />
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

export default MentalMathWithBasicAlgebra;
