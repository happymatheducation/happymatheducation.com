import { Component } from "react";
import SimpleBlank from "../../components/SimpleBlank";
import { MathComponent } from "mathjax-react";

class SimpleAddition extends Component {

    state = {
        sum: '',
        userSum: '',
        question: '',
        points:'',
    };

    generateQuestion = () => {
        const oneToN = 24;
        const x1 = Math.ceil(Math.random() * oneToN);
        const x2 = Math.ceil(Math.random() * oneToN);
        this.setState({ sum: x1+x2 });

        let question = '';
        question = x1 + '+' + x2 + '=~';
        this.setState({ question: question });

        const minSum = 2;
        const maxSum = oneToN * 2;
        let points = 0;
        points = Math.ceil((x1 + x2 - minSum + 1) / (maxSum - minSum + 1) * 5) * 10;
        this.setState({ points: points });
    }

    getPoints = () => {
        return this.state.points;
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
            <SimpleBlank
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                getPoints={this.getPoints}

                clearAnswerForm={this.clearAnswerForm}
                answerForm={(
                    <>
                        <MathComponent tex={this.state.question} display={false} /><input value={this.state.userSum} style={{ width: '50px' }}
                            onChange={e => this.setState({ userSum: e.target.value })}></input><br></br><br></br>
                    </>
                )}
            />
        );
    }
}

export default SimpleAddition;
