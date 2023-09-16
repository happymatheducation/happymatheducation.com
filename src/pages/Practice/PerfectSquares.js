import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; 

class PerfectSquares extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        hintString: '',
    };

    findN(x) {
        // x*n is a perfect square, find the smallest postive integer n.
        let i;
        let xhasPSfactor = true;
        while (xhasPSfactor) {
            xhasPSfactor = false;
            for (i of [2,3,5,7]) {
                if (x % (i ** 2) === 0) {
                    xhasPSfactor = true;
                    x = x / (i ** 2);
                };
            }
        }
        return x;
    }

    generateQuestion = () => {
        // a*b*c*n, or a*b*c/n is an integer.

        const allFactors = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20, 24, 25, 27, 28, 30, 32, 35, 36, 40, 42, 45, 48, 49, 50, 54, 56, 60, 63, 64, 70, 72, 75, 80, 81, 84, 90, 96, 98, 100];
        const a = myMath.randomFromArray(allFactors);
        const b = myMath.randomFromArray(allFactors);
        const c = myMath.randomFromArray(allFactors);
        const product = a * b * c;

        this.setState({ correctAnswer: this.findN(product) });

        let questionString = '~' + a + '\\times ' + b + '\\times ' + c;
        let hintString = '~' + a + '\\times ' + b + '\\times ' + c + '=';

        let primeFactorization = myMath.primeFactorize(product);
        for (let i = 0; i < primeFactorization.length; i++) {
            let currentPrimeFactorization = primeFactorization[i];
            let power = currentPrimeFactorization.power;
            let prime = currentPrimeFactorization.prime;
            if (currentPrimeFactorization.power === 1) {
                hintString += prime;
            } else {
                hintString += prime + '^{' + power + '}';
            }
            if (i !== primeFactorization.length - 1) {
                hintString += '\\times';
            }
        }
        this.setState({ hintString: hintString });
        
        if (Math.random() < 0.5) {
            questionString += '\\times n~';
        } else {
            questionString += '\\over n~';
        }
        return (<>
            What is the smallest positive integer value of <MathComponent display={false} tex={'n~'} />
            if the number below is a perfect square?
            <MathComponent tex={questionString} />
        </>);
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
                tex={String.raw`\text{Incorrect! Answer: }${ correctAnswer }.~`} />
            <MathComponent display={false} tex={String.raw`\text {Hint: }`
                + this.state.hintString} /></>
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

export default PerfectSquares;
