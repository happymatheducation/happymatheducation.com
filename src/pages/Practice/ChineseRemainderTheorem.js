import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class ChineseRemainderTheorem extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctRemainder: '',
        correctModulus: '',
        userRemainder: '',
        userModulus: '',
    };

    generateQuestion = () => {
        // x = a mod m1
        // x = b mod m2
        // answer: x = r mod m

        //const allM1 = [2, 3, 4, 5, 7, 8, 9];
        //const allM2 = myMath.allPrimePowers.filter(number => number <= 25);
        //let m1 = allM1[Math.floor(Math.random() * allM1.length)];
        //let m2 = allM2[Math.floor(Math.random() * allM2.length)];
        //while (myMath.gcdOfTwo(m1, m2) !== 1) {
        //    m2 = allM2[Math.floor(Math.random() * allM2.length)];
        //}

        let m1 = myMath.randomInteger(2, 6);
        let m2 = myMath.randomInteger(2, 25);
        while (m1 === m2) { m2 = myMath.randomInteger(2, 25);}

        let r = myMath.randomInteger(10, 99);
        let m = myMath.lcmOfTwo(m1, m2);
        r = r % m;

        let a = r % m1;
        let b = r % m2;

        this.setState({ correctModulus: m, correctRemainder: r });

        let difficulty
        if (m > 100) { difficulty = '(Super Hard)' } else if (m > 50) { difficulty = '(Hard)' };

        return (<>Solve <MathComponent display={false}
            tex={`
            \\left\\{
            \\begin{array}{ll}
            x\\equiv${a} & (\\text{mod}~~${m1}) \\\\
            x\\equiv${b} & (\\text{mod}~~${m2})
            \\end{array}
            \\right.
            `} />    {difficulty}</>);
    }

    clearAnswerForm = () => {
        this.setState({
            userModulus: '',
            userRemainder: '',
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctModulus = this.state.correctModulus;
        let correctRemainder = this.state.correctRemainder;
        let userRemainder = parseInt(this.state.userRemainder);
        let userModulus = parseInt(this.state.userModulus);
        while (userRemainder < 0) {
            userRemainder += userModulus;
        }
        if (userModulus === correctModulus
            && userRemainder % correctModulus === correctRemainder) {
            return true;
        }
        return (
            <MathComponent display={false}
                tex={`\\text{Incorrect! Answer: }x\\equiv${correctRemainder} \\mod ${correctModulus}`} />
        );
    }

    render() {

        let answerForm = (<>
            <MathComponent display={false} tex={`x\\equiv~`} />
            <input type="number" value={this.state.userRemainder} ref={this.answerForm} autoFocus
                onChange={e => this.setState({ userRemainder: e.target.value })}></input>
            <MathComponent display={false} tex={`~~~~(\\text{mod}~~`} />
            <input type="number" value={this.state.userModulus}
                onChange={e => this.setState({ userModulus: e.target.value })}></input>
            <MathComponent display={false} tex={`)`} />
            <br />
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

export default ChineseRemainderTheorem;
