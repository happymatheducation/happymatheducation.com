import { Component } from "react";
import ImmediateMultipleChoice from "../../components/ImmediateMultipleChoice";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";


class SimpleTrigIequality extends Component {

    state = {
        correctChoiceID: '',
        allChoices: [],
        allBoundaries : [
            { id: -3, value: - Math.sqrt(3) / 2, tex: '-{\\sqrt 3 \\over 2}' },
            { id: -2, value: - Math.sqrt(2) / 2, tex: '-{\\sqrt 2 \\over 2}' },
            { id: -1, value: - 1 / 2, tex: '-{1 \\over 2}' },
            { id: 0, value: 0, tex: '0' },
            { id: 1, value: 1 / 2, tex: '{1 \\over 2}' },
            { id: 2, value: Math.sqrt(2) / 2, tex: '{\\sqrt 2 \\over 2}' },
            { id: 3, value: Math.sqrt(3) / 2, tex: '{\\sqrt 3 \\over 2}' }
        ],
        allDomains : [
            { id: 1, value: null, tex: '\\mathbb{R}' },
            { id: 2, value: '[' + 0 + ',' + 2 * Math.PI + ')', tex: '[0, 2\\pi)' },
            { id: 3, value: '[' + (-Math.PI) + ',' + Math.PI + ')', tex: '[-\\pi, \\pi)' }
        ],
    };

    cleaningRadian = (rawNumber) => {
        if (rawNumber === 0) { return '0' }
        let angleInRadian
        let roundedNumber = parseInt(Math.round(rawNumber * 12 / Math.PI));
        let [rawNumerator, rawDenominator] = myMath.reduceFraction(roundedNumber, 12);
        let sign = rawNumber < 0 ? '-' : '';
        rawNumerator = Math.abs(rawNumerator);
        rawDenominator = Math.abs(rawDenominator);
        rawNumerator = rawNumerator === 1 ? '' : rawNumerator;
        rawNumerator += '\\pi';
        angleInRadian = sign + (rawDenominator === 1 ? rawNumerator : '{' + rawNumerator + '\\over ' + rawDenominator + '}');
        return angleInRadian;
    }

