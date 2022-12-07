import { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";

class NumberOfFactors extends Component {

    state = {
        correctAnswer: '',
        userAnswer: '',
        primeFactorizationString: '',
    };

    primeFactorize = (number) => {
        const allPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        let primeFactorization = [];
        let iCount;
        for (let i in allPrimes) {
            let currentPrime = allPrimes[i];
            iCount = 0;
            while (currentPrime <= number && number % currentPrime === 0) {
                number = number / currentPrime;
                iCount++;
            }
            if (iCount) {
                primeFactorization.push({ prime: currentPrime, power: iCount });
            }

        }
        return primeFactorization; //example [{prime:2,power:3}, {prime:3, power:1}];
    }

    generateQuestion = () => {

        const x = Math.floor(Math.random() * 91) + 10; // 10~100;
        const y = Math.floor(Math.random() * 91) + 10; // 10~100;
        const questionString = String.raw`${x}\times${y}`;
        const product = x * y;

        let primeFactorization = this.primeFactorize(product);
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

        return (<>How many positive factors does <MathComponent display={false} tex={questionString} /> have?<br /><br /></>);
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: ''
        });
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
        Your answer: <input type="number" value={this.state.userAnswer}
            onChange={e => this.setState({ userAnswer: e.target.value })}></input><br /><br />
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
