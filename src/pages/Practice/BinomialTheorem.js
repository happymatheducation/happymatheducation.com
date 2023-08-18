import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class BinomialTheorem extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
    };

    binomTex = (leadingCoeff, constant, xPower, binomPower) => {
        if (binomPower === 0) { return '' }

        let binomTex = '(';
        if (leadingCoeff !== 1) {
            binomTex += leadingCoeff
        };
        binomTex += 'x';
        if (xPower !== 1) {
            binomTex += '^{' + xPower + '}';
        }
        if (constant > 0) {
            binomTex += '+';
        }
        binomTex += constant + ')';
        if (binomPower !== 1) {
            binomTex += '^{' + binomPower + '}';
        }
        return binomTex;
    }

    findBinomCoefs = (leadingCoef, constant, xPower) => {
        let binomCoefs = [leadingCoef];
        for (let i = xPower - 1; i > 0; i--) {
            binomCoefs.push(0);
        }
        binomCoefs.push(constant);
        return binomCoefs;
    }

    findExpansionCoefs = (binomCoefs, binomPower) => {
        if (binomPower === 0) { return [1] };
        let expansionCoefs = binomCoefs;
        for (let i = 1; i < binomPower; i++) {
            expansionCoefs = myMath.polynomialProduct(expansionCoefs, binomCoefs);
        }
        return expansionCoefs;
    }

    generateQuestion = () => {
        // (ax^p+b)^m*(cx^q+d)^n
        // (leadingCoef1*x^xPower1+constant1)^binomPower1 * (leadingCoef2*x^xPower2+constant2)^binomPower2
        let binomPowerTotal = myMath.randomInteger(3, 10); //m+n
        let binomPower1 = myMath.randomInteger(0, binomPowerTotal); //m
        let binomPower2 = binomPowerTotal - binomPower1; //n
        let xPower1 = myMath.randomInteger(1, 2);
        let xPower2 = myMath.randomInteger(1, 2);
        Math.random() > 0.5 ? xPower1 = 1 : xPower2 = 1;
        let ab = [1, 1];
        Math.random() > 0.5 && binomPower1 <= 5 ? ab[myMath.randomInteger(0, 1)] *= 2 : void (0);
        let cd = [1, 1];
        Math.random() > 0.5 && binomPower2 <= 5 && myMath.arraysAreSame(ab, [1, 1], false) ? cd[myMath.randomInteger(0, 1)] *= 2 : void (0);
        let [leadingCoef1, constant1] = ab;
        let [leadingCoef2, constant2] = cd;
        Math.random() > 0.5 ? constant1 *= -1 : void (0);
        Math.random() > 0.5 ? constant2 *= -1 : void (0);

        let xPowerTotal = xPower1 * binomPower1 + xPower2 * binomPower2;
        let binomCoefs1 = this.findBinomCoefs(leadingCoef1, constant1, xPower1);
        let binomCoefs2 = this.findBinomCoefs(leadingCoef2, constant2, xPower2);
        if (myMath.arraysAreSame(binomCoefs1, binomCoefs2, true)) {
            binomPower1 += binomPower2;
            binomPower2 = 0;
        }
        let expansionCoefs1 = this.findExpansionCoefs(binomCoefs1, binomPower1);
        let expansionCoefs2 = this.findExpansionCoefs(binomCoefs2, binomPower2);
        let expansionCoefs = myMath.polynomialProduct(expansionCoefs1, expansionCoefs2);

        let askingPower = Math.random() > 0.5 ? myMath.randomInteger(1, 3) : Math.max(1, xPowerTotal - myMath.randomInteger(1, 3));
        let correctAnswer = expansionCoefs[xPowerTotal - askingPower];
        let questionExpression = binomPower1 * binomPower2 === 0
            ? binomPower1 === 0
                ? this.binomTex(leadingCoef2, constant2, xPower2, binomPower2)
                : this.binomTex(leadingCoef1, constant1, xPower1, binomPower1)
            : this.binomTex(leadingCoef1, constant1, xPower1, binomPower1)
            + '\\times' + this.binomTex(leadingCoef2, constant2, xPower2, binomPower2);
        let questionTerm = 'x' + (askingPower === 1 ? '' : '^{' + askingPower + '}');

        this.setState({ correctAnswer: correctAnswer });

        return (<>Expanding <MathComponent tex={questionExpression} display={false} />,
            what is the coefficient of <MathComponent tex={questionTerm} display={false} />?</>);
    }


    clearAnswerForm = () => {
        this.answerForm.current.focus();
        this.setState({ userAnswer: '' });
    }

    checkAnswer = () => {
        if (this.state.correctAnswer === parseInt(this.state.userAnswer)) {
            return true;
        } else {
            return `Incorrect! The correct answer is ${this.state.correctAnswer}.`;
        }
    }

    render() {
        let answerForm = <>
            Your answer: <input type="number" value={this.state.userAnswer}
                ref={this.answerForm}
                onChange={e => this.setState({ userAnswer: e.target.value })}></input>
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

export default BinomialTheorem;
