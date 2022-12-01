import { Component } from "react";
import PracticeQuiz from "../../components/PracticeQuiz";
import { MathComponent } from "mathjax-react";

class SimpleAddition extends Component {

    state = {
        sum: '',
        userSum:''
    };

    generateQuestion = () => {
        const x1 = Math.floor(Math.random() * 25);
        const x2 = Math.floor(Math.random() * 25);
//        const x1 = Math.floor(Math.random() * 5)+6;
//        const x2 = Math.floor(Math.random() * 5)+1;
        this.setState({ sum: x1+x2 });

        let question = '';

        question = x1 + '+' + x2 + '=?';

        return (<MathComponent tex={question} />);
    }

    clearAnswerForm = () => {
        this.setState({ userSum: '' });
    }

    checkAnswer = () => {
        const userSum = parseInt(this.state.userSum);
        if (userSum === this.state.sum){
            return true;
        } else {
            return `Incorrect! The correct answer is ${this.state.sum}.`;
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
                        <input type="number" value={this.state.userSum}
                            onChange={e => this.setState({ userSum: e.target.value })}></input><br></br><br></br>
                    </>
                )}
            />
        );
    }
}

export default SimpleAddition;
