import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import Canvas from "../../components/Canvas";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class SOH_CAH_TOA extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        question: '',

        userAnswerRawString: '',
        userAnswerIsFraction: '',
        userNumerator: '',
        userDenominator: '',
        userAnswer: '',

        correctAnswerIsFraction: '',
        correctNumerator: '',
        correctDenominator: '',
        correctAnswer: '',
    };

    unitVector = (U, V) => {
        const xDiff = V.x - U.x;
        const yDiff = V.y - U.y;
        const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
        const unitX = xDiff / distance;
        const unitY = yDiff / distance;
        return { x: unitX, y: unitY };
    }

    //Drawing only;
    drawDiagram = (allPointLabels) => {
        let [pointU, pointV, pointW] = allPointLabels;
        // Determine coordinates of U, V, W; M the midpoint of the hypotenuse
        let UV = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = UV / 2;
        let angleOfRotation = Math.random() * Math.PI * 2;
        let U = { x: - radius * Math.cos(angleOfRotation), y: - radius * Math.sin(angleOfRotation) };
        let V = { x: -U.x, y: -U.y };
        let M = { x: 0.5 * (V.x + U.x), y: 0.5 * (V.y + U.y) };
        const minAngleV = Math.PI / 12;
        let angleV = Math.random() * (5 * minAngleV - minAngleV) + minAngleV;
        let W = { x: - radius * Math.cos(angleOfRotation + 2 * angleV), y: - radius * Math.sin(angleOfRotation + 2 * angleV) };

        // Determine canvas size and diagram position
        let xMax = Math.max(U.x, V.x, W.x);
        let xMin = Math.min(U.x, V.x, W.x);
        let yMax = Math.max(U.y, V.y, W.y);
        let yMin = Math.min(U.y, V.y, W.y);
        let width = xMax - xMin;
        let height = yMax - yMin;
        let xCenter = (xMax + xMin) / 2;
        let yCenter = (yMax + yMin) / 2;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2 - xCenter;
        let yCorrection = canvasHeight / 2 - yCenter;
        U.x += xCorrection;
        V.x += xCorrection;
        W.x += xCorrection;
        M.x += xCorrection;
        U.y += yCorrection;
        V.y += yCorrection;
        W.y += yCorrection;
        M.y += yCorrection;

        // Determine points' labels' positions. 
        let textAlignU, textAlignV, textAlignW;
        let textBaselineU, textBaselineV, textBaselineW;
        [textAlignU, textAlignV] = U.x >= V.x ? ['left', 'right'] : ['right', 'left'];
        [textBaselineU, textBaselineV] = U.y >= V.y ? ['top', 'bottom'] : ['bottom', 'top'];
        textAlignW = W.x >= M.x ? 'left' : 'right';
        textBaselineW = W.y >= M.y ? 'top' : 'bottom';

        // To draw the little square for 'perpendicular';
        let unitWU = this.unitVector(W, U);
        let unitWV = this.unitVector(W, V);

        let squarescale = 10;
        unitWU.x *= squarescale;
        unitWU.y *= squarescale;
        unitWV.x *= squarescale;
        unitWV.y *= squarescale;

        // Draw;
        const draw = (ctx) => {
            // Draw the triangle UVW and height WH
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.moveTo(U.x, U.y);
            ctx.lineTo(V.x, V.y);
            ctx.lineTo(W.x, W.y);
            ctx.lineTo(U.x, U.y);
            ctx.stroke();

            // Draw the 'perpendicular' squares
            ctx.lineWidth = 1;
            ctx.lineTo(W.x + unitWU.x, W.y + unitWU.y);
            ctx.lineTo(W.x + unitWU.x + unitWV.x, W.y + unitWU.y + unitWV.y);
            ctx.lineTo(W.x + unitWV.x, W.y + unitWV.y);
            ctx.lineTo(W.x, W.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignU;
            ctx.textBaseline = textBaselineU;
            ctx.fillText(pointU, U.x, U.y);

            ctx.textAlign = textAlignV;
            ctx.textBaseline = textBaselineV;
            ctx.fillText(pointV, V.x, V.y);

            ctx.textAlign = textAlignW;
            ctx.textBaseline = textBaselineW;
            ctx.fillText(pointW, W.x, W.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }

    isInteger = (num) => {
        let rounded = Math.round(num);
        let error = Math.abs(rounded - num);
        return error < 0.00001 ? true : false;
    }

    valueToString = (value) => {
        if (this.isInteger(value)) {
            return Math.round(value);
        } else if (this.isInteger(value ** 2)) {
            return String.raw`\sqrt {${Math.round(value ** 2)}}`;
        }
    }

    generateQuestion = () => {
        let allPointLabels = ['A', 'B', 'C'];
        allPointLabels.sort(() => Math.random() - 0.5);
        let [pointU, pointV, pointW] = allPointLabels;
        // UV is the hypotenuse
        let VW = { name: pointV + pointW, value: 0 };
        let UW = { name: pointU + pointW, value: 0 };
        let UV = { name: pointU + pointV, value: 0 };

        [VW.value, UW.value] = myMath.randomFromArray([
            [3, 4], [6, 8], [9, 12], [12, 16], [15, 20], [18, 24], [21, 28], [24, 32], [27, 36], [30, 40],
            [5, 12], [10, 24],
            [7, 24], [8, 15]
        ]);
        [VW.value, UW.value] = Math.random() > 0.5 ? [VW.value, UW.value] : [UW.value, VW.value];
        UV.value = Math.round(Math.sqrt(VW.value ** 2 + UW.value ** 2));

        let infoIDs = myMath.randomFromArray([[4, 0, 1], [4, 0, 2], [4, 1, 2]]);
        infoIDs.sort(() => Math.random() - 0.5);
        // infoIDs:
        // 4: angle
        // 0: VW
        // 1: UW
        // 2: UV
        let segments = [VW, UW, UV];

        let conditions = ['', ''];
        let currentSegment;
        let trigSelector = myMath.randomInteger(1, 3); // 1:sin, 2:cos, 3:tan
        let num, den;

        for (let i = 0; i < 2; i++) {
            if (infoIDs[i] !== 4) {
                currentSegment = segments[infoIDs[i]]
                conditions[i] = currentSegment.name + '=' + currentSegment.value;
            } else {
                switch (trigSelector) {
                    case 1: // sinU = VW / UV
                        [num, den] = myMath.reduceFraction(VW.value, UV.value);
                        conditions[i] = '\\sin{}';
                        break;
                    case 2: // cosU = UW / UV
                        [num, den] = myMath.reduceFraction(UW.value, UV.value);
                        conditions[i] = '\\cos{}';
                        break;
                    case 3: // tanU = VW / UW
                        [num, den] = myMath.reduceFraction(VW.value, UW.value);
                        conditions[i] = '\\tan{}';
                        break;
                    default:
                        console.log(trigSelector);
                }
                conditions[i] += pointU + '= {' + num + '\\over' + den + '}'
            }
        }

        let question;
        let correctAnswer;

        if (infoIDs[2] !== 4) {
            currentSegment = segments[infoIDs[2]]
            question = currentSegment.name;
            correctAnswer = currentSegment.value;
            this.setState({ correctAnswerIsFraction: false });
        } else {
            switch (trigSelector) {
                case 1: // sinU = VW / UV
                    question = '\\sin{}' + pointU;
                    [num, den] = myMath.reduceFraction(VW.value, UV.value);
                    correctAnswer = VW.value / UV.value;
                    break;
                case 2: // cosU = UW / UV
                    question = '\\cos{}' + pointU;
                    [num, den] = myMath.reduceFraction(UW.value, UV.value);
                    correctAnswer = UW.value / UV.value;
                    break;
                case 3: // tanU = VW / UW
                    question = '\\tan{}' + pointU;
                    [num, den] = myMath.reduceFraction(VW.value, UW.value);
                    correctAnswer = VW.value / UW.value;
                    break;
                default:
                    console.log(trigSelector);
            }
            this.setState({
                correctAnswerIsFraction: true,
                correctNumerator: num,
                correctDenominator: den
            })
        }

        this.setState({ question: question });
        this.setState({ correctAnswer: correctAnswer });

        return (<><p>
            <MathComponent display={false} tex={'~' + conditions[0] + ',~'} />
            <MathComponent display={false} tex={'~' + conditions[1] + '.~~'} />
            (Diagram not to scale)
        </p>{this.drawDiagram(allPointLabels)}</>);
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswerRawString: '',
            userDenominator: '',
            userNumerator: '',
            userAnswer: '',
            userAnswerIsFraction: null,
        });
        if (window.innerWidth <= 800) { }
        else { this.answerForm.current.focus(); }
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Whrome, Firefox, IE and Opera
    }

    handleUserAnswer = (rawString) => {
        this.setState({ userAnswerRawString: rawString });
        if (rawString.includes("/")) {
            let fractionPosition = rawString.indexOf("/");
            let numerator = rawString.substring(0, fractionPosition);
            let denominator = rawString.substring(fractionPosition + 1);
            this.setState({
                userAnswerIsFraction: true,
                userNumerator: numerator,
                userDenominator: denominator,
                userAnswer: '',
            });
        } else {
            this.setState({
                userAnswerIsFraction: false,
                userAnswer: rawString,
                userNumerator: '',
                userDenominator: '',
            })
        }
    }

    checkAnswer = () => {
        let correctAnswer;
        if (!this.state.userAnswerIsFraction) {
            if (parseFloat(this.state.userAnswer) === parseFloat(this.state.correctAnswer)) {
                return true;
            }
        } else {
            let userNumerator = parseInt(this.state.userNumerator);
            let userDenominator = parseInt(this.state.userDenominator);
            if (userNumerator * userDenominator < 0) {
                userNumerator = Math.abs(userNumerator);
                userDenominator = Math.abs(userDenominator);
            }
            if (this.state.correctAnswerIsFraction
                && userNumerator === this.state.correctNumerator
                && userDenominator === this.state.correctDenominator) {
                return true;
            }
        }
        if (!this.state.correctAnswerIsFraction) {
            correctAnswer = this.state.correctAnswer;
        } else {
            correctAnswer = <MathComponent display={false}
                tex={String.raw`{${this.state.correctNumerator} \over ${this.state.correctDenominator}}`} />;
        }
        return (<>Incorrect! The correct answer is {correctAnswer}</>);
    }

    render() {

        let answerForm = (<>
            <MathComponent display={false} tex={'~' + this.state.question + '=~'} />
            <input type="text" value={this.state.userAnswerRawString} ref={this.answerForm} autoFocus
                onChange={e => this.handleUserAnswer(e.target.value)}></input><br />
        </>);
        return (
            <FillBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={answerForm}
            />
        );
    }
}

export default SOH_CAH_TOA;
