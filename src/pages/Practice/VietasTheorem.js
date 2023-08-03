import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; 

class VietasTheorem extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        userAnswer: '',
        correctAnswer: '',
        beforeBlank: '',
    };

    generateQuestion = () => {
        const a = 1;
        let b = myMath.randomInteger(1, 7);
        b = Math.random() < 0.5 ? -b : b;

        let c = myMath.randomInteger(-10, Math.floor(b * b / 4 / a));

        const firstTerm = `x^2`;
        let secondTerm = '';
        let thirdTerm = '';
        let question = '';

        if (b > 1) {
            secondTerm = `+${b}x`
        } else if (b === 1) {
            secondTerm = `+x`
        } else if (b === 0) {
            secondTerm = ``
        } else if (b === -1) {
            secondTerm = `-x`
        } else {
            secondTerm = `${b}x`
        }

        if (c > 0) {
            thirdTerm = `+${c}`
        } else if (c === 0) {
            thirdTerm = ``
        } else {
            thirdTerm = `${c}`
        }

        question = '~' + firstTerm.concat(secondTerm, thirdTerm, `=0`);

        let beforeBlank, correctAnswer;
        let sum = -b / a;
        let product = c / a;
        let problemType = myMath.randomInteger(1, 5);
        switch (problemType) {
            case 1:
                beforeBlank = 'x_1 + x_2 = ';
                correctAnswer = sum;
                break;
            case 2:
                beforeBlank = 'x_1x_2 = ';
                correctAnswer = product;
                break;
            case 3:
                beforeBlank = 'x_1^2 + x_2^2 = ';
                correctAnswer = sum * sum - 2 * product;
                break;
            case 4:
                beforeBlank = '(x_1 - x_2)^2 = ';
                correctAnswer = sum * sum - 4 * product;
                break;
            case 5:
                let bb = -b;
                if (bb > 1) {
                    beforeBlank = `+${bb}x`
                } else if (bb === 1) {
                    beforeBlank = `+x`
                } else if (bb === 0) {
                    beforeBlank = ``
                } else if (bb === -1) {
                    beforeBlank = `-x`
                } else {
                    beforeBlank = `${bb}x`
                }
                beforeBlank = 'x_1^2' + beforeBlank + ' = ';
                correctAnswer = -b*sum-c;
                break;
            default:
                break;
        }

        this.setState({ beforeBlank: beforeBlank, correctAnswer: correctAnswer });

        return (<>
            If
            <MathComponent tex={'~x_1~'} display={false} />
            and
            <MathComponent tex={'~x_2~'} display={false} />
            are the roots of
            <MathComponent tex={question} display={false} />
            , then:
        </>);
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
                        <MathComponent tex={this.state.beforeBlank} display={false} /> <input type="number" value={this.state.userAnswer}
                            ref={this.answerForm} autoFocus
                            onChange={e => this.setState({ userAnswer: e.target.value })}></input><br />
                    </>
                )}
            />
        );
    }
}

export default VietasTheorem;
