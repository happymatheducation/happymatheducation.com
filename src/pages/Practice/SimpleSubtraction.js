import { Component } from "react";
import SimpleBlank from "../../components/SimpleBlank";
import { MathComponent } from "mathjax-react";

class SimpleSubtraction extends Component {

    state = {
        difference: '',
        userDifference: '',
        question: '',
        points:'',
    };

    generateQuestion = () => {
        const oneToN = 5;
        const x1 = Math.ceil(Math.random() * oneToN) + oneToN;
        const x2 = Math.ceil(Math.random() * oneToN);
        this.setState({ difference: x1-x2 });

        let question = '';
        question = x1 + '-' + x2 + '=~';
        this.setState({ question: question });

        const minSum = oneToN + 2;
        const maxSum = oneToN * 3;
        let points = 0;
        points = Math.ceil((x1 + x2 - minSum + 1) / (maxSum - minSum + 1) * 5) * 10;
        this.setState({ points: points });
    }

    getPoints = () => {
        return this.state.points;
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
            <SimpleBlank
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                getPoints={this.getPoints}

                clearAnswerForm={this.clearAnswerForm}
                answerForm={(
                    <>
                        <MathComponent tex={this.state.question} display={false} /><input value={this.state.userDifference} style={{ width: '50px' }}
                            onChange={e => this.setState({ userDifference: e.target.value })}></input><br></br><br></br>
                    </>
                )}
            />
        );
    }
}

export default SimpleSubtraction;
