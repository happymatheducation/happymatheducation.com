import { Component } from "react";
import SimpleBlank from "../../components/SimpleBlank";

class SimpleAddition extends Component {

    generateQuestion = () => {
        const oneToN = 24;
        const x1 = Math.ceil(Math.random() * oneToN);
        const x2 = Math.ceil(Math.random() * oneToN);

        let question = '';
        question = x1 + '+' + x2 + '=~';

        const minSum = 2;
        const maxSum = oneToN * 2;
        let points = 0;
        points = Math.ceil((x1 + x2 - minSum + 1) / (maxSum - minSum + 1) * 5) * 10;

        return { pointsPerQuestion: points, correctAnswer: x1 + x2, question: question };
    }

    render() {
        return (
            <SimpleBlank generateQuestion={this.generateQuestion} />
        );
    }
}

export default SimpleAddition;
