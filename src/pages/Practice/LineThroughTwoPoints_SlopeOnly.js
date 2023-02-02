import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class LineThroughTwoPointsSlopeOnly extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswerIsFraction: null,
        correctAnswer: '', // including sign

        correctAnswerSign: '',
        correctNumerator: '',
        correctDenominator: '',

        userAnswerIsFraction: null,
        userAnswer: '',  // including sign

        userNumerator: '',
        userDenominator: '',

        userAnswerRawString:'',
    };

    generateQuestion = () => {
        // 0.666666666666666 === 2 / 3 // false
        // 0.6666666666666666 === 2 / 3 // true

        const x1 = myMath.randomInteger(-5, 10);
        const y1 = myMath.randomInteger(-5, 10);
        const y2 = myMath.randomInteger(-5, 10);
        let x2 = x1;
        while (x2 === x1) { x2 = myMath.randomInteger(-5, 10) };
        let slope = (y2 - y1) / (x2 - x1);
        this.setState({ correctAnswer: slope });
        if (Number.isInteger(slope)) {
            this.setState({
                correctAnswerIsFraction: false,
                correctDenominator: '',
                correctNumerator: '',
                correctAnswerSign:'',
            });
        } else {
            let [numerator, denominator] = myMath.reduceFraction(y2 - y1, x2 - x1);
            this.setState({ correctAnswerSign: numerator * denominator > 0 ? '' : '-' });
            numerator = Math.abs(numerator);
            denominator = Math.abs(denominator);
            this.setState({
                correctAnswerIsFraction: true,
                correctNumerator: numerator,
                correctDenominator: denominator,
            })
        }
        return <>Find the slope of the line through <MathComponent display={false} tex={'A(' + x1 + ',' + y1 + ')'} /> and <MathComponent display={false} tex={'B(' + x2 + ',' + y2 + ').~'} />
            (Please type 'a/b' for fraction <MathComponent display={false} tex={'a \\over b'} />)</>
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswerIsFraction: null,
            userAnswer: '',
            userSign: '',
            userNumerator: '',
            userDenominator: '',
            userAnswerRawString: '',
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctSlope;
        if (!this.state.userAnswerIsFraction) {
            if (parseFloat(this.state.userAnswer) === parseFloat(this.state.correctAnswer)) {
                return true;
            } 
        } else {
            let userNumerator = parseInt(this.state.userNumerator);
            let userDenominator = parseInt(this.state.userDenominator);
            let userSign='';
            if (userNumerator * userDenominator < 0) {
                userSign= '-';
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
            correctSlope = this.state.correctAnswer;
        } else {
            correctSlope = <MathComponent display={false}
                tex={String.raw`${this.state.correctAnswerSign}{${this.state.correctNumerator} \over ${this.state.correctDenominator}}`} />;
        }
        return (<>Incorrect! The correct answer is {correctSlope}</>);
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


    render() {
        let answerForm = (<>
            Your answer: <input type="text" value={this.state.userAnswerRawString} ref={this.answerForm} autoFocus 
                onChange={e => this.handleUserAnswer(e.target.value )}></input><br />
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

export default LineThroughTwoPointsSlopeOnly;
