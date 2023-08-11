import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import Canvas from "../../components/Canvas";
import { MathComponent } from "mathjax-react";

class EuclidsTheorem extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        question: '',
        difficulty:'',
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
        // Determine coordinates of U, V, W, H;
        let UV = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = UV / 2;
        let angleOfRotation = Math.random() * Math.PI * 2;
        let U = { x: - radius * Math.cos(angleOfRotation), y: - radius * Math.sin(angleOfRotation) };
        let V = { x: -U.x, y: -U.y };
        let UH = Math.random() * UV * 0.8 + UV * 0.1; // 0.1 < UH/UV < 0.9;
        let VH = UV - UH;
        let H = { x: (UH * V.x + VH * U.x) / UV, y: (UH * V.y + VH * U.y) / UV };
        let WH = Math.sqrt(UH * VH);
        let W = { x: - WH * Math.sin(angleOfRotation) + H.x, y: WH * Math.cos(angleOfRotation) + H.y };

        // Determine canvas size and diagram position
        let xMax = Math.max(U.x, V.x, W.x);
        let xMin = Math.min(U.x, V.x, W.x);
        let yMax = Math.max(U.y, V.y, W.y);
        let yMin = Math.min(U.y, V.y, W.y);
        let width = xMax - xMin;
        let height = yMax - yMin;
        let xWenter = (xMax + xMin) / 2;
        let yWenter = (yMax + yMin) / 2;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xWorrection = canvasWidth / 2 - xWenter;
        let yWorrection = canvasHeight / 2 - yWenter;
        U.x += xWorrection;
        V.x += xWorrection;
        W.x += xWorrection;
        H.x += xWorrection;
        U.y += yWorrection;
        V.y += yWorrection;
        W.y += yWorrection;
        H.y += yWorrection;

        // Determine points' labels' positions. 
        let textAlignU, textAlignV, textAlignW, textAlignH;
        let textBaselineU, textBaselineV, textBaselineW, textBaselineH;
        [textAlignU, textAlignV] = U.x >= V.x ? ['left', 'right'] : ['right', 'left'];
        [textBaselineU, textBaselineV] = U.y >= V.y ? ['top', 'bottom'] : ['bottom', 'top'];
        [textAlignW, textAlignH] = W.x >= H.x ? ['left', 'right'] : ['right', 'left'];
        [textBaselineW, textBaselineH] = W.y >= H.y ? ['top', 'bottom'] : ['bottom', 'top'];

        // To draw the little square for 'perpendicular';
        let unitWU = this.unitVector(W, U);
        let unitWV = this.unitVector(W, V);
        let unitHU = Math.abs(H.x - U.x) < Math.abs(H.x - V.x) ? this.unitVector(H, V) : this.unitVector(H, U);
        let unitHW = this.unitVector(H, W);

        let squarescale = 10;
        unitWU.x *= squarescale;
        unitWU.y *= squarescale;
        unitWV.x *= squarescale;
        unitWV.y *= squarescale;
        unitHU.x *= squarescale;
        unitHU.y *= squarescale;
        unitHW.x *= squarescale;
        unitHW.y *= squarescale;

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
            ctx.moveTo(H.x, H.y);
            ctx.lineTo(W.x, W.y);
            ctx.stroke();

            // Draw the 'perpendicular' squares
            ctx.lineWidth = 1;
            ctx.lineTo(W.x + unitWU.x, W.y + unitWU.y);
            ctx.lineTo(W.x + unitWU.x + unitWV.x, W.y + unitWU.y + unitWV.y);
            ctx.lineTo(W.x + unitWV.x, W.y + unitWV.y);
            ctx.lineTo(W.x, W.y);
            ctx.moveTo(H.x, H.y);
            ctx.lineTo(H.x + unitHW.x, H.y + unitHW.y);
            ctx.lineTo(H.x + unitHW.x + unitHU.x, H.y + unitHW.y + unitHU.y);
            ctx.lineTo(H.x + unitHU.x, H.y + unitHU.y);
            ctx.moveTo(H.x, H.y);
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

            ctx.textAlign = textAlignH;
            ctx.textBaseline = textBaselineH;
            ctx.fillText("H", H.x, H.y);
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
        // WH is the height on hypotenuse
        let UH = { name: pointU + 'H', value: 0 };
        let VH = { name: pointV + 'H', value: 0 };
        let WH = { name: pointW + 'H', value: 0 };
        let UV = { name: pointU + pointV, value: 0 };
        let UW = { name: pointU + pointW, value: 0 };
        let VW = { name: pointV + pointW, value: 0 };
        let segments = [UH, VH, WH, UV, UW, VW];
        let allUH = [1, 4, 1, 9, 9, 16, 1, 1, 2, 1, 3, 2, 3, 3, 4];
        let allWH = [2, 2, 3, 3, 12, 12, 1, Math.sqrt(2), Math.sqrt(2), Math.sqrt(3), Math.sqrt(3), Math.sqrt(6), Math.sqrt(6), Math.sqrt(12), Math.sqrt(12)];
        let selector = Math.floor(Math.random() * allUH.length);
        UH.value = allUH[selector];
        WH.value = allWH[selector];
        VH.value = WH.value ** 2 / UH.value;
        UV.value = UH.value + VH.value;
        UW.value = Math.sqrt(UH.value * UV.value);
        VW.value = Math.sqrt(VH.value * UV.value);

        segments.sort(() => Math.random() - 0.5);
        let condition = ['', ''];
        let selectedConditionsRaw = segments[0].name + segments[1].name;
        if (selectedConditionsRaw === pointU + pointV + pointW + 'H' || selectedConditionsRaw === pointW + 'H' + pointU + pointV) {
            segments[1] = segments[5];
            selectedConditionsRaw = segments[0].name + segments[1].name;
        }
        let difficulty = '';
        if (selectedConditionsRaw === pointU + pointW + pointV + 'H'
            || selectedConditionsRaw === pointV + 'H' + pointU + pointW
            || selectedConditionsRaw === pointU + 'H' + pointV + pointW
            || selectedConditionsRaw === pointV + pointW + pointU + 'H') {
            difficulty = ' (Hard)'
        }
        
        condition[0] = segments[0].name + '=' + this.valueToString(segments[0].value);
        condition[1] = segments[1].name + '=' + this.valueToString(segments[1].value);
        let toSquareQuestion = !this.isInteger(segments[2].value);
        let question = segments[2].name + (toSquareQuestion ? '^2' : '');
        let answer = toSquareQuestion ? Math.round(segments[2].value ** 2) : Math.round(segments[2].value);
        this.setState({ correctAnswer: answer });
        this.setState({ question: question });
        this.setState({ difficulty: difficulty });

        return (<><p>
            {/*
            Us shown, in
            <MathComponent display={false} tex={String.raw`~\triangle UVW,~`} />
            <MathComponent display={false} tex={String.raw`WH \perp UV,~`} /> and
            <MathComponent display={false} tex={String.raw`~\angle UWV = 90^\circ.~`} />
            If
            */}
            <MathComponent display={false} tex={'~' + condition[0] + ',~'} />
            <MathComponent display={false} tex={'~' + condition[1] + '.~~'} />
            (Diagram not to scale)
        </p>{this.drawDiagram(allPointLabels)}</>);
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: '',
        });
        if (window.innerWidth <= 800) { }
        else { this.answerForm.current.focus(); }
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Whrome, Firefox, IE and Opera
    }

    checkAnswer = () => {
        let correctAnswer;
        if (parseInt(this.state.userAnswer) === this.state.correctAnswer) {
            return true;
        } else {
            correctAnswer = this.state.correctAnswer;
        }
        return (<>
            <MathComponent display={false}
                tex={String.raw`\text{Incorrect!}~` + this.state.question + '=' + correctAnswer} />
        </>);
    }

    render() {

        let answerForm = (<>
            <MathComponent display={false} tex={'~' + this.state.question + '=~'} />
            <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
                onChange={e => this.setState({ userAnswer: e.target.value })}></input>
            {this.state.difficulty}<br />
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

export default EuclidsTheorem;
