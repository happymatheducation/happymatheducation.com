import { Component } from "react";
import SimpleBlank from "../../components/SimpleBlank";

class SimpleSubtraction extends Component {

    generateQuestion = () => {
        const oneToN = 5;
        const x1 = Math.ceil(Math.random() * oneToN) + oneToN;
        const x2 = Math.ceil(Math.random() * oneToN);

        let question = '';
        question = x1 + '-' + x2 + '=~';

        const minSum = oneToN + 2;
        const maxSum = oneToN * 3;
        let points = 0;
        points = Math.ceil((x1 + x2 - minSum + 1) / (maxSum - minSum + 1) * 5) * 10;

        return { pointsPerQuestion: points, correctAnswer: x1 - x2, beforeBlank: question, afterBlank:'' };
    }

    render() {
        return (
            <SimpleBlank generateQuestion={this.generateQuestion} formSize='40px' texSize='\Huge' />
        );
    }
}

export default SimpleSubtraction;
