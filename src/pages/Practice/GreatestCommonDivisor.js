import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; //example [{prime:2,power:3}, {prime:3, power:1}];

class GreatestCommonDivisor extends Component {

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

        let a = myMath.randomInteger(2, 20);
        let b = myMath.randomInteger(2, 20);
        const factor = myMath.randomInteger(1, 5);
        [a, b] = [a * factor, b * factor];

        const gcd = myMath.gcdOfTwo(a,b);

        this.setState({
            correctAnswer: gcd,
        })

        return (<>What is the greatest common divisor between
            <MathComponent display={false} tex={'~'+a} />, and
            <MathComponent display={false} tex={'~'+b} />?
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
        return <MathComponent display={false}
            tex={String.raw`\text{Incorrect! Answer: }${correctAnswer}.~`} />;
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

export default GreatestCommonDivisor;
