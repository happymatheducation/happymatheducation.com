import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import {primeFactorize} from "../../assets/myMath"; //example [{prime:2,power:3}, {prime:3, power:1}];

class NumberOfFactors extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        primeFactorizationString: '',
    };

    generateQuestion = () => {

        const x = Math.floor(Math.random() * 91) + 10; // 10~100;
        const y = Math.floor(Math.random() * 91) + 10; // 10~100;
        const questionString = String.raw`${x}\times${y}`;
        const product = x * y;

        let primeFactorization = primeFactorize(product);
        let numberOfFactors = 1;
        let primeFactorizationString = questionString + '=';
        for (let i = 0; i < primeFactorization.length; i++) {
            let currentPrimeFactorization = primeFactorization[i];
            let power = currentPrimeFactorization.power;
            let prime = currentPrimeFactorization.prime;
            numberOfFactors *= power + 1;
            if (currentPrimeFactorization.power === 1) {
                primeFactorizationString += prime;
            } else {
                primeFactorizationString += prime + '^' + power;
            }
            if (i !== primeFactorization.length - 1) {
                primeFactorizationString += String.raw`\times`;
            }
        }

        this.setState({
            correctAnswer: numberOfFactors,
            primeFactorizationString: primeFactorizationString,
        })

        return (<>How many positive factors does <MathComponent display={false} tex={questionString} /> have?</>);
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
        return (<>
            <MathComponent display={false}
                tex={String.raw`\text{Incorrect! Answer: }${ correctAnswer }`} /><br/>
            <MathComponent display={false} tex={String.raw`\text {Hint: }`
                + this.state.primeFactorizationString} /></>
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

export default NumberOfFactors;
