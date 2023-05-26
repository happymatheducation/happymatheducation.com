import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import Canvas from "../../components/Canvas";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class LawOfCos extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        beforeBlank: '',

        userAnswer: '',
        userAnswerRawString: '',
        userAnswerIsFraction: null,
        userNumerator: '',
        userDenominator: '',

        correctAnswerIsFraction: false,
        correctNumerator: '',
        correctDenominator: '',
        correctAnswer: '',
        correctAnswerSign: '',
    };

    //Drawing only;
    drawTriangle = (vertices) => {

        // Determine canvas size and diagram position
        let xMax = vertices.reduce((accumulator, currentValue) => { return { x: Math.max(accumulator.x, currentValue.x) } }).x;
        let xMin = vertices.reduce((accumulator, currentValue) => { return { x: Math.min(accumulator.x, currentValue.x) } }).x;
        let yMax = vertices.reduce((accumulator, currentValue) => { return { y: Math.max(accumulator.y, currentValue.y) } }).y;
        let yMin = vertices.reduce((accumulator, currentValue) => { return { y: Math.min(accumulator.y, currentValue.y) } }).y;

        // Determine points' labels' positions.
        let textAlignABC = [];
        let textBaselineABC = [];
        for (let i = 0; i < vertices.length; i++) {
            if (vertices[i].x === xMin) { textAlignABC[i] = 'right' }
            else if (vertices[i].x === xMax) { textAlignABC[i] = 'left' }
            if (vertices[i].y === yMin) { textBaselineABC[i] = 'bottom' }
            else if (vertices[i].y === yMax) { textBaselineABC[i] = 'top' }
            for (let j = i + 1; j < vertices.length; j++) {
                if (vertices[j].x === vertices[i].x) {
                    [textBaselineABC[j], textBaselineABC[i]] = vertices[j].y < vertices[i].y ? ['bottom', 'top'] : ['top', 'bottom'];
                } else if (vertices[j].y === vertices[i].y) {
                    [textAlignABC[j], textAlignABC[i]] = vertices[j].x < vertices[i].x ? ['right', 'left'] : ['left', 'right'];
                }
            }
        }

        let width = xMax - xMin;
        let height = yMax - yMin;
        let xCenter = (xMax + xMin) / 2;
        let yCenter = (yMax + yMin) / 2;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2 - xCenter;
        let yCorrection = canvasHeight / 2 - yCenter;
        for (let point of vertices) {
            point.x += xCorrection;
            point.y += yCorrection;
        }

        // Draw;
        const draw = (ctx) => {
            // Draw the triangle ABC
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.moveTo(vertices[0].x, vertices[0].y);
            ctx.lineTo(vertices[1].x, vertices[1].y);
            ctx.lineTo(vertices[2].x, vertices[2].y);
            ctx.lineTo(vertices[0].x, vertices[0].y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            for (let i = 0; i < vertices.length; i++) {
                ctx.textAlign = textAlignABC[i];
                ctx.textBaseline = textBaselineABC[i];
                ctx.fillText(vertices[i].name, vertices[i].x, vertices[i].y);
            }
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }

    generateQuestion = () => {

        //// Words preparation
        // Getting values ready.
        let allSides = [];
        let maxSideLength = 6;
        let minSideLength = 2;
        let maxPerimeter = maxSideLength*3;
        for (let side1 = minSideLength; side1 <= maxSideLength; side1++) {
            for (let side2 = minSideLength; side2 <= maxSideLength; side2++) {
                for (let side3 = Math.max(side1, side2); side3 < side1 + side2; side3++) {
                    if (side1 + side2 + side3 <= maxPerimeter) { allSides.push([side1, side2, side3]) }
                }
            }
        }
        let sides = myMath.randomFromArray(allSides);
        let anglesCos = [];
        for (let i = 0; i < 3; i++) {
            anglesCos.push(myMath.lawCosC(sides));
            sides.push(sides.shift());
        }

        // Context
        let [i, j, k] = myMath.shuffleArray([0, 1, 2]); // randomized the order of given sides
        let vertexNames = myMath.shuffleArray(['A', 'B', 'C']); // randomize the names, otherwise a<b<c
        let givens = '';
        let asking, correctAnswer;
        if (Math.random() < 0.5) {
            // SSS => A
            givens = vertexNames[j] + vertexNames[k] + ' = ' + sides[i] + ',~'
                + vertexNames[i] + vertexNames[k] + ' = ' + sides[j] + ',~'
                + vertexNames[i] + vertexNames[j] + ' = ' + sides[k] + '.~';
            let tt = myMath.randomFromArray([0, 1, 2]); // randomly selected one angle to ask.
            asking = '\\cos ' + vertexNames[tt];
            correctAnswer = anglesCos[tt][0] / anglesCos[tt][1];
            this.setState({
                correctAnswerIsFraction: anglesCos[tt][0] === 0 ? false : true,
                correctAnswerSign: correctAnswer < 0 ? '-' : '',
                correctNumerator: Math.abs(anglesCos[tt][0]),
                correctDenominator: Math.abs(anglesCos[tt][1]),
            })
        } else {
            // SAS => S
            givens = vertexNames[j] + vertexNames[k] + ' = ' + sides[i] + ',~'
                + vertexNames[i] + vertexNames[k] + ' = ' + sides[j] + ',~'
            givens += '\\cos ' + vertexNames[k] + '= ' + myMath.fractionToTex(anglesCos[k]) + '.~';
            asking = vertexNames[i] + vertexNames[j];
            correctAnswer = sides[k];
        }

        this.setState({
            beforeBlank: asking,
            correctAnswer: correctAnswer,
        })

        //// Drawing preparation. 

        let diagramSize = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3);
        // Determine coordinates of the three vertices of ABC;
        let cosLftBttm = anglesCos[1][0] / anglesCos[1][1];
        let x3 = sides[0] / sides[2] * cosLftBttm;
        let y3 = 1 - sides[0] / sides[2] * Math.sqrt(1 - cosLftBttm * cosLftBttm);
        let vertices = [{ x: 1, y: 1 }, { x: 0, y: 1 }, { x: x3, y: y3 }];
        
        for (let point of vertices) {
            point.x *= diagramSize;
            point.y *= diagramSize;
        }

        for (let i = 0; i < vertices.length; i++) {
            vertices[i].name = vertexNames[i];
        }

        return (<><p>
            <MathComponent display={false} tex={givens} />
        </p>{this.drawTriangle(vertices)}</>);
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswerRawString: '',
            userDenominator: '',
            userNumerator: '',
            userAnswer: '',
            userAnswerIsFraction: null,

            correctAnswerIsFraction: false,
            correctNumerator: '',
            correctDenominator: '',
            correctAnswer: '',
            correctAnswerSign: '',

            beforeBlank: '',
        });
        if (window.innerWidth <= 800) { }
        else { this.answerForm.current.focus(); }
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
            let userSign = '';
            if (userNumerator * userDenominator < 0) {
                userSign = '-';
                userNumerator = Math.abs(userNumerator);
                userDenominator = Math.abs(userDenominator);
            }
            if (this.state.correctAnswerIsFraction
                && userNumerator === this.state.correctNumerator
                && userDenominator === this.state.correctDenominator
                && userSign === this.state.correctAnswerSign) {
                return true;
            }
        }
        if (!this.state.correctAnswerIsFraction) {
            correctAnswer = this.state.correctAnswer;
        } else {
            correctAnswer = String.raw`${this.state.correctAnswerSign}{${this.state.correctNumerator} \over ${this.state.correctDenominator}}`;
        }
        return (< MathComponent display={false} tex={'\\text{Incorrect! }' + this.state.beforeBlank + '=' + correctAnswer} />);
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

    render() {

        let answerForm = (<>
            <MathComponent display={false} tex={'~' + this.state.beforeBlank + '=~'} />
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

export default LawOfCos;
