import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; 

class SimpleLinearEquation extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        userAnswer: '',
        correctAnswer: ''
    };

    generateQuestion = () => {
        // mx+b = y or y - mx = b
        let x = myMath.randomInteger(0, 10);
        let m = myMath.randomInteger(1, 10);
        let b = 0;
        while (b === 0) { b = myMath.randomInteger(Math.max(-m * x, -10), 20) };
        let y = m * x + b;
        let equation = m === 1 ? 'x' : m + 'x'
        if (Math.random() > 0.4 || b<0) { // mx+b=y
            if (b > 0) {
                equation += '+' + b
            } else if (b < 0) {
                equation += b
            }
            equation += '=' + y
        } else { // y - mx = b
            equation = y + '-' + equation + '=' + b
        }

        this.setState({ correctAnswer:x })

        return <MathComponent tex={equation} display={false} />;
    }

    clearAnswerForm = () => {
        this.setState({ userAnswer: '' });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        const userAnswer = parseInt(this.state.userAnswer);
        const correctAnswer = parseInt(this.state.correctAnswer);
        if (userAnswer === correctAnswer) {
            return true;
        } else {
            return `Incorrect! The correct answers is ${this.state.correctAnswer}.`;
        }
    }

    render() {
        return (
            <FillBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}

                clearAnswerForm={this.clearAnswerForm}
                answerForm={(
                    <>
                        <MathComponent tex={'x='} display={false} /> <input type="number" value={this.state.userAnswer}
                            ref={this.answerForm} autoFocus
                            onChange={e => this.setState({ userAnswer: e.target.value })}></input><br />
                    </>
                )}
            />
        );
    }
}

export default SimpleLinearEquation;
