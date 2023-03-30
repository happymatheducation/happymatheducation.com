import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class DistanceBetweenTwoPoints extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '', // AB ** 2
        userAnswer: '',  // 
    };

    generateQuestion = () => {
        const x1 = myMath.randomInteger(-4, 5);
        const x2 = myMath.randomInteger(-4, 5);
        const y1 = myMath.randomInteger(-4, 5);
        const y2 = myMath.randomInteger(-4, 5);
        let correctAnswer = (x1 - x2) ** 2 + (y1 - y2) ** 2;
        this.setState({ correctAnswer: correctAnswer });
        return <>
            Given <MathComponent display={false} tex={'A(' + x1 + ',' + y1 + ')'} /> and <MathComponent display={false} tex={'B(' + x2 + ',' + y2 + ').~'} />
        </>
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: '',
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        if (parseInt(this.state.userAnswer) === parseInt(this.state.correctAnswer)) {
            return true;
        } 
        return (<>Incorrect! The correct answer is {this.state.correctAnswer}</>);
    }

    render() {
        let answerForm = (<>
            <MathComponent display={false} tex={'\\text{AB}^2 = '} /> <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus 
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

export default DistanceBetweenTwoPoints;
