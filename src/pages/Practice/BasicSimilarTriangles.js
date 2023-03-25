import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import Canvas from "../../components/Canvas";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class BasicSimilarTriangles extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        beforeBlank: '',
        hintTex: '',
    };

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

    //Drawing only;
    drawTriangle = (vertices, M, N) => {

        // M on the side between P1 and P2
        // N on the side between P1 and P3
        let P1 = vertices[0];
        let P2 = vertices[1];
        let P3 = vertices[2];

        // Determine canvas size and diagram position
        let xMax = Math.max(P1.x, P2.x, P3.x);
        let xMin = Math.min(P1.x, P2.x, P3.x);
        let yMax = Math.max(P1.y, P2.y, P3.y);
        let yMin = Math.min(P1.y, P2.y, P3.y);
        let width = xMax - xMin;
        let height = yMax - yMin;
        let xCenter = (xMax + xMin) / 2;
        let yCenter = (yMax + yMin) / 2;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2 - xCenter;
        let yCorrection = canvasHeight / 2 - yCenter;
        P1.x += xCorrection;
        P2.x += xCorrection;
        P3.x += xCorrection;
        M.x += xCorrection;
        N.x += xCorrection;
        P1.y += yCorrection;
        P2.y += yCorrection;
        P3.y += yCorrection;
        M.y += yCorrection;
        N.y += yCorrection;

        // Determine points' labels' positions.

        let textAlignP1, textAlignP2, textAlignP3;
        textAlignP1 = P1.x < canvasWidth / 2 ? 'right' : 'left';
        textAlignP2 = P2.x < canvasWidth / 2 ? 'right' : 'left';
        textAlignP3 = P3.x < canvasWidth / 2 ? 'right' : 'left';

        let textBaselineP1, textBaselineP2, textBaselineP3;
        textBaselineP1 = P1.y < canvasHeight / 2 ? 'bottom' : 'top';
        textBaselineP2 = P2.y < canvasHeight / 2 ? 'bottom' : 'top';
        textBaselineP3 = P3.y < canvasHeight / 2 ? 'bottom' : 'top';

        // Positioning 'M'
        let [textAlignM, textBaselineM] = ['left', 'top'];
        if (P1.x === P2.x) {
            textAlignM = P3.x > P1.x ? 'right' : 'left';
        } else if (P1.y === P2.y) {
            textBaselineM = P3.y > P1.y ? 'bottom' : 'top';
        } else {
            let slope = myMath.slope(P1, P2);
            let yIntercept = myMath.yIntercept(P1, P2);
            if (slope > 0) {
                [textAlignM, textBaselineM] = P3.y > slope * P3.x + yIntercept ? ['left', 'bottom'] : ['right', 'top'];
            } else {
                [textAlignM, textBaselineM] = P3.y > slope * P3.x + yIntercept ? ['right', 'bottom'] : ['left', 'top'];
            }
        }

        // Positioning 'N'
        let [textAlignN, textBaselineN] = ['left', 'top'];
        if (P1.x === P3.x) {
            textAlignN = P2.x > P1.x ? 'right' : 'left';
        } else if (P1.y === P3.y) {
            textBaselineN = P2.y > P1.y ? 'bottom' : 'top';
        } else {
            let slope = myMath.slope(P1, P3);
            let yIntercept = myMath.yIntercept(P1, P3);
            if (slope > 0) {
                [textAlignN, textBaselineN] = P2.y > slope * P2.x + yIntercept ? ['left', 'bottom'] : ['right', 'top'];
            } else {
                [textAlignN, textBaselineN] = P2.y > slope * P2.x + yIntercept ? ['right', 'bottom'] : ['left', 'top'];
            }
        }

        // Draw;
        const draw = (ctx) => {
            // Draw the triangle ABC and MN
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.moveTo(P1.x, P1.y);
            ctx.lineTo(P2.x, P2.y);
            ctx.lineTo(P3.x, P3.y);
            ctx.lineTo(P1.x, P1.y);
            ctx.moveTo(M.x, M.y);
            ctx.lineTo(N.x, N.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignP1;
            ctx.textBaseline = textBaselineP1;
            ctx.fillText(vertices[0].name, P1.x, P1.y);

            ctx.textAlign = textAlignP2;
            ctx.textBaseline = textBaselineP2;
            ctx.fillText(vertices[1].name, P2.x, P2.y);

            ctx.textAlign = textAlignP3;
            ctx.textBaseline = textBaselineP3;
            ctx.fillText(vertices[2].name, P3.x, P3.y);

            ctx.textAlign = textAlignM;
            ctx.textBaseline = textBaselineM;
            ctx.fillText("M", M.x, M.y);

            ctx.textAlign = textAlignN;
            ctx.textBaseline = textBaselineN;
            ctx.fillText("N", N.x, N.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }

    drawTrapezoid = (vertices, P) => {

        // Determine canvas size and diagram position
        let xMax = vertices.reduce((accumulator, currentValue) => {return { x: Math.max(accumulator.x, currentValue.x) }}).x;
        let xMin = vertices.reduce((accumulator, currentValue) => {return { x: Math.min(accumulator.x, currentValue.x) }}).x;
        let yMax = vertices.reduce((accumulator, currentValue) => {return { y: Math.max(accumulator.y, currentValue.y) }}).y;
        let yMin = vertices.reduce((accumulator, currentValue) => {return { y: Math.min(accumulator.y, currentValue.y) }}).y;
        let width = xMax - xMin;
        let height = yMax - yMin;
        let xCenter = (xMax + xMin) / 2;
        let yCenter = (yMax + yMin) / 2;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2 - xCenter;
        let yCorrection = canvasHeight / 2 - yCenter;

        for (let vertex of vertices) {
            vertex.x += xCorrection;
            vertex.y += yCorrection;
        }
        P.x += xCorrection;
        P.y += yCorrection;

        // Draw;
        const draw = (ctx) => {
            // Draw the trapezoid ABCD, AC, and BD.
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.moveTo(vertices[0].x, vertices[0].y);
            ctx.lineTo(vertices[1].x, vertices[1].y);
            ctx.lineTo(vertices[2].x, vertices[2].y);
            ctx.lineTo(vertices[3].x, vertices[3].y);
            ctx.lineTo(vertices[0].x, vertices[0].y);
            ctx.lineTo(vertices[2].x, vertices[2].y);
            ctx.moveTo(vertices[1].x, vertices[1].y);
            ctx.lineTo(vertices[3].x, vertices[3].y);
            ctx.stroke();

            // Draw Points' labels for ABCD
            ctx.font = textSize + "px TimesNewRome";            
            const verticesTextAlign = ['right', 'left', 'left', 'right'];
            const verticesTextBaseline = ['top', 'top', 'bottom', 'bottom'];
            for (let i = 0; i < vertices.length; i++) {
                ctx.textAlign = verticesTextAlign[i];
                ctx.textBaseline = verticesTextBaseline[i];
                ctx.fillText(vertices[i].name, vertices[i].x, vertices[i].y);
            }
            
            // Draw Point label for P
            let textAlignP, textBaselineP; 
            if (myMath.distance(vertices[0], vertices[1]) ** 2 > myMath.distance(vertices[0], P) ** 2 + myMath.distance(P, vertices[1]) ** 2) {
                // The angle below Point P, with vertex P, is obtuse.
                textAlignP = 'center';
                textBaselineP = 'top';
                P.y += textSize / 2;
            } else { // The angle below Point P, with vertex P, is accute.
                textAlignP = 'left';
                textBaselineP = 'middle';
                P.x += textSize / 2;
            }
            ctx.textAlign = textAlignP;
            ctx.textBaseline = textBaselineP;
            ctx.fillText(P.name, P.x, P.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }

    generateQuestion = () => {
        let diagramSize = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3);
        let allCorners = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }];
        if (Math.random() < 0.5) { // MN in a triangle ABC
            // Determine coordinates of the three vertices of ABC;
            let vertices = myMath.shuffleArray(allCorners).slice(0, 2);
            let newVertex = { x: -1, y: -1 };
            if (vertices[0].x === vertices[1].x) {
                newVertex.x = Math.abs(vertices[0].x - 1);
                newVertex.y = Math.random();
            } else if (vertices[0].y === vertices[1].y) {
                newVertex.y = Math.abs(vertices[0].y - 1);
                newVertex.x = Math.random();
            } else {
                let newVertexBase = Math.random() < 0.5 ? vertices[0] : vertices[1];
                [newVertex.x, newVertex.y] = Math.random() < 0.5
                    ? [newVertexBase.x, Math.abs(newVertexBase.y - 0.5 - 0.5 * Math.random())]
                    : [Math.abs(newVertexBase.x - 0.5 - 0.5 * Math.random()), newVertexBase.y];
            }
            vertices.push(newVertex);

            for (let point of vertices) {
                point.x *= diagramSize;
                point.y *= diagramSize;
            }
            myMath.shuffleArray(vertices); // to randomly assign names A, B, C

            for (let i = 0; i < vertices.length; i++) {
                vertices[i].name = 'ABC'[i];
            }
            myMath.shuffleArray(vertices); // to randomly choose a side that MN is parallel with

            // Determine the coordinates of M, N;
            // M on the side between vertices[0] and [1];
            // N on the side between vertices[0] and [2];

            let [M, N] = [{ x: -1, y: -1, name: 'M' }, { x: -1, y: -1, name: 'N' }];
            let MNposition = 1 / 3 + 1 / 3 * Math.random();
            M.x = vertices[0].x * MNposition + vertices[1].x * (1 - MNposition);
            M.y = vertices[0].y * MNposition + vertices[1].y * (1 - MNposition);
            N.x = vertices[0].x * MNposition + vertices[2].x * (1 - MNposition);
            N.y = vertices[0].y * MNposition + vertices[2].y * (1 - MNposition);

            let sideNames = myMath.shuffleArray([
                [vertices[0].name + "M", vertices[0].name + vertices[1].name, "M" + vertices[1].name],
                [vertices[0].name + "N", vertices[0].name + vertices[2].name, "N" + vertices[2].name],
                ["MN", vertices[1].name + vertices[2].name]
            ]);
            let givenSideNames = sideNames[0];
            let askingSideNames = sideNames[1];

            let ratioDenominator = myMath.randomInteger(2, 5);
            let ratioNumerator = myMath.randomInteger(1, ratioDenominator - 1);
            let tick1 = myMath.randomInteger(1, Math.floor(50 / ratioDenominator));
            let tick2 = myMath.randomInteger(1, Math.floor(50 / ratioDenominator));
            let givenSideLengths = [tick1 * ratioNumerator, tick1 * ratioDenominator, tick1 * (ratioDenominator - ratioNumerator)].slice(0, givenSideNames.length);
            let askingSideLengths = [tick2 * ratioNumerator, tick2 * ratioDenominator, tick2 * (ratioDenominator - ratioNumerator)].slice(0, askingSideNames.length);
            let givenSides = [];
            let askingSides = [];
            let hintTex = '';
            for (let i = 0; i < givenSideNames.length; i++) {
                givenSides.push({
                    name: givenSideNames[i],
                    length: givenSideLengths[i],
                })
            };
            hintTex = '{' + givenSideNames[0] + '\\over ' + givenSideNames[1] + '}';
            myMath.shuffleArray(givenSides);

            for (let i = 0; i < askingSideNames.length; i++) {
                askingSides.push({
                    name: askingSideNames[i],
                    length: askingSideLengths[i],
                })
            };
            hintTex += '={' + askingSideNames[0] + '\\over ' + askingSideNames[1] + '}';
            myMath.shuffleArray(askingSides);

            this.setState({
                question: askingSides[1].name,
                correctAnswer: askingSides[1].length,
                hintTex: hintTex,
            })

            return (<><p>
                <MathComponent display={false} tex={'MN \\parallel ' + vertices[1].name + vertices[2].name + '.~'} />
                <MathComponent display={false} tex={givenSides[0].name + '=' + givenSides[0].length + '.~'} />
                <MathComponent display={false} tex={givenSides[1].name + '=' + givenSides[1].length + '.~'} />
                <MathComponent display={false} tex={askingSides[0].name + '=' + askingSides[0].length + '.~'} />
                <MathComponent display={false} tex={'\\text{(Diagram not to scale)}'} />
            </p>{this.drawTriangle(vertices, M, N)}</>);
        } else { // Trapezoid ABCD with diagonals intersect at P.

            // Determine coordinates of the vertices of ABCD;
            let basesAreHorizontal;
            let upperBase = Math.random() * 0.2 + 0.3;
            let vertices = myMath.shuffleArray(allCorners).slice(0, 2);
            let newVertices = [{ x: -1, y: -1 }, { x: -1, y: -1 }];
            if (vertices[0].x === vertices[1].x) {
                newVertices[0].x = Math.abs(vertices[0].x - 1);
                newVertices[1].x = Math.abs(vertices[1].x - 1);
                newVertices[0].y = 0.5 - upperBase + Math.random() * upperBase;
                newVertices[1].y = newVertices[0].y + upperBase;
                basesAreHorizontal = false;
            } else if (vertices[0].y === vertices[1].y) {
                newVertices[0].y = Math.abs(vertices[0].y - 1);
                newVertices[1].y = Math.abs(vertices[1].y - 1);
                newVertices[0].x = 0.5 - upperBase + Math.random() * upperBase;
                newVertices[1].x = newVertices[0].x + upperBase;
                basesAreHorizontal = true;
            } else {
                let lowerBase = Math.random() * 0.5 + 0.5;
                if (Math.random() < 0.5) {
                    newVertices[0].x = Math.abs(vertices[0].x - upperBase);
                    newVertices[0].y = vertices[0].y
                    newVertices[1].x = Math.abs(vertices[1].x - lowerBase);
                    newVertices[1].y = vertices[1].y
                    basesAreHorizontal = true;
                } else {
                    newVertices[0].y = Math.abs(vertices[0].y - upperBase);
                    newVertices[0].x = vertices[0].x
                    newVertices[1].y = Math.abs(vertices[1].y - lowerBase);
                    newVertices[1].x = vertices[1].x
                    basesAreHorizontal = false;
                }
            }
            vertices = vertices.concat(newVertices);

            // Randomly assign vertex names ABCD for trapezoid ABCD.
            let vertexNames = myMath.arrayShiftRight('ABCD', myMath.randomInteger(0, 3));
            if (Math.random() < 0.5) {
                vertexNames = myMath.reverseString(vertexNames);
            }

            // The first point is the bottom left, then counter clockwise. 
            if (basesAreHorizontal) {
                vertices.sort((a, b) => {
                    if (a.y === b.y && a.y === 1) { return a.x - b.x }
                    else if (a.y === b.y && a.y === 0) { return b.x - a.x }
                    else { return b.y - a.y };
                });
            } else {
                vertices.sort((a, b) => {
                    if (a.x === b.x && a.x === 1) { return a.y - b.y }
                    else if (a.x === b.x && a.x === 0) { return b.y - a.y }
                    else { return b.x - a.x };
                });
                vertices.reverse();
                vertices = myMath.arrayShiftRight(vertices, 3);
            }
            for (let i = 0; i < vertexNames.length; i++) {
                vertices[i].name = vertexNames[i];
            }

            // Scale the drawing.
            for (let point of vertices) {
                point.x *= diagramSize;
                point.y *= diagramSize;
            }

            // Determine the coordinates of P, the intersection between AC and BD;
            let P = myMath.findIntersectionByPoints(vertices[0], vertices[2], vertices[1], vertices[3]);
            P.name = 'P';

            let sideNames;
            let parallelCondition = '';
            if (basesAreHorizontal) {
                sideNames = myMath.shuffleArray([
                    ['P' + vertices[3].name, 'P' + vertices[1].name, vertices[3].name + vertices[1].name],
                    ['P' + vertices[2].name, 'P' + vertices[0].name, vertices[2].name + vertices[0].name],
                    [vertices[3].name + vertices[2].name, vertices[1].name + vertices[0].name]
                ]);
                parallelCondition = vertices[3].name + vertices[2].name + ' \\parallel ' + vertices[0].name + vertices[1].name + '.~';
            } else {
                sideNames = myMath.shuffleArray([
                    ['P' + vertices[3].name, 'P' + vertices[1].name, vertices[3].name + vertices[1].name],
                    ['P' + vertices[0].name, 'P' + vertices[2].name, vertices[0].name + vertices[2].name],
                    [vertices[3].name + vertices[0].name, vertices[1].name + vertices[2].name]
                ]);
                parallelCondition = vertices[3].name + vertices[0].name + ' \\parallel ' + vertices[2].name + vertices[1].name + '.~';
            }
            let givenSideNames = sideNames[0];
            let askingSideNames = sideNames[1];

            // shorter side first. 
            if (myMath.distance(P, vertices[3]) > myMath.distance(P, vertices[1])) {
                [givenSideNames[0], givenSideNames[1]] = [givenSideNames[1], givenSideNames[0]];
                [askingSideNames[0], askingSideNames[1]] = [askingSideNames[1], askingSideNames[0]];
            }

            let ratioDenominator = myMath.randomInteger(3, 5);
            let ratioNumerator = myMath.randomInteger(1, ratioDenominator - 1);
            let tick1 = myMath.randomInteger(1, Math.floor(50 / ratioDenominator));
            let tick2 = myMath.randomInteger(1, Math.floor(50 / ratioDenominator));
            let shorterShare = Math.min(ratioNumerator, ratioDenominator - ratioNumerator);
            let longerShare = Math.max(ratioNumerator, ratioDenominator - ratioNumerator);
            let givenSideLengths = [tick1 * shorterShare, tick1 * longerShare, tick1 * ratioDenominator].slice(0, givenSideNames.length);
            let askingSideLengths = [tick2 * shorterShare, tick2 * longerShare, tick2 * ratioDenominator].slice(0, askingSideNames.length);
            let givenSides = [];
            let askingSides = [];
            let hintTex = '';
            for (let i = 0; i < givenSideNames.length; i++) {
                givenSides.push({
                    name: givenSideNames[i],
                    length: givenSideLengths[i],
                })
            };
            hintTex = '{' + givenSideNames[0] + '\\over ' + givenSideNames[1] + '}';
            myMath.shuffleArray(givenSides);

            for (let i = 0; i < askingSideNames.length; i++) {
                askingSides.push({
                    name: askingSideNames[i],
                    length: askingSideLengths[i],
                })
            };
            hintTex += '={' + askingSideNames[0] + '\\over ' + askingSideNames[1] + '}';
            myMath.shuffleArray(askingSides);

            this.setState({
                question: askingSides[1].name,
                correctAnswer: askingSides[1].length,
                hintTex: hintTex,
            })

            return (<><p>
                <MathComponent display={false} tex={parallelCondition} />
                <MathComponent display={false} tex={givenSides[0].name + '=' + givenSides[0].length + '.~'} />
                <MathComponent display={false} tex={givenSides[1].name + '=' + givenSides[1].length + '.~'} />
                <MathComponent display={false} tex={askingSides[0].name + '=' + askingSides[0].length + '.~'} />
                <MathComponent display={false} tex={'\\text{(Diagram not to scale)}'} />
            </p>{this.drawTrapezoid(vertices, P)}</>);
        }
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: '',
            difficulty: ''
        });
        if (window.innerWidth <= 800) { }
        else { this.answerForm.current.focus(); }
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
                tex={'\\text{Incorrect!}~' + this.state.question + '=' + correctAnswer + '.~'} />
            <MathComponent display={false}
                tex={'\\text{Hint:}~' + this.state.hintTex} />
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

export default BasicSimilarTriangles;
