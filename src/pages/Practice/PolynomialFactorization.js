import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class PolynomialFactorization extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        x: [],
        ansX: [],
    };

    termTex = (coeff, variable) => {
        let termTex
        if (coeff > 1) {
            termTex = `+${coeff}` + variable;
        } else if (coeff === 1) {
            termTex = `+` + variable;
        } else if (coeff === 0) {
            termTex = ``
        } else if (coeff === -1) {
            termTex = `-` + variable;
        } else {
            termTex = `${coeff}` + variable
        }
        return termTex;
    }

    generateQuestion = () => {
        let x = [];
        for (let i = 0; i < 2; i++) {
            x[i] = myMath.randomInteger(2, 7);
            x[i] = Math.random() < 0.5 ? -x[i] : x[i];
        }
        for (let i = 2; i < 4; i++) {
            x[i] = myMath.randomInteger(1, 2);
            x[i] = Math.random() < 0.5 ? -x[i] : x[i];
        }

        let a, b, c, d, e, question;

        if (Math.random() < 0.8) { // degree is 3
            a = 1; b = 0; c = 0; d = -a;
            for (let i = 0; i < 3; i++) {
                b += -a * x[i];
                for (let j = i + 1; j < 3; j++) {
                    c += a * x[i] * x[j];
                }
                d *= x[i];
            }

            const firstTerm = `x^3`;
            let secondTerm = this.termTex(b, 'x^2');
            let thirdTerm = this.termTex(c, 'x');
            let fourthTerm = '';

            if (d > 0) {
                fourthTerm = `+${d}`
            } else if (d === 0) {
                fourthTerm = ``
            } else {
                fourthTerm = `${d}`
            }
            x.pop();
            question = firstTerm.concat(secondTerm, thirdTerm, fourthTerm, `=0`);
            this.setState({ ansX: ['', '', ''] });
        }
        else {// degree=4
            a = 1; b = 0; c = 0; d = 0; e = a;
            for (let i = 0; i < 4; i++) {
                b += -a * x[i];
                for (let j = i + 1; j < 4; j++) {
                    c += a * x[i] * x[j];
                    for (let k = j + 1; k < 4; k++) {
                        d += -a * x[i] * x[j] * x[k]
                    }
                }
                e *= x[i];
            }

            const firstTerm = `x^4`;
            let secondTerm = this.termTex(b, 'x^3');
            let thirdTerm = this.termTex(c, 'x^2');
            let fourthTerm = this.termTex(d, 'x');
            let fifthTerm = '';

            if (e > 0) {
                fifthTerm = `+${e}`
            } else if (e === 0) {
                fifthTerm = ``
            } else {
                fifthTerm = `${e}`
            }
            question = firstTerm.concat(secondTerm, thirdTerm, fourthTerm, fifthTerm, `=0`);
            this.setState({ ansX: ['', '', '', ''] });
        }

        this.setState({ x: x });

        return (<MathComponent tex={question} display={false} />);
    }

    clearAnswerForm = () => {
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let x = this.state.x;
        let ansX = this.state.ansX;
        for (let i = 0; i < ansX.length; i++) {
            ansX[i] = parseInt(ansX[i]);
        }
        if (myMath.arraysAreSame(x, ansX, false)) {
            return true;
        } else {
            return `Incorrect! The correct answers are ${this.state.x}.`;
        }
    }

    render() {
        let n = this.state.x.length;
        let answerForm = [];
        for (let i = 0; i < n; i++) {
            let variable = 'x_' + (i + 1) + '=~';
            answerForm.push(<div key={i}>
                <MathComponent tex={variable} display={false} />
                <input type="number" value={this.state.ansX[i]}
                    ref={i===0?this.answerForm:null}
                    onChange={e => {
                        let ansX = this.state.ansX;
                        ansX[i] = e.target.value;
                        this.setState({ ansX: ansX })
                    }}></input>
                <br />
            </div>)
        }
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

export default PolynomialFactorization;
