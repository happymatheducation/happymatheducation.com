import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from '../../assets/myMath';

class CompleteTheSquare extends Component {

    constructor() {
        super();
        this.inputH = React.createRef(); // to be used for auto focus.
        this.inputK = React.createRef(); // to be used for auto focus.
    }

    state = {
        a: 0,
        aForm:'',
        h: 0,
        k: 0,
        hSign: '-',
        kSign: '+',
        userH: '',
        userK: '',
    };

    generateQuestion = () => {
        // a(x-h)^2+k;
        let a = myMath.randomInteger(-1, 1);
        if (a >= 0) a += 1;

        let h = myMath.randomInteger(-10, 10);
        while (h === 0) { h = myMath.randomInteger(-10, 10); }
        let k = myMath.randomInteger(-100, 100);
        while (k === 0) { k = myMath.randomInteger(-100, 100); }

        let aForm = this.handleA(a);

        this.setState({ a: a, h: h, k: k, aForm: aForm });

        const b = -2 * a * h;
        const c = a * h * h + k;

        return <>The vertex form of <MathComponent tex={'y=' + this.standardForm(a, b, c)} display={false} /> is? {a!==1&&'(Hard)'}</>;
    }

    handleA = (a) => {
        if (a === 1) {
            return '';
        } else if (a === -1) {
            return '-';
        } else {
            return a;
        }
    }

    standardForm = (a, b, c) => {
        let firstTerm = `x^2`;
        let secondTerm = '';
        let thirdTerm = '';

        if (a === 1) {
        } else if (a === -1) {
            firstTerm = '-' + firstTerm;
        } else {
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

        return firstTerm + secondTerm + thirdTerm;
    }

    vertexForm = (a, h, k) => {
        let expression = '';

        if (a === 1) {
        } else if (a === -1) {
            expression += '-';
        } else {
            expression += a;
        }

        if (h > 0) {
            expression += `(x-${h})^2`;
        } else if (h === 0) {
            expression += `x^2`;
        } else {
            expression += `(x+${-h})^2`;
        }

        if (k > 0) {
            expression += `+${k}`;
        } else if (k === 0) {
        } else {
            expression += `${k}`;
        }
        return expression;
    }

    clearAnswerForm = () => {
        this.setState({ userH: '', userK: '', hSign: '-', kSign:'+' });
        this.inputH.current.focus();
    }

    checkAnswer = () => {
        const a = this.state.a;
        const h = this.state.h;
        const k = this.state.k;
        const userH = parseInt(this.state.userH);
        const userK = parseInt(this.state.userK);
        const userHPositive = this.state.hSign === '-' ? true : false;
        const userKPositive = this.state.kSign === '+' ? true : false;

        if (userH === Math.abs(h) && userK === Math.abs(k)
            && userHPositive === (h > 0) && userKPositive ===(k>0)) {
            return true;
        } else {
            return <>
                Incorrect! The vertex form is &nbsp;
                <MathComponent display={false} tex={'y=' + this.vertexForm(a, h, k)} />
            </>;
        }
    }

    render() {
        let answerForm = <>
            <span style={{ whiteSpace: "nowrap" }} >
                <MathComponent tex={`y=${this.state.aForm}(x`} display={false} />
                <button className='sign'
                    onClick={() => {
                        this.state.hSign === '-' ? this.setState({ hSign: '+' }) : this.setState({ hSign: '-' });
                        this.inputH.current.focus();
                    }}
                ><MathComponent tex={this.state.hSign} display={false} /></button>
                <input type="number" value={this.state.userH}
                    ref={this.inputH} autoFocus
                    onChange={e => this.setState({ userH: e.target.value })}></input>
                <MathComponent tex={`)^2`} display={false} />
                <button className='sign'
                    onClick={() => {
                        this.state.kSign === '-' ? this.setState({ kSign: '+' }) : this.setState({ kSign: '-' });
                        this.inputK.current.focus();
                    }}
                ><MathComponent tex={this.state.kSign} display={false} /></button>
                <input type="number" value={this.state.userK}
                    ref={this.inputK}
                    onChange={e => this.setState({ userK: e.target.value })}></input>
            </span>
            <br />
        </>
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

export default CompleteTheSquare;
