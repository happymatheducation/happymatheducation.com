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

    unitVector = (A, B) => {
        const xDiff = B.x - A.x;
        const yDiff = B.y - A.y;
        const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
        const unitX = xDiff / distance;
        const unitY = yDiff / distance;
        return { x: unitX, y: unitY };
    }

    //Drawing only;
    drawDiagram = () => {
        // Determine coordinates of A, B, C, H;
        let AB = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = AB / 2;
        let angleOfRotation = Math.random() * Math.PI * 2;
        let A = { x: - radius * Math.cos(angleOfRotation), y: - radius * Math.sin(angleOfRotation) };
        let B = { x: -A.x, y: -A.y };
        let AH = Math.random() * AB * 0.8 + AB * 0.1; // 0.1 < AH/AB < 0.9;
        let BH = AB - AH;
        let H = { x: (AH * B.x + BH * A.x) / AB, y: (AH * B.y + BH * A.y) / AB };
        let CH = Math.sqrt(AH * BH);
        let C = { x: - CH * Math.sin(angleOfRotation) + H.x, y: CH * Math.cos(angleOfRotation) + H.y };

        // Determine canvas size and diagram position
        let xMax = Math.max(A.x, B.x, C.x);
        let xMin = Math.min(A.x, B.x, C.x);
        let yMax = Math.max(A.y, B.y, C.y);
        let yMin = Math.min(A.y, B.y, C.y);
        let width = xMax - xMin;
        let height = yMax - yMin;
        let xCenter = (xMax + xMin) / 2;
        let yCenter = (yMax + yMin) / 2;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2 - xCenter;
        let yCorrection = canvasHeight / 2 - yCenter;
        A.x += xCorrection;
        B.x += xCorrection;
        C.x += xCorrection;
        H.x += xCorrection;
        A.y += yCorrection;
        B.y += yCorrection;
        C.y += yCorrection;
        H.y += yCorrection;

        // Determine points' labels' positions. 
        let textAlignA, textAlignB, textAlignC, textAlignH;
        let textBaselineA, textBaselineB, textBaselineC, textBaselineH;
        [textAlignA, textAlignB] = A.x >= B.x ? ['left', 'right'] : ['right', 'left'];
        [textBaselineA, textBaselineB] = A.y >= B.y ? ['top', 'bottom'] : ['bottom', 'top'];
        [textAlignC, textAlignH] = C.x >= H.x ? ['left', 'right'] : ['right', 'left'];
        [textBaselineC, textBaselineH] = C.y >= H.y ? ['top', 'bottom'] : ['bottom', 'top'];

        // To draw the little square for 'perpendicular';
        let unitCA = this.unitVector(C, A);
        let unitCB = this.unitVector(C, B);
        let unitHA = Math.abs(H.x - A.x) < Math.abs(H.x - B.x) ? this.unitVector(H, B) : this.unitVector(H, A);
        let unitHC = this.unitVector(H, C);

        let squarescale = 10;
        unitCA.x *= squarescale;
        unitCA.y *= squarescale;
        unitCB.x *= squarescale;
        unitCB.y *= squarescale;
        unitHA.x *= squarescale;
        unitHA.y *= squarescale;
        unitHC.x *= squarescale;
        unitHC.y *= squarescale;

        // Draw;
        const draw = (ctx) => {
            // Draw the triangle ABC and height CH
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.moveTo(A.x, A.y);
            ctx.lineTo(B.x, B.y);
            ctx.lineTo(C.x, C.y);
            ctx.lineTo(A.x, A.y);
            ctx.moveTo(H.x, H.y);
            ctx.lineTo(C.x, C.y);
            ctx.stroke();

            // Draw the 'perpendicular' squares
            ctx.lineWidth = 1;
            ctx.lineTo(C.x + unitCA.x, C.y + unitCA.y);
            ctx.lineTo(C.x + unitCA.x + unitCB.x, C.y + unitCA.y + unitCB.y);
            ctx.lineTo(C.x + unitCB.x, C.y + unitCB.y);
            ctx.lineTo(C.x, C.y);
            ctx.moveTo(H.x, H.y);
            ctx.lineTo(H.x + unitHC.x, H.y + unitHC.y);
            ctx.lineTo(H.x + unitHC.x + unitHA.x, H.y + unitHC.y + unitHA.y);
            ctx.lineTo(H.x + unitHA.x, H.y + unitHA.y);
            ctx.moveTo(H.x, H.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignA;
            ctx.textBaseline = textBaselineA;
            ctx.fillText("A", A.x, A.y);

            ctx.textAlign = textAlignB;
            ctx.textBaseline = textBaselineB;
            ctx.fillText("B", B.x, B.y);

            ctx.textAlign = textAlignC;
            ctx.textBaseline = textBaselineC;
            ctx.fillText("C", C.x, C.y);

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
        let AH = { name: 'AH', value: 0 };
        let BH = { name: 'BH', value: 0 };
        let CH = { name: 'CH', value: 0 };
        let AB = { name: 'AB', value: 0 };
        let AC = { name: 'AC', value: 0 };
        let BC = { name: 'BC', value: 0 };
        let segments = [AH, BH, CH, AB, AC, BC];
        let allAH = [1, 4, 1, 9, 9, 16, 1, 1, 2, 1, 3, 2, 3, 3, 4];
        let allCH = [2, 2, 3, 3, 12, 12, 1, Math.sqrt(2), Math.sqrt(2), Math.sqrt(3), Math.sqrt(3), Math.sqrt(6), Math.sqrt(6), Math.sqrt(12), Math.sqrt(12)];
        let selector = Math.floor(Math.random() * allAH.length);
        AH.value = allAH[selector];
        CH.value = allCH[selector];
        BH.value = CH.value ** 2 / AH.value;
        AB.value = AH.value + BH.value;
        AC.value = Math.sqrt(AH.value * AB.value);
        BC.value = Math.sqrt(BH.value * AB.value);

        segments.sort(() => Math.random() - 0.5);
        let condition = ['', ''];
        let selectedConditionsRaw = segments[0].name + segments[1].name;
        if (selectedConditionsRaw === 'ABCH' || selectedConditionsRaw === 'CHAB') {
            segments[1] = segments[5];
            selectedConditionsRaw = segments[0].name + segments[1].name;
        }

        if (selectedConditionsRaw === 'ACBH'
            || selectedConditionsRaw === 'BHAC'
            || selectedConditionsRaw === 'AHBC'
            || selectedConditionsRaw === 'BCAH') {
            this.setState({ difficulty:' (Hard)' })
        }
        
        condition[0] = segments[0].name + '=' + this.valueToString(segments[0].value);
        condition[1] = segments[1].name + '=' + this.valueToString(segments[1].value);
        let toSquareQuestion = !this.isInteger(segments[2].value);
        let question = segments[2].name + (toSquareQuestion ? '^2' : '');
        let answer = toSquareQuestion ? Math.round(segments[2].value ** 2) : Math.round(segments[2].value);
        this.setState({ correctAnswer: answer });
        this.setState({ question: question });

        return (<><p style={{ textAlign: 'left' }}>
            As shown, in
            <MathComponent display={false} tex={String.raw`~\triangle ABC,~`} />
            <MathComponent display={false} tex={String.raw`CH \perp AB,~`} /> and
            <MathComponent display={false} tex={String.raw`~\angle ACB = 90^\circ.~`} />
            If
            <MathComponent display={false} tex={'~' + condition[0] + '~'} /> and
            <MathComponent display={false} tex={'~' + condition[1] + '~'} />
            (Diagram not to scale)
        </p>{this.drawDiagram()}</>);
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: '',
            difficulty:''
        });
        this.answerForm.current.focus();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
                onChange={e => this.setState({ userAnswer: e.target.value })}></input>{this.state.difficulty}<br />
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
