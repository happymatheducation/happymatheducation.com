import { Component } from "react";
import PracticeQuiz from "../../components/PracticeQuiz";
import { MathComponent } from "mathjax-react";

class SimpleMultiplication extends Component {

    state = {
        product: '',
        userProduct:''
    };

    generateQuestion = () => {
        const x1 = Math.ceil(Math.random() * 8)+2;
        const x2 = Math.ceil(Math.random() * 8)+2;
        this.setState({ product: x1*x2 });

        let question = '';

        question = x1 + String.raw`\times` + x2 + '=?';

        return (<MathComponent tex={question} />);
    }

    clearAnswerForm = () => {
        this.setState({ userProduct: '' });
    }

    checkAnswer = () => {
        const userProduct = parseInt(this.state.userProduct);
        if (userProduct === this.state.product){
            return true;
        } else {
            return `Incorrect! The correct answer is ${this.state.product}.`;
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
                        <input type="number" value={this.state.userProduct}
                            onChange={e => this.setState({ userProduct: e.target.value })}></input><br></br><br></br>
                    </>
                )}
            />
        );
    }
}

export default SimpleMultiplication
;
