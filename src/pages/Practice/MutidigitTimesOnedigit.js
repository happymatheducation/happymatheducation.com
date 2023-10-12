import React, { Component } from "react";
import InlineBlanks from "../../components/InlineBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; //example [{prime:2,power:3}, {prime:3, power:1}];

class MutidigitTimesOnedigit extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        a: '',
        b: '',
    };

    generateQuestion = () => {

        let digitCount = myMath.randomInteger(2, 4);
        let a = myMath.randomInteger(10 ** (digitCount - 1), 10 ** digitCount - 1);
        let b = myMath.randomInteger(2, 9);
        let product = a * b;
        this.setState({
            correctAnswer: product,
            a: a,
            b: b,
        })

        return null;
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
            <MathComponent display={false} tex={this.state.a + '\\times' + this.state.b + '=~'} /><input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
                onChange={e => this.setState({ userAnswer: e.target.value })}></input><br />
        </>);
        return (
            <InlineBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={answerForm}
            />
        );
    }
}

export default MutidigitTimesOnedigit;
