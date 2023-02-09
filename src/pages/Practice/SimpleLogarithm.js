import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; 

class SimpleLogarithm extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        beforeBlank: '',

        userAnswerRawString:'',
        userAnswerIsFraction: '',
        userNumerator: '',
        userDenominator: '',
        userAnswer: '',

        correctAnswerIsFraction: '',
        correctNumerator: '',
        correctDenominator: '',
        correctAnswer: '',
        correctAnswerSign: '',
    };

    problemTypeSelector = (a, p) => {
        const aToTheP = a ** p;
        let aToTheNewP = aToTheP;
        let newPIsFraction, newP;
        let newPDenominator = '';
        let newPNumerator = '';
        if (Math.random() < 0.7 && p !== 1) {
            newPIsFraction = false;
            newP = p;
            newPDenominator = 1;
            newPNumerator = p;
        } else if (Math.random() < 0.7 || p === 1) {
            if (Math.random() < 0.5 && p === 1) {
                let n = myMath.randomInteger(2, 10);
                aToTheNewP = n === 2 ? `{\\sqrt{${aToTheP}}}` : `{\\sqrt[{${n}}]{${aToTheP}}}`
                newPIsFraction = true;
                newP = p / n;
                newPDenominator = n;
                newPNumerator = p;
            } else {
                aToTheNewP = `{1 \\over ${aToTheP}}`
                newPIsFraction = false;
                newP = -p;
                newPDenominator = 1;
                newPNumerator = -p;
            }
        } else {
            let n;
            if (p === 2) { n = p + 1 } else { n = Math.random() < 0.5 ? p + 1 : p - 1 };
            aToTheNewP = n === 2 ? `{\\sqrt{${aToTheP}}}` : `{\\sqrt[{${n}}]{${aToTheP}}}`
            newPIsFraction = true;
            newP = p / n;
            newPDenominator = n;
            newPNumerator = p;
        }
        return [aToTheNewP, newP, newPIsFraction, newPDenominator, newPNumerator];
    }

    generateQuestion = () => {
        // formulas:
        // logaa^p=p or plogba = logba^p; for types: p=+-2, p=+-3, p=+-1, a=2, blanks=a, p, a^p; for type: p=m/n, blank=p
        // logaX + logaY = logaXY; blanks=X, Y, XY
        // logaX - logaY = logaX/Y; blanks=X, Y, X/Y
        // change base formula; loga^p1 a^p2=p2/p1, blank=p2/p1
        // logaR1 * logR1R2 * logR2R3 *...* logRna^p=p; for types: p=+-2, p=+-3, p=+-1, a=2, blanks=a, p, a^p; for type: p=m/n, blank=p
        // logab = 1/logba; example if logab=2 then logba=?

        // a^p=c
        const allPowers = [
            { a: 2, p: 1},
            { a: 2, p: 2},
            { a: 2, p: 3},
            { a: 2, p: 4},
            { a: 2, p: 5},
            { a: 2, p: 6},
            { a: 2, p: 7},
            { a: 2, p: 8},
            { a: 2, p: 9},
            { a: 2, p: 10},
            { a: 3, p: 1},
            { a: 3, p: 2},
            { a: 3, p: 3},
            { a: 3, p: 4},
            { a: 3, p: 5},
            { a: 3, p: 6},
            { a: 4, p: 1},
            { a: 4, p: 2},
            { a: 4, p: 3},
            { a: 4, p: 4},
            { a: 4, p: 5},
            { a: 5, p: 1},
            { a: 5, p: 2},
            { a: 5, p: 3},
            { a: 5, p: 4},
            { a: 6, p: 1},
            { a: 6, p: 2},
            { a: 6, p: 3},
            { a: 7, p: 1},
            { a: 7, p: 2},
            { a: 7, p: 3},
            { a: 8, p: 1},
            { a: 8, p: 2},
            { a: 8, p: 3},
            { a: 9, p: 1},
            { a: 9, p: 2},
            { a: 9, p: 3},
            { a: 10, p: 1},
            { a: 10, p: 2},
            { a: 10, p: 3},
            { a: 10, p: 4},
            { a: 10, p: 5},
            { a: 11, p: 1},
            { a: 12, p: 1 },
            { a: 13, p: 1 },
            { a: 14, p: 1 },
            { a: 15, p: 1 },
            { a: 16, p: 1 },
            { a: 17, p: 1 },
            { a: 18, p: 1 },
            { a: 19, p: 1 },
            { a: 20, p: 1 },
            { a: 11, p: 2},
            { a: 12, p: 2},
            { a: 13, p: 2},
            { a: 14, p: 2},
            { a: 15, p: 2},
            { a: 16, p: 2},
            { a: 17, p: 2},
            { a: 18, p: 2},
            { a: 19, p: 2},
            { a: 20, p: 2},
        ]

        let power = allPowers[Math.floor(Math.random() * allPowers.length)];
        let p = power.p;
        let a = power.a;
        let [aToTheNewP, newP, newPIsFraction, newPDenominator, newPNumerator] = this.problemTypeSelector(a, p);

        if (Math.random() < 0.5) {
            // logaa^p=p or plogba = logba^p; for types: p=+-2, p=+-3, p=+-1, a=2, blanks=a, p, a^p; for type: p=m/n, blank=p
            this.setState({
                beforeBlank: 'Your Answer: ',
                correctAnswer: newP,
                correctAnswerIsFraction: newPIsFraction,
                correctDenominator: newPDenominator,
                correctNumerator: newPNumerator,
                correctAnswerSign: newP < 0 ? '-' : '',
            })
            return <MathComponent display={false} tex={`\\log_{${a}}${aToTheNewP}=?`} />;
        }
        else if (Math.random() < 0.5) {
            if (Math.random() < 0.5) {
                // logam + logan = logax; blank=x
                let m = myMath.randomInteger(2, 12);
                let n = myMath.randomInteger(2, 12);
                let x = m * n;
                this.setState({
                    beforeBlank: <MathComponent display={false} tex={`x=`} />,
                    correctAnswer: x,
                    correctAnswerIsFraction: false,
                    correctDenominator: 1,
                    correctNumerator: x,
                    correctAnswerSign: '',
                })
                return <MathComponent display={false} tex={`\\log_{${a}}${m}+\\log_{${a}}${n}=\\log_{${a}}x`}/>;
            }
            else {
                // logam - logan = logax; blank=x
                let n = myMath.randomInteger(2, 12);
                let x = myMath.randomInteger(2, 12);
                let m = x * n;
                this.setState({
                    beforeBlank: <MathComponent display={false} tex={`x=`} />,
                    correctAnswer: x,
                    correctAnswerIsFraction: false,
                    correctDenominator: 1,
                    correctNumerator: x,
                    correctAnswerSign: '',
                })
                return <MathComponent display={false} tex={`\\log_{${a}}${m}-\\log_{${a}}${n}=\\log_{${a}}x`} />;
            }
        }
        else if (Math.random() < 0.8) {
            // change base formula; loga^p0 a^p=p/p0, blank=p/p0
            const _allPowers = allPowers.filter(value => value.a === a);
            let power0 = _allPowers[Math.floor(Math.random() * _allPowers.length)];
            let p0 = power0.p;
            let [aToTheNewP0, newP0, newP0IsFraction, newP0Denominator, newP0Numerator] = this.problemTypeSelector(a, p0);
            while (newP0 === newP) { [aToTheNewP0, newP0, newP0IsFraction, newP0Denominator, newP0Numerator] = this.problemTypeSelector(a, p0); }
            
            let [correctNumerator, correctDenominator] = myMath.reduceFraction(newPNumerator * newP0Denominator, newP0Numerator * newPDenominator);

            this.setState({
                beforeBlank: 'Your Answer: ',
                correctAnswer: newP / newP0,
                correctAnswerIsFraction: Number.isInteger(newP / newP0) ? false : true,
                correctDenominator: Math.abs(correctDenominator),
                correctNumerator: Math.abs(correctNumerator),
                correctAnswerSign: correctDenominator * correctNumerator<0?'-':'',
            })
            return <MathComponent display={false} tex={`\\log_{${aToTheNewP0}}${aToTheNewP}=?`} />;
        }
        else if (Math.random() < 0.5) {
            // logaR1 * logR1R2 * logR2a^p=p; blank=p 
            let R1 = myMath.randomInteger(20, 99);
            let R2 = myMath.randomInteger(20, 99);

            this.setState({
                beforeBlank: 'Your Answer: ',
                correctAnswer: newP,
                correctAnswerIsFraction: newPIsFraction,
                correctDenominator: newPDenominator,
                correctNumerator: newPNumerator,
                correctAnswerSign: newP < 0 ? '-' : '',
            })
            return <MathComponent display={false} tex={`(\\log_{${a}}${R1})(\\log_{${R1}}${R2})\\log_{${R2}}${aToTheNewP}=?`} />;
        }
        else {
            // logab = value = 1/logba; example if logab=2 then logba=?
            let value = myMath.randomInteger(2, 20);
            let valueRawString;
            if (Math.random() < 0.5) {
                valueRawString = value;
                this.setState({
                    correctAnswer: 1 / value,
                    correctAnswerIsFraction: true,
                    correctNumerator: 1,
                    correctDenominator: value,
                    correctAnswerSign:'',
                });
            } else {
                valueRawString = `{1 \\over ${value}}`;
                this.setState({
                    correctAnswer: value,
                    correctAnswerIsFraction: false,
                })
            }
            this.setState({ beforeBlank: <MathComponent display={false} tex={`\\log_ba=`} /> });
            return (<MathComponent display={false} tex={`\\log_ab=${valueRawString}`} />);
        }
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswerRawString: '',
            userDenominator: '',
            userNumerator: '',
            userAnswer: '',
            userAnswerIsFraction: null,
            userSign:'',
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
        return (<>Incorrect! The correct answer is {correctAnswer}</>);
    }

render() {

    let answerForm = (<>
        {this.state.beforeBlank} <input type="text" value={this.state.userAnswerRawString} ref={this.answerForm} autoFocus
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

export default SimpleLogarithm;
