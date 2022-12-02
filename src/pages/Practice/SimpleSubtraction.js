import { Component } from "react";
import PracticeQuiz from "../../components/PracticeQuiz";
import { MathComponent } from "mathjax-react";

class SimpleSubtraction extends Component {

    state = {
        difference: '',
        userDifference:''
    };

    generateQuestion = () => {
        const x1 = Math.floor(Math.random() * 5)+6;
        const x2 = Math.floor(Math.random() * 5)+1;
        this.setState({ difference: x1-x2 });

        let question = '';

        question = x1 + '-' + x2 + '=?';

        return (<MathComponent tex={question} />);
    }

    clearAnswerForm = () => {
        this.setState({ userDifference: '' });
    }

    checkAnswer = () => {
        const userDifference = parseInt(this.state.userDifference);
        if (userDifference === this.state.difference){
            return true;
        } else {
            return `Incorrect! The correct answer is ${this.state.difference}.`;
        }
    }

    render() {
        return (
            <PracticeQuiz
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}

                clearAnswerForm={this.clearAnswerForm}
                answerForm={(
                    <>
                        <input type="number" value={this.state.userDifference}
                            onChange={e => this.setState({ userDifference: e.target.value })}></input><br></br><br></br>
                    </>
                )}
            />
        );
    }
}

export default SimpleSubtraction;
