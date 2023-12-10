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
        let a, b, c, bmin, cmax;
        let beforeBlank, correctAnswer;
        let sum;
        let product;
        let problemType = myMath.randomInteger(1, 9);
        switch (problemType) {
            case 1:
                a = myMath.randomInteger(1, 5);
                b = myMath.randomInteger(1, 20)*a;
                b = Math.random() < 0.5 ? -b : b;
                cmax = Math.floor(b * b / 4 / a);
                c = myMath.randomInteger(-10, cmax);
                sum = -b / a;
                product = c / a;
                beforeBlank = 'x_1 + x_2 = ';
                correctAnswer = sum;
                break;
            case 2:
                a = myMath.randomInteger(1, 5);
                c = myMath.randomInteger(1, 20) * a;
                c = Math.random() < 0.5 ? -c : c;
                bmin = Math.ceil(Math.sqrt(4 * a * c));
                b = a * c < 0
                    ? myMath.randomInteger(-100, 100)
                    : myMath.randomInteger(bmin, bmin + 20);
                sum = -b / a;
                product = c / a;
                beforeBlank = 'x_1x_2 = ';
                correctAnswer = product;
                break;
            case 3:
                a = 1;
                b = myMath.randomInteger(1, 10);
                b = Math.random() < 0.5 ? -b : b;
                cmax = Math.min(Math.floor(b * b / 4 / a), 5);
                c = myMath.randomInteger(-5, cmax);
                sum = -b / a;
                product = c / a;
                beforeBlank = 'x_1^2 + x_2^2 = ';
                correctAnswer = sum * sum - 2 * product;
                break;
            case 4:
                a = 1;
                b = myMath.randomInteger(1, 10);
                b = Math.random() < 0.5 ? -b : b;
                cmax = Math.min(Math.floor(b * b / 4 / a), 5);
                c = myMath.randomInteger(-5, cmax);
                sum = -b / a;
                product = c / a;
                beforeBlank = '(x_1 - x_2)^2 = ';
                correctAnswer = sum * sum - 4 * product;
                break;
            case 5:
                a = 1;
                b = myMath.randomInteger(1, 10);
                b = Math.random() < 0.5 ? -b : b;
                cmax = Math.min(Math.floor(b * b / 4 / a), 5);
                c = myMath.randomInteger(-5, cmax);
                sum = -b / a;
                product = c / a;
                let bb = -b;
                if (bb > 1) {
                    beforeBlank = `+${bb}x_2`
                } else if (bb === 1) {
                    beforeBlank = `+x_2`
                } else if (bb === 0) {
                    beforeBlank = ``
                } else if (bb === -1) {
                    beforeBlank = `-x_2`
                } else {
                    beforeBlank = `${bb}x_2`
                }
                beforeBlank = 'x_1^2' + beforeBlank + ' = ';
                correctAnswer = -b*sum-c;
                break;
            case 6:
                a = 1;
                b = myMath.randomInteger(1, 10);
                b = Math.random() < 0.5 ? -b : b;
                cmax = Math.min(Math.floor(b * b / 4 / a), 10);
                c = myMath.randomInteger(-10, cmax);
                sum = -b / a;
                product = c / a;
                beforeBlank = 'x_1^2x_2 + x_1x_2^2 = ';
                correctAnswer = sum * product;
                break;
            case 7:
                a = 1;
                b = myMath.randomInteger(1, 100);
                b = Math.random() < 0.5 ? -b : b;
                cmax = Math.min(Math.floor(b * b / 4 / a), 10);
                c = myMath.randomInteger(-10, cmax);
                sum = -b / a;
                product = c / a;
                beforeBlank = '(x_1 + 1)(x_2 + 1) = ';
                correctAnswer = sum + product + 1;
                break;
            case 8:
                a = 1;
                c = myMath.randomInteger(1, 10);
                c = Math.random() < 0.5 ? -c : c;
                bmin = Math.ceil(Math.sqrt(4 * a * c));
                b = a * c < 0
                    ? myMath.randomInteger(-10, 10) * c
                    : myMath.randomInteger(Math.ceil(bmin/c), 10) * c;
                sum = -b / a;
                product = c / a;
                beforeBlank = '{1 \\over x_1} + {1 \\over x_2} = ';
                correctAnswer = Math.round(sum / product);
                break;
            case 9:
                a = 1; b = 1; c = 1;
                while (b * b - 4 * a * c < 0) {
                    b = myMath.randomInteger(2, 10);
                    c = myMath.randomFromArray(myMath.findAllFactors(b));
                    b = Math.random() < 0.5 ? -b : b;
                    c = Math.random() < 0.5 ? -c : c;
                }
                sum = -b / a;
                product = c / a;
                beforeBlank = '{x_1 \\over x_2} + {x_2 \\over x_1} = ';
                correctAnswer = Math.round((sum * sum - 2 * product) / product);
                break;
            default:
                break;
        }

        this.setState({ beforeBlank: beforeBlank, correctAnswer: correctAnswer });

        let firstTerm = `x^2`;
        let secondTerm = '';
        let thirdTerm = '';
        let question = '';

        if (a !== 1) {
            firstTerm = a + firstTerm;
        }

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
