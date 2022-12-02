import { Component } from "react";
import SimpleBlank from "../../components/SimpleBlank";
import { MathComponent } from "mathjax-react";

class SimpleMultiplication extends Component {

    state = {
        product: '',
        userProduct: '',
        question: '',
        points:'',
    };

    generateQuestion = () => {
        const minX1 = 3;
        const minX2 = 3;
        const maxX1 = 10;
        const maxX2 = 10;
        const x1 = Math.floor(Math.random() * (maxX1 - minX1 + 1)) + minX1;
        const x2 = Math.floor(Math.random() * (maxX2 - minX2 + 1)) + minX1;
        this.setState({ product: x1*x2 });

        let question = '';
        question = x1 + String.raw`\times` + x2 + '=~';
        this.setState({ question: question });

        const minSum = minX1 + minX2;
        const maxSum = maxX1 + maxX2;
        let points = 0;
        points = Math.ceil((x1 + x2 - minSum + 1) / (maxSum - minSum + 1) * 5) * 10;
        this.setState({ points: points });
    }

    getPoints = () => {
        return this.state.points;
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
            <SimpleBlank
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                getPoints={this.getPoints}

                clearAnswerForm={this.clearAnswerForm}
                answerForm={(
                    <>
                        <MathComponent tex={this.state.question} display={false} /><input type='number' value={this.state.userProduct} style={{ width:'50px' }}
                            onChange={e => this.setState({ userProduct: e.target.value}) }></input><br></br><br></br>
                    </>
                )}
            />
        );
    }
}

export default SimpleMultiplication
;
