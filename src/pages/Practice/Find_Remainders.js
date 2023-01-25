import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";

class Find_Remainders extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
    };

    //isPrime = (number) => {
    //    let t = Math.floor(Math.sqrt(number));
    //    for (let i = 2; i <= t; i++) {
    //        if (number % i === 0) {
    //            return false
    //        }
    //    }
    //    return true
    //}

    findPowerRemainder = (base, power, divisor) => {
        let remainder = base % divisor;

        for (let i = 2; i <= power; i++) {
            remainder = (remainder * base) % divisor;
        }

        return remainder;
    }

    generateQuestion = () => {

        const divisor = Math.ceil(Math.random() * 9) + 1; // 2~10;
        let remainder;
        let questionString = '';

        if (Math.random() < 0.5) { // problem: a1*a2*...*an / divisor
            let a = []; // the multipliers in the dividend
            const n = 3; // number of multipliers in the dividend
            let productOfRemainders = 1;
            questionString += '(';

            for (let i = 0; i < n; i++) {
                const aRaw = Math.ceil(Math.random() * 80) + 20; // 21~100;
                const r = + Math.ceil(Math.random() * (divisor - 1)); // a random remainder !== 0;
                a.push(Math.floor(aRaw / divisor) * divisor + r)  // a multiple of divisor + r;
                i < n-1 ? questionString += String.raw`${a[i]}\times` : questionString += String.raw`${a[i]}`;
                productOfRemainders *= r;
            }

            questionString += String.raw`)\div${divisor}?`;
            remainder = productOfRemainders % divisor;

        } else { //base^power / divisor;
            const baseRaw = Math.ceil(Math.random() * 80) + 20; // 21~100;
            const power = Math.ceil(Math.random() * 80) + 20; // 21~100;
            const r = + Math.ceil(Math.random() * (divisor - 1)); // a random remainder !== 0;
            let base = (Math.floor(baseRaw / divisor) * divisor + r)  // base != 0 mod divisor;

            questionString = String.raw`${base}^{${power}}\div${divisor}?`;
            remainder = this.findPowerRemainder(base, power, divisor);
        }

        this.setState({ correctAnswer: remainder });
        return (<>What is the remainder for <MathComponent display={false} tex={questionString} /></>);
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
        return (
            <MathComponent display={false}
                tex={String.raw`\text{Incorrect! Answer: }${ correctAnswer }`} />
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

export default Find_Remainders;
