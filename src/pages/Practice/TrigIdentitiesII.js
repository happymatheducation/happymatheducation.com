import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class TrigIdentitiesII extends Component {
    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        beforeBlank: '',

        userAnswerRawString: '',
        userAnswerIsFraction: '',
        userNumerator: '',
        userDenominator: '',
        userAnswer: '',

        correctAnswerIsFraction: '',
        correctNumerator: '',
        correctDenominator: '',
        correctAnswer: '',
        correctAnswerSign: '',

        hintTex:''
    };

    generateQuestion = () => {
        let problem, beforeBlank,
            correctAnswer, correctNumerator, correctDenominator, correctAnswerSign, correctAnswerIsFraction,
            hintTex;

        // The angles alpha and beta are used for sum or difference of angle formula for cosine and sine, only;
        let alpha = myMath.randomFromArray([
            { cos: [3, 5], sin: [4, 5] },
            { cos: [4, 5], sin: [3, 5] }
        ]);
        let beta = myMath.randomFromArray([
            { cos: [5, 13], sin: [12, 13] },
            { cos: [12, 13], sin: [5, 13] },
            { cos: [8, 17], sin: [15, 17] },
            { cos: [15, 17], sin: [8, 17] },
            { cos: [7, 25], sin: [24, 25] },
            { cos: [24, 25], sin: [7, 25] }
        ]);
        [alpha, beta] = [alpha, beta].sort(() => Math.random() - 0.5);
        alpha.cos[0] *= Math.random() < 0.5 ? 1 : -1;
        alpha.sin[0] *= Math.random() < 0.5 ? 1 : -1;
        beta.cos[0] *= Math.random() < 0.5 ? 1 : -1;
        beta.sin[0] *= Math.random() < 0.5 ? 1 : -1;
        let alphaBetaInfo = [
            '\\cos\\alpha = ' + myMath.fractionToTex(alpha.cos),
            '\\sin\\alpha = ' + myMath.fractionToTex(alpha.sin),
            '\\cos\\beta = ' + myMath.fractionToTex(beta.cos),
            '\\sin\\beta = ' + myMath.fractionToTex(beta.sin)
        ];
        alphaBetaInfo.sort(() => Math.random() - 0.5);

        // The tangent of theta1 and theta2 are used for sum or difference of angle formula, and double angle formula for tangent, only;
        let tanTheta1 = myMath.reduceFraction(myMath.randomInteger(1, 3), myMath.randomInteger(1, 3));
        let tanTheta2 = myMath.reduceFraction(myMath.randomInteger(1, 3), myMath.randomInteger(1, 3));
        tanTheta1[0] *= Math.random() < 0.5 ? 1 : -1;
        tanTheta2[0] *= Math.random() < 0.5 ? 1 : -1;

        // [sum, difference, double] * [cos, sin, tan]
        let problemTypeId = myMath.randomInteger(1, 9);
        switch (problemTypeId) {
            case 1: // cos(alpha + beta)
                beforeBlank = '\\cos(\\alpha + \\beta)=';
                problem = alphaBetaInfo[0] + ',~' + alphaBetaInfo[1] + ',~' + alphaBetaInfo[2] + ',~' + alphaBetaInfo[3] + '.~';
                [correctNumerator, correctDenominator] = myMath.fractionSubtraction(
                    myMath.fractionMultiplication(alpha.cos, beta.cos),
                    myMath.fractionMultiplication(alpha.sin, beta.sin)
                );
                hintTex = '\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta';
                break;
            case 2: // cos(alpha - beta)
                beforeBlank = '\\cos(\\alpha - \\beta)=';
                problem = alphaBetaInfo[0] + ',~' + alphaBetaInfo[1] + ',~' + alphaBetaInfo[2] + ',~' + alphaBetaInfo[3] + '.~';
                [correctNumerator, correctDenominator] = myMath.fractionAddition(
                    myMath.fractionMultiplication(alpha.cos, beta.cos),
                    myMath.fractionMultiplication(alpha.sin, beta.sin)
                );
                hintTex = '\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta';
                break;
            case 3: // sin(alpha + beta)
                beforeBlank = '\\sin(\\alpha + \\beta)=';
                problem = alphaBetaInfo[0] + ',~' + alphaBetaInfo[1] + ',~' + alphaBetaInfo[2] + ',~' + alphaBetaInfo[3] + '.~';
                [correctNumerator, correctDenominator] = myMath.fractionAddition(
                    myMath.fractionMultiplication(alpha.sin, beta.cos),
                    myMath.fractionMultiplication(alpha.cos, beta.sin)
                );
                hintTex = '\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta';
                break;
            case 4: // sin(alpha - beta)
                beforeBlank = '\\sin(\\alpha - \\beta)=';
                problem = alphaBetaInfo[0] + ',~' + alphaBetaInfo[1] + ',~' + alphaBetaInfo[2] + ',~' + alphaBetaInfo[3] + '.~';
                [correctNumerator, correctDenominator] = myMath.fractionSubtraction(
                    myMath.fractionMultiplication(alpha.sin, beta.cos),
                    myMath.fractionMultiplication(alpha.cos, beta.sin)
                );
                hintTex = '\\sin(\\alpha-\\beta)=\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta';
                break;
            case 5: // tan(theta1 + theta2)
                beforeBlank = '\\tan(\\theta_1 + \\theta_2)=';
                while (myMath.arraysAreSame([1, 1], myMath.fractionMultiplication(tanTheta1, tanTheta2), true)
                    || myMath.arraysAreSame(tanTheta1, tanTheta2)) {
                    tanTheta1 = myMath.reduceFraction(myMath.randomInteger(1, 3), myMath.randomInteger(1, 3));
                    tanTheta2 = myMath.reduceFraction(myMath.randomInteger(1, 3), myMath.randomInteger(1, 3));
                    tanTheta1[0] *= Math.random() < 0.5 ? 1 : -1;
                    tanTheta2[0] *= Math.random() < 0.5 ? 1 : -1;
                }
                problem = '\\tan\\theta_1 = ' + myMath.fractionToTex(tanTheta1)
                    + ',~\\tan\\theta_2 = ' + myMath.fractionToTex(tanTheta2) + '.~';
                [correctNumerator, correctDenominator] = myMath.fractionDivision(
                    myMath.fractionAddition(tanTheta1, tanTheta2),
                    myMath.fractionSubtraction([1, 1], myMath.fractionMultiplication(tanTheta1, tanTheta2))
                )
                hintTex = '\\tan(\\theta_1+\\theta_2)={\\tan\\theta_1+\\tan\\theta_2\\over1-\\tan\\theta_1\\tan\\theta_2}';
                break;
            case 6: // tan(theta1 - theta2)
                beforeBlank = '\\tan(\\theta_1 - \\theta_2)=';
                while (myMath.arraysAreSame([1, -1], myMath.fractionMultiplication(tanTheta1, tanTheta2), false)) {
                    tanTheta1 = myMath.reduceFraction(myMath.randomInteger(1, 3), myMath.randomInteger(1, 3));
                    tanTheta2 = myMath.reduceFraction(myMath.randomInteger(1, 3), myMath.randomInteger(1, 3));
                    tanTheta1[0] *= Math.random() < 0.5 ? 1 : -1;
                    tanTheta2[0] *= Math.random() < 0.5 ? 1 : -1;
                }
                problem = '\\tan\\theta_1 = ' + myMath.fractionToTex(tanTheta1)
                    + ',~\\tan\\theta_2 = ' + myMath.fractionToTex(tanTheta2) + '.~';
                [correctNumerator, correctDenominator] = myMath.fractionDivision(
                    myMath.fractionSubtraction(tanTheta1, tanTheta2),
                    myMath.fractionAddition([1, 1], myMath.fractionMultiplication(tanTheta1, tanTheta2))
                )
                hintTex = '\\tan(\\theta_1-\\theta_2)={\\tan\\theta_1-\\tan\\theta_2\\over1+\\tan\\theta_1\\tan\\theta_2}';
                break;
            case 7: // tan(2theta)
                beforeBlank = '\\tan(2\\theta)=';
                let tanTheta = tanTheta1;
                while (myMath.arraysAreSame([1, -1], tanTheta, false)
                    || myMath.arraysAreSame([1, 1], tanTheta, true)) {
                    tanTheta = myMath.reduceFraction(myMath.randomInteger(1, 3), myMath.randomInteger(1, 3));
                    tanTheta[0] *= Math.random() < 0.5 ? 1 : -1;
                }
                problem = '\\tan\\theta = ' + myMath.fractionToTex(tanTheta) + '.~';
                [correctNumerator, correctDenominator] = myMath.fractionDivision(
                    myMath.fractionAddition(tanTheta, tanTheta),
                    myMath.fractionSubtraction([1, 1], myMath.fractionMultiplication(tanTheta, tanTheta))
                )
                hintTex = '\\tan(2\\theta)={2\\tan\\theta\\over1-\\tan^2\\theta}';
                break;
            case 8: // cos(2theta)
                let cosOrSinThetaTex;
                beforeBlank = '\\cos(2\\theta)=';
                let d = myMath.randomInteger(2, 5); // cosOrSinTheta Denominator = d;
                let n = myMath.randomInteger(1, d * d - 1); // cosOrSinTheta Numerator = sqrt(n);
                let [p, k] = myMath.sqrtSimplification(n); // p*sqrt(k) = sqrt(n)
                [p, d] = myMath.reduceFraction(p, d); // reducing p/d
                if (k === 1) { cosOrSinThetaTex = '{' + p + ' \\over ' + d + '}' }
                else if (p === 1) { cosOrSinThetaTex = '{\\sqrt{' + k + '} \\over ' + d + '}' }
                else { cosOrSinThetaTex = '{' + p + '\\sqrt{' + k + '} \\over ' + d + '}' }; // cosOrSinThetaTex

                if (Math.random() > 0.5) { // 2cos^2theta - 1 = cos2theta
                    problem = '\\cos\\theta = ' + (Math.random() > 0.5 ? '' : '-') + cosOrSinThetaTex + '.~';
                    [correctNumerator, correctDenominator] = myMath.fractionSubtraction([2 * n, d * d], [1, 1]);
                    hintTex = '\\cos2\\theta = 2\\cos^2\\theta-1';
                } else { // 1 - 2sin^2theta = cos2theta
                    problem = '\\sin\\theta = ' + (Math.random() > 0.5 ? '' : '-') + cosOrSinThetaTex + '.~';
                    [correctNumerator, correctDenominator] = myMath.fractionSubtraction([1, 1], [2 * n, d * d]);
                    hintTex = '\\cos2\\theta = 1 - 2\\sin^2\\theta';
                }
                break;
            case 9: // sin(2theta)
                let cosThetaTex, sinThetaTex;

                beforeBlank = '\\sin(2\\theta)=';
                // a^2 + b^2 = c^2;
                let a = myMath.randomInteger(1, 3);
                let b = myMath.randomInteger(1, 7);
                let cc = a * a + b * b;

                // sinTheta = p1*sqrt(k1)/d1;
                let [d1, k1] = myMath.sqrtSimplification(cc);
                let p1;
                d1 = d1 * k1;
                [p1, d1] = myMath.reduceFraction(a, d1)
                if (k1 === 1) { sinThetaTex = '{' + p1 + ' \\over ' + d1 + '}' }
                else if (p1 === 1) { sinThetaTex = '{\\sqrt{' + k1 + '} \\over ' + d1 + '}' }
                else { sinThetaTex = '{' + p1 + '\\sqrt{' + k1 + '} \\over ' + d1 + '}' }; // sinThetaTex

                // cosTheta = b*sqrt(k2)/d2;
                let [d2, k2] = myMath.sqrtSimplification(cc);
                let p2;
                d2 = d2 * k2;
                [p2, d2] = myMath.reduceFraction(b, d2)
                if (k2 === 1) { cosThetaTex = '{' + p2 + ' \\over ' + d2 + '}' }
                else if (p2 === 1) { cosThetaTex = '{\\sqrt{' + k2 + '} \\over ' + d2 + '}' }
                else { cosThetaTex = '{' + p2 + '\\sqrt{' + k2 + '} \\over ' + d2 + '}' }; // cosThetaTex

                let isSinPositive = Math.random() > 0.5 ? 1 : -1;
                let isCosPositive = Math.random() > 0.5 ? 1 : -1;

                problem = '\\cos\\theta = ' + (isCosPositive===1 ? '' : '-') + cosThetaTex + ',~'
                    + '\\sin\\theta = ' + (isSinPositive===1 ? '' : '-') + sinThetaTex + '.~';
                [correctNumerator, correctDenominator] = myMath.reduceFraction(2 * a * b * isCosPositive * isSinPositive, cc);
                hintTex = '\\sin2\\theta = 2\\sin\\theta\\cos\\theta';
                break;
            default:
                break;
        }

        correctAnswer = correctNumerator / correctDenominator;
        correctAnswerSign = correctAnswer > 0 ? '' : '-';
        correctAnswerIsFraction = myMath.isInteger(correctAnswer) ? false : true;

        this.setState({
            correctAnswer: correctAnswer,
            correctAnswerIsFraction: correctAnswerIsFraction,
            correctNumerator: Math.abs(correctNumerator),
            correctDenominator: Math.abs(correctDenominator),
            correctAnswerSign: correctAnswerSign,
            beforeBlank: beforeBlank,
            hintTex: hintTex,
        });
        return <MathComponent display={false} tex={problem} />
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswerRawString: '',
            userDenominator: '',
            userNumerator: '',
            userAnswer: '',
            userAnswerIsFraction: null,
            userSign: '',
        });
        this.answerForm.current.focus();
    }

    handleUserAnswer = (rawString) => {
        this.setState({ userAnswerRawString: rawString });
        if (rawString.includes("/")) {
            let fractionPosition = rawString.indexOf("/");
            let numerator = rawString.substring(0, fractionPosition);
            let denominator = rawString.substring(fractionPosition + 1);
            this.setState({
                userAnswerIsFraction: true,
                userNumerator: numerator,
                userDenominator: denominator,
                userAnswer: '',
            });
        } else {
            this.setState({
                userAnswerIsFraction: false,
                userAnswer: rawString,
                userNumerator: '',
                userDenominator: '',
            })
        }
    }

    checkAnswer = () => {
        let correctAnswer;
        if (!this.state.userAnswerIsFraction) {
            if (parseFloat(this.state.userAnswer) === parseFloat(this.state.correctAnswer)) {
                return true;
            }
        } else {
            let userNumerator = parseInt(this.state.userNumerator);
            let userDenominator = parseInt(this.state.userDenominator);
            let userSign = '';
            if (userNumerator * userDenominator < 0) {
                userSign = '-';
                userNumerator = Math.abs(userNumerator);
                userDenominator = Math.abs(userDenominator);
            }
            if (this.state.correctAnswerIsFraction
                && userNumerator === this.state.correctNumerator
                && userDenominator === this.state.correctDenominator
                && userSign === this.state.correctAnswerSign) {
                return true;
            }
        }
        if (!this.state.correctAnswerIsFraction) {
            correctAnswer = this.state.correctAnswer;
        } else {
            correctAnswer = <MathComponent display={false}
                tex={String.raw`${this.state.correctAnswerSign}{${this.state.correctNumerator} \over ${this.state.correctDenominator}}`} />;
        }
        return (<>Incorrect! The correct answer is {correctAnswer}. Hint: <MathComponent display={false} tex={this.state.hintTex} /></>);
    }

    render() {

        let answerForm = (<>
            <MathComponent display={false} tex={this.state.beforeBlank} />
            <input className='longFraction' type="text" value={this.state.userAnswerRawString} ref={this.answerForm} autoFocus
                onChange={e => this.handleUserAnswer(e.target.value)}></input><br />
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

export default TrigIdentitiesII;
