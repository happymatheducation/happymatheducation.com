import { Component } from "react";
import SimpleBlank from "../../components/SimpleBlank";

class SimpleMultiplication extends Component {

    generateQuestion = () => {
        const minX1 = 3;
        const minX2 = 3;
        const maxX1 = 10;
        const maxX2 = 10;
        const x1 = Math.floor(Math.random() * (maxX1 - minX1 + 1)) + minX1;
        const x2 = Math.floor(Math.random() * (maxX2 - minX2 + 1)) + minX1;

        let question = '';
        question = x1 + String.raw`\times` + x2 + '=~';

        const minSum = minX1 + minX2;
        const maxSum = maxX1 + maxX2;
        let points = 0;
        points = Math.ceil((x1 + x2 - minSum + 1) / (maxSum - minSum + 1) * 5) * 10;

        return { pointsPerQuestion: points, correctAnswer: x1 * x2, beforeBlank: question, afterBlank:'' };
    }

    render() {
        return (
            <SimpleBlank generateQuestion={this.generateQuestion} formSize='40px' texSize='\Huge' />
        );
    }
}

export default SimpleMultiplication;
