import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; //example [{prime:2,power:3}, {prime:3, power:1}];

class LeaseCommonMultiple extends Component {

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

        let a = myMath.randomInteger(2, 12);
        let b = myMath.randomInteger(2, 12);
        const factor = myMath.randomInteger(1, 5);
        [a, b] = [a * factor, b * factor];

        const gcd = myMath.gcdOfTwo(a, b);
        const lcm = a * b / gcd;

        this.setState({
            correctAnswer: lcm,
        })

        return (<>What is the least common multiple of
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

export default LeaseCommonMultiple;
