import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class NumberBaseChange extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
    };

    generateQuestion = () => {

        const baseB = myMath.randomInteger(2, 9);
        let max = 2 * baseB * baseB;
        let base10Rep = myMath.randomInteger(baseB, max);
        let baseBRep = myMath.integerBaseChange(base10Rep, 10, baseB);
        let questionString = '';

        if (Math.random() < 0.5) { // Change from base 10 to baseB
            questionString = '\\text{Change }' + base10Rep + '\\text{ to base }' + baseB;
            this.setState({ correctAnswer: baseBRep });
        } else { // Change from baseB to base 10
            questionString = '\\text{Change the base }' + baseB + '\\text{ number }' + '(' + baseBRep + ')_' + baseB + '\\text{ to base 10}';
            this.setState({ correctAnswer: base10Rep });
        }

        return (<MathComponent display={false} tex={questionString} />);
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
            <MathComponent display={false}
                tex={String.raw`\text{Incorrect! Answer: }${ correctAnswer }`} />
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

export default NumberBaseChange;
