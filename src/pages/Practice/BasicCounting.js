import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; //example [{prime:2,power:3}, {prime:3, power:1}];

export default class BasicCounting extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        hint:'',
    };

    generateQuestion = () => {

        const including0 = Math.random() > 0.5 ? true : false;
        const withRepetition = Math.random() > 0.5 ? true : false;
        const digitCount = myMath.randomInteger(2, 9);
        const placeCount = withRepetition
            ? myMath.randomInteger(2, Math.floor(Math.log(200) / Math.log(digitCount)))
            : myMath.randomInteger(2, Math.min(digitCount, Math.floor(Math.log(200) / Math.log(digitCount))));

        let digits = '';
        let correctAnswer = 1;
        let hint='';
        if (!including0) {
            if (withRepetition) {
                correctAnswer = digitCount ** placeCount;
                hint = digitCount + '';
                for (let i = 1; i < placeCount; i++) {
                    hint += '\\times' + digitCount;
                }
            } else { // without repetition
                for (let i = 0; i < placeCount; i++) {
                    correctAnswer *= digitCount - i;
                    hint += digitCount - i + '';
                    if (i !== placeCount - 1) {
                        hint += '\\times';
                    }
                }
            }
            for (let i = 1; i <= digitCount; i++) {
                digits += i;
                if (i !== digitCount) {
                    digits += ',';
                }
            }
        } else { // including0
            if (withRepetition) {
                correctAnswer = digitCount ** (placeCount - 1);
                correctAnswer *= digitCount - 1;
                hint = digitCount-1 + '';
                for (let i = 1; i < placeCount; i++) {
                    hint += '\\times' + digitCount;
                }
            } else { // without repetition
                correctAnswer = digitCount - 1;
                hint = digitCount - 1;
                for (let i = 1; i < placeCount; i++) {
                    correctAnswer *= digitCount - i;
                    hint += '\\times' + (digitCount - i);
                }
            }

            for (let i = 0; i < digitCount; i++) {
                digits += i;
                if (i !== digitCount-1) {
                    digits += ',';
                }
            }
        }

        this.setState({
            correctAnswer: correctAnswer,
            hint: hint,
        })

        return (<>How many {placeCount}-digit numbers {withRepetition ? 'contain only, not necessarily distinct' : 'are made of distinct'} digits from: <MathComponent display={false} tex={'\\{'+digits+'\\}'} /> ?</>);
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: ''
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctAnswer;
        if (parseInt(this.state.userAnswer) === this.state.correctAnswer) {
            return true;
        } else {
            correctAnswer = this.state.correctAnswer;
        }
        return (<>
            <MathComponent display={false}
                tex={String.raw`\text{Incorrect! Answer: }${ correctAnswer }.~`} />
            <MathComponent display={false} tex={String.raw`\text {Hint: }`
                + this.state.hint} /></>
        );
}

render() {

    let answerForm = (<>
        Your answer: <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
            onChange={e => this.setState({ userAnswer: e.target.value })}></input><br />
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