    findInterval(equalIncluded, isSin, isGreater, boundary, domain, mistakeIDs=[0]) {
        // Common mistakes to overcome (eg. sin > 1/2): (2 by 2 = 4 choices)
        // 1. Closed / Open: [pi/6 + 2npi, 5pi/6 + 2npi], n in Z
        // 2. Sin / Cos: (): (-pi/3 + 2npi, pi/3 + 2npi), n in Z
        // 3. Greater / Less: (5pi/6 + 2npi, 13pi/6 + 2npi), n in Z
        // 4. Periodic / not: (pi/6, 5pi/6)
        // 5. Left-Right swap: (5pi/6 + 2npi, pi/6 + 2npi), n in Z
        // 6. Forgot to add / subtract 2pi for one end: (pi/6 + 2npi, -11pi/6 + 2npi), n in Z

        if (mistakeIDs.includes(1)) { equalIncluded = !equalIncluded }
        if (mistakeIDs.includes(2)) { isSin = !isSin }
        if (mistakeIDs.includes(3)) { isGreater = !isGreater }
        if (mistakeIDs.includes(4)) {
            if (domain.id === 1) {
                domain = this.state.allDomains[myMath.randomInteger(1, 2)];
            } else {
                domain = this.state.allDomains[0];
            }
        }
        let finalAnswer = '\\theta \\in ';
        let arcsin = Math.asin(boundary.value);
        let arccos = Math.acos(boundary.value);
        let leftValue, rightValue;
        let [leftBracket, rightBracket] = equalIncluded ? ['[', ']'] : ['(', ')'];
        leftValue = isSin
            ? isGreater ? arcsin : - Math.PI - arcsin
            : isGreater ? -arccos : arccos;
        rightValue = isSin
            ? isGreater ? Math.PI - arcsin : arcsin
            : isGreater ? arccos : -arccos + 2 * Math.PI;

        if (domain.id === 1) {
            if (mistakeIDs.includes(6)) {
                rightValue > Math.PI
                    ? rightValue -= 2 * Math.PI
                    : leftValue += 2 * Math.PI;
            }
            if (mistakeIDs.includes(5)) {
                let temp = leftValue;
                leftValue = rightValue;
                rightValue = temp;
            }
            let leftValueTex = this.cleaningRadian(leftValue);
            let rightValueTex = this.cleaningRadian(rightValue);

            leftValueTex = leftValue === 0 ? '' : leftValueTex + '+';
            rightValueTex = rightValue === 0 ? '' : rightValueTex + '+';
            finalAnswer += leftBracket + leftValueTex + '2n\\pi,' + rightValueTex + '2n\\pi' + rightBracket;
            finalAnswer += '\\text{ for } n \\in \\mathbb{Z}';
        } else {
            let isFirstInterval = true;
            for (let i = -1; i <= 1; i++) {
                let currentInterval = leftBracket + (leftValue + i * Math.PI * 2) + ',' + (rightValue + i * Math.PI * 2) + rightBracket;
                currentInterval = myMath.intervalIntersection(currentInterval, domain.value);
                if (currentInterval) {
                    let currentIntervalStr;
                    if (currentInterval.left === currentInterval.right) {
                        currentIntervalStr = '\\{' + this.cleaningRadian(currentInterval.left) + '\\}';
                    } else {
                        let currentLeftBracket = currentInterval.leftOpen ? '(' : '[';
                        let currentRightBracket = currentInterval.rightOpen ? ')' : ']';
                        if (mistakeIDs.includes(6)) {
                            currentInterval.right > Math.PI
                                ? currentInterval.right -= 2 * Math.PI
                                : currentInterval.left += 2 * Math.PI;
                        }
                        let currentLeftTex = this.cleaningRadian(currentInterval.left);
                        let currentRightTex = this.cleaningRadian(currentInterval.right);
                        if (mistakeIDs.includes(5)) {
                            let temp = currentLeftTex;
                            currentLeftTex = currentRightTex;
                            currentRightTex = temp;
                        }
                        currentIntervalStr = currentLeftBracket + currentLeftTex + ',' + currentRightTex + currentRightBracket;
                    }
                    finalAnswer += isFirstInterval ? '' : '\\cup';
                    finalAnswer += currentIntervalStr;
                    isFirstInterval = false;
                }
            }
        }
        return finalAnswer;
    }

    generateQuestion = () => {
        const equalIncluded = Math.random() > 0.5 ? true : false; //
        const isSin = Math.random() > 0.5 ? true : false; // 
        const isGreater = Math.random() > 0.5 ? true : false; // 
        const boundary = myMath.randomFromArray(this.state.allBoundaries);
        const domain = myMath.randomFromArray(this.state.allDomains);


        let [mistakeID1, mistakeID2] = myMath.shuffleArray([1, 2, 3, 4, 5, 6]).slice(0, 2);
        let correctAnswer = this.findInterval(equalIncluded, isSin, isGreater, boundary, domain, [0]);
        let wrongAnswer1 = this.findInterval(equalIncluded, isSin, isGreater, boundary, domain, [mistakeID1]);
        let wrongAnswer2 = this.findInterval(equalIncluded, isSin, isGreater, boundary, domain, [mistakeID2]);
        let wrongAnswer3 = this.findInterval(equalIncluded, isSin, isGreater, boundary, domain, [mistakeID1, mistakeID2]);
        let allAnswers = myMath.shuffleArray([correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]);
        let correctChoiceID = allAnswers.indexOf(correctAnswer);
        let allChoices = allAnswers.map(e => ({ tex: e }));

        this.setState({
            allChoices: allChoices,
            correctChoiceID: correctChoiceID,
        })
        let question = '\\text{Solve }';
        question += isSin ? '\\sin' : '\\cos';
        question += '\\theta';
        question += equalIncluded ? isGreater ? '\\geq' : '\\leq' : isGreater ? '>' : '<';
        question += boundary.tex;
        question += '\\text{ on }';
        question += domain.tex;

        return (<MathComponent tex={question} />);
    }

    render = () => {
        return (
            <ImmediateMultipleChoice
                generateQuestion={this.generateQuestion}
                allChoices={this.state.allChoices}
                verticalAlignChoices={ true }
                correctChoiceID={this.state.correctChoiceID}
            />
        );
    }
}

export default SimpleTrigIequality;
