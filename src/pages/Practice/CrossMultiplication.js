import React, { Component } from "react";
import InlineBlanks from "../../components/InlineBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class FractionAdditionAndSubtraction extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: 0,
        userAnswer: '',
    };

    generateQuestion = () => {
        let question = '';
        let denominator1, denominator2, numerator1, numerator2;
        let scaleFactor1, scaleFactor2
        denominator1 = myMath.randomInteger(2, 10);
        numerator1 = myMath.randomInteger(1, denominator1 - 1);
        [numerator1, denominator1] = Math.random() > 0.5 ? [numerator1, denominator1] : [denominator1, numerator1];

        scaleFactor1 = myMath.randomInteger(2, 5);
        scaleFactor2 = myMath.randomInteger(1, scaleFactor1 - 1);

        denominator2 = denominator1 * scaleFactor2;
        numerator2 = numerator1 * scaleFactor2;

        denominator1 *= scaleFactor1;
        numerator1 *= scaleFactor1;

        [numerator1, numerator2, denominator1, denominator2] = Math.random() > 0.5
            ? [numerator1, numerator2, denominator1, denominator2]
            : [numerator2, numerator1, denominator2, denominator1];
        let xPositionID = myMath.randomInteger(1, 4);
        switch (xPositionID) {
            case 1:
                question = '{' + 'x' + '\\over' + denominator1 + '} = { ' + numerator2 + '\\over' + denominator2 + '}';
                this.setState({ correctAnswer: numerator1 });
                break;
            case 2:
                question = '{' + numerator1 + '\\over' + ' x' + '} = { ' + numerator2 + '\\over' + denominator2 + '}';
                this.setState({ correctAnswer: denominator1 });
                break;
            case 3:
                question = '{' + numerator1 + '\\over' + denominator1 + '} = { ' + 'x' + '\\over' + denominator2 + '}';
                this.setState({ correctAnswer: numerator2 });
                break;
            case 4:
                question = '{' + numerator1 + '\\over' + denominator1 + '} = { ' + numerator2 + '\\over' + ' x' + '}';
                this.setState({ correctAnswer: denominator2 });
                break;
            default:
                console.log(xPositionID);
                break
        }
        question = <MathComponent tex={'\\Large ' + question} />

        return question;
    }

    clearAnswerForm = () => {
        this.setState({ userAnswer: ''});
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        const correctAnswer = this.state.correctAnswer;
        const userAnswer = parseInt(this.state.userAnswer);
        if (userAnswer === correctAnswer) {
            return true;
        } else {
            return <MathComponent tex={'\\text{Incorrect! The correct answer is } ' + correctAnswer + '.'} display={false} />;
        }
    }

    render() {
        return (
            <InlineBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={(<>
                    <MathComponent tex={'\\Large x='} display={false}/>
                    <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
                        style={{ fontSize: '24px' }}
                        onChange={e => this.setState({ userAnswer: e.target.value })}></input>
                    <br/>
                </>)}

            />
        );
    }
}

export default FractionAdditionAndSubtraction;
