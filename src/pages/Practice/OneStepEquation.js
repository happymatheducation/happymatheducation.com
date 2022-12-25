import { Component } from "react";
import SimpleBlank from "../../components/SimpleBlank";

class OneStepEquation extends Component {

    generateQuestion = () => {
        /* a?b=c */
        const numberOfProblemTypes = 8; // ?+x2, x1+?, ?-x1, y-?, ?*x2, x1*?, ?/x1, y/?
        const problemSelector = Math.ceil(Math.random() * numberOfProblemTypes);
        let points = 0;
        let beforeBlank;
        let afterBlank;
        let correctAnswer;

        if (problemSelector <= 4) { // x1+x2=y or y-x1=x2
            const oneToN = 24;
            const x1 = Math.ceil(Math.random() * oneToN);
            const x2 = Math.ceil(Math.random() * oneToN);
            const y = x1 + x2;
            const minSum = 2;
            const maxSum = oneToN * 2;
            points = Math.ceil((x1 + x2 - minSum + 1) / (maxSum - minSum + 1) * 5) * 10;
            switch (problemSelector) {
                case 1:
                    beforeBlank = '';
                    afterBlank = '+' + x2 + '=' + y;
                    correctAnswer = x1;
                    break;
                case 2:
                    beforeBlank = x1+'+';
                    afterBlank = '=' + y;
                    correctAnswer = x2;
                    break;
                case 3:
                    beforeBlank = '';
                    afterBlank = '-' + x1 + '=' + x2;
                    correctAnswer = y;
                    break;
                case 4:
                    beforeBlank = y + '-';
                    afterBlank = '=' + x2;
                    correctAnswer = x1;
                    break;
                default:
                    console.log('problemSelector = ' + problemSelector);
            }
        } else { // x1*x2=y or y/x1=x2
            const minX1 = 3;
            const minX2 = 3;
            const maxX1 = 10;
            const maxX2 = 10;
            const x1 = Math.floor(Math.random() * (maxX1 - minX1 + 1)) + minX1;
            const x2 = Math.floor(Math.random() * (maxX2 - minX2 + 1)) + minX1;
            const y = x1 * x2;
            const minSum = minX1 + minX2;
            const maxSum = maxX1 + maxX2;
            points = Math.ceil((x1 + x2 - minSum + 1) / (maxSum - minSum + 1) * 5) * 10;
            switch (problemSelector) {
                case 5:
                    beforeBlank = '';
                    afterBlank = String.raw`\times` + x2 + '=' + y;
                    correctAnswer = x1;
                    break;
                case 6:
                    beforeBlank = x1 + String.raw`\times`;
                    afterBlank = '=' + y;
                    correctAnswer = x2;
                    break;
                case 7:
                    beforeBlank = '';
                    afterBlank = String.raw`\div` + x1 + '=' + x2;
                    correctAnswer = y;
                    break;
                case 8:
                    beforeBlank = y + String.raw`\div`;
                    afterBlank = '=' + x2;
                    correctAnswer = x1;
                    break;
                default:
                    console.log('problemSelector = ' + problemSelector);
            }

        }
        return { pointsPerQuestion: points, correctAnswer: correctAnswer, beforeBlank: beforeBlank, afterBlank: afterBlank };
    }

    render() {
        return (
            <SimpleBlank generateQuestion={this.generateQuestion} formSize='40px' texSize='\Huge'/>
        );
    }
}

export default OneStepEquation;
