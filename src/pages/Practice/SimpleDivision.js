import React, { Component } from "react";
import InlineBlanks from "../../components/InlineBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class SimpleDivision extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        quotient: 0,
        remainder: 0,
        userQuotient: '',
        userRemainder: '',
        question: '',
    };

    generateQuestion = () => {
        const divisor = myMath.randomInteger(2, 10);
        const quotient = myMath.randomInteger(2, 10);
        const remainder = myMath.randomInteger(0, divisor - 1);
        const dividend = divisor * quotient + remainder;

        const question = dividend + ' \\div ' + divisor + '=~'

        this.setState({ quotient: quotient, remainder: remainder, question: question });

        return null;
    }

    clearAnswerForm = () => {
        this.setState({ userQuotient: '', userRemainder: '' });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        const quotient = this.state.quotient;
        const remainder = this.state.remainder;
        const userQuotient = parseInt(this.state.userQuotient);
        const userRemainder = parseInt(this.state.userRemainder);
        if (userQuotient === quotient && userRemainder === remainder) {
            return true;
        } else {
            return `Incorrect! The correct answer is ${quotient} r ${remainder}.`;
        }
    }

    render() {
        return (
            <InlineBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={(
                    <>

                        <MathComponent tex={this.state.question} display={false} />
                        <input type="number" value={this.state.userQuotient}
                            ref={this.answerForm} autoFocus
                            onChange={e => this.setState({ userQuotient: e.target.value })}></input>
                        <MathComponent tex={'~r~'} display={false} />
                        <input type="number" value={this.state.userRemainder}
                            onChange={e => this.setState({ userRemainder: e.target.value })}></input><br />
                    </>
                )}
            />
        );
    }
}

export default SimpleDivision;
