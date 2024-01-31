import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class PolynomialInequality extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
    };

    generateQuestion = () => {
        let allRoots = [];
        while (allRoots.length <= 1) {
            allRoots = [];
            for (let i = 0; i < 10; i++) {
                if (Math.random() > 0.7) {
                    allRoots.push({ value: i + 1, multiplicity: myMath.randomInteger(1, 10) });
                }
            }
        }

        let questionString = myMath.roots2PolynomialString(allRoots);

        let positiveInterval = 1;
        let yPositive = true; 

        for (let i = allRoots.length; i > 0; i--) {
            let currentRoot = allRoots[i - 1];
            if (currentRoot.multiplicity % 2 === 1) { yPositive = !yPositive }
            if (yPositive) { positiveInterval++ }
        }

        let correctAnswer;
        if (Math.random() > 0.5) {
            correctAnswer = positiveInterval;
            questionString = questionString + '>0'
        } else {
            correctAnswer = allRoots.length + 1 - positiveInterval;
            questionString = questionString + '<0'
        }


        this.setState({
            correctAnswer: correctAnswer,
        })

        return (<>How many disjoint intervals are in the solution of <br/>
            <MathComponent display={false} tex={questionString} /></>);
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
        return (
            <MathComponent display={false} tex={String.raw`\text{Incorrect! Answer: }${correctAnswer}.~`} />
        );
    }

    render() {

        let answerForm = (<>
            Your Answer: <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
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

export default PolynomialInequality;
