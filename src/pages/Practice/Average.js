import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; //example [{prime:2,power:3}, {prime:3, power:1}];

class Average extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        primeFactorizationString: '',
    };

    generateQuestion = () => {

        const n = myMath.randomInteger(2, 5);
        let sum = myMath.randomInteger(10, 25);
        const avg = Math.floor(sum / n);
        sum = avg * n;

        let a = [];
        a[0] = 0;
        for (let i = 1; i < n; i++) {
            a[i] = myMath.randomInteger(1, sum);
        }
        a.sort((ai, aj) => ai - aj);
        a[n] = sum;

        let d = [];
        for (let i = 0; i < n; i++) {
            d[i] = a[i + 1] - a[i];
        }

        let dataString = '';
        for (let i = 0; i < n; i++) {
            dataString += d[i];
            if (i !== n - 1) {
                dataString += ', ';
            }
        }

        this.setState({
            correctAnswer: avg,
        })

        return (<>What is the average of the data set below? <MathComponent display={true} tex={dataString} /></>);
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
        return <MathComponent display={false}
            tex={String.raw`\text{Incorrect! Answer: }${correctAnswer}.~`} />;
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

export default Average;
