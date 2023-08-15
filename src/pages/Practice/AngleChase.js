import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import Canvas from "../../components/Canvas";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class AngleChase extends Component {

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
    drawDiameter = () => {
        // AB is diameter;
        // Angle C is 90 degree;

        let AB = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = AB / 2;
        let angleOfA = Math.random() * Math.PI * 2;
        let randomAngleSpace = (Math.random() * 0.8 + 0.1) * Math.PI;
        let angleOfC = angleOfA + (Math.random() > 0.5 ? randomAngleSpace : (-randomAngleSpace));
        let pointA = { x: radius * Math.cos(angleOfA), y: radius * Math.sin(angleOfA) };
        let pointB = { x: -pointA.x, y: -pointA.y };
        let pointO = { x: 0, y: 0 };
        let pointC = { x: radius * Math.cos(angleOfC), y: radius * Math.sin(angleOfC) };

        // Determine canvas size and diagram position
        let xMax = radius;
        let xMin = -radius;
        let yMax = radius;
        let yMin = -radius;
        let width = xMax - xMin;
        let height = yMax - yMin;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2;
        let yCorrection = canvasHeight / 2;
        pointA.x += xCorrection;
        pointB.x += xCorrection;
        pointC.x += xCorrection;
        pointO.x += xCorrection;
        pointA.y += yCorrection;
        pointB.y += yCorrection;
        pointC.y += yCorrection;
        pointO.y += yCorrection;

        // Determine points' labels' positions. 
        let textAlignA, textAlignB, textAlignC, textAlignO;
        let textBaselineA, textBaselineB, textBaselineC, textBaselineO = 'top';
        [textAlignA, textAlignB] = pointA.x >= pointB.x ? ['left', 'right'] : ['right', 'left'];
        [textBaselineA, textBaselineB] = pointA.y >= pointB.y ? ['top', 'bottom'] : ['bottom', 'top'];
        let ABslope = (pointA.y - pointB.y) / (pointA.x - pointB.x);
        let AByintercept = pointA.y - ABslope * pointA.x;
        if (ABslope > 0 && pointC.y < ABslope * pointC.x + AByintercept) {
            [textAlignO, textBaselineO] = ['right', 'top'];
        } else if (ABslope > 0 && pointC.y >= ABslope * pointC.x + AByintercept) {
            [textAlignO, textBaselineO] = ['left', 'bottom'];
        } else if (ABslope <= 0 && pointC.y < ABslope * pointC.x + AByintercept) {
            [textAlignO, textBaselineO] = ['left', 'top'];
        } else if (ABslope <= 0 && pointC.y >= ABslope * pointC.x + AByintercept) {
            [textAlignO, textBaselineO] = ['right', 'bottom'];
        }
        textAlignC = pointC.x > pointO.x ? 'left' : 'right';
        textBaselineC = pointC.y > pointO.y ? 'top' : 'bottom';

        // Draw;
        const draw = (ctx) => {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.arc(pointO.x, pointO.y, radius, 0, Math.PI * 2);
            ctx.moveTo(pointO.x, pointO.y)
            ctx.arc(pointO.x, pointO.y, 1, 0, Math.PI * 2, true);
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.lineTo(pointC.x, pointC.y);
            ctx.lineTo(pointA.x, pointA.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignA;
            ctx.textBaseline = textBaselineA;
            ctx.fillText('A', pointA.x, pointA.y);

            ctx.textAlign = textAlignB;
            ctx.textBaseline = textBaselineB;
            ctx.fillText('B', pointB.x, pointB.y);

            ctx.textAlign = textAlignC;
            ctx.textBaseline = textBaselineC;
            ctx.fillText('C', pointC.x, pointC.y);

            ctx.textAlign = textAlignO;
            ctx.textBaseline = textBaselineO;
            ctx.fillText("O", pointO.x, pointO.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }
    drawCentralAngle = () => {
        // AB is a chord;
        let Diameter = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = Diameter / 2;
        let angleOfA = Math.random() * Math.PI * 2;
        let minimumPointSpace = 0.1 * Math.PI;
        let maximumABSpace = 0.9 * Math.PI;
        let angleOfB = angleOfA + myMath.randomRealNumber(minimumPointSpace, maximumABSpace);
        let angleOfC = myMath.randomRealNumber(angleOfB + minimumPointSpace, angleOfA + Math.PI * 2 - minimumPointSpace);
        [angleOfA, angleOfB] = Math.random()<0.5 ? [angleOfA, angleOfB] : [angleOfB, angleOfA];
        let pointA = { x: radius * Math.cos(angleOfA), y: radius * Math.sin(angleOfA) };
        let pointB = { x: radius * Math.cos(angleOfB), y: radius * Math.sin(angleOfB) };
        let pointC = { x: radius * Math.cos(angleOfC), y: radius * Math.sin(angleOfC) };
        let pointO = { x: 0, y: 0 };

        // Determine canvas size and diagram position
        let xMax = radius;
        let xMin = -radius;
        let yMax = radius;
        let yMin = -radius;
        let width = xMax - xMin;
        let height = yMax - yMin;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2;
        let yCorrection = canvasHeight / 2;
        pointA.x += xCorrection;
        pointB.x += xCorrection;
        pointC.x += xCorrection;
        pointO.x += xCorrection;
        pointA.y += yCorrection;
        pointB.y += yCorrection;
        pointC.y += yCorrection;
        pointO.y += yCorrection;

        // Determine points' labels' positions. 
        let textAlignA, textAlignB, textAlignC, textAlignO;
        let textBaselineA, textBaselineB, textBaselineC, textBaselineO;
        textAlignA = pointA.x > pointO.x ? 'left' : 'right';
        textBaselineA = pointA.y > pointO.y ? 'top' : 'bottom';
        textAlignB = pointB.x > pointO.x ? 'left' : 'right';
        textBaselineB = pointB.y > pointO.y ? 'top' : 'bottom';
        textAlignC = pointC.x > pointO.x ? 'left' : 'right';
        textBaselineC = pointC.y > pointO.y ? 'top' : 'bottom';
        textAlignO = pointO.x > (pointA.x + pointB.x)/2 ? 'left' : 'right';
        textBaselineO = pointO.y > (pointA.y + pointB.y) / 2 ? 'top' : 'bottom';


        // Draw;
        const draw = (ctx) => {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.arc(pointO.x, pointO.y, radius, 0, Math.PI * 2);
            ctx.moveTo(pointO.x, pointO.y)
            ctx.arc(pointO.x, pointO.y, 1, 0, Math.PI * 2, true);
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointC.x, pointC.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.lineTo(pointO.x, pointO.y);
            ctx.lineTo(pointA.x, pointA.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignA;
            ctx.textBaseline = textBaselineA;
            ctx.fillText('A', pointA.x, pointA.y);

            ctx.textAlign = textAlignB;
            ctx.textBaseline = textBaselineB;
            ctx.fillText('B', pointB.x, pointB.y);

            ctx.textAlign = textAlignC;
            ctx.textBaseline = textBaselineC;
            ctx.fillText('C', pointC.x, pointC.y);

            ctx.textAlign = textAlignO;
            ctx.textBaseline = textBaselineO;
            ctx.fillText("O", pointO.x, pointO.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }
    drawInscribedAngles = () => {
        // AB is a chord;
        let Diameter = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = Diameter / 2;
        let angleOfA = Math.random() * Math.PI * 2;
        let minimumPointSpace = 0.1 * Math.PI;
        let maximumABSpace = 0.9 * Math.PI;
        let angleOfB = angleOfA + myMath.randomRealNumber(minimumPointSpace, maximumABSpace);
        let angleOfC = myMath.randomRealNumber(angleOfB + minimumPointSpace, angleOfA + Math.PI * 2 - minimumPointSpace * 2);
        let angleOfD = myMath.randomRealNumber(angleOfB + minimumPointSpace, angleOfA + Math.PI * 2 - minimumPointSpace * 2);
        angleOfC > angleOfD ? angleOfC += minimumPointSpace : angleOfD += minimumPointSpace;
        [angleOfA, angleOfB] = Math.random() < 0.5 ? [angleOfA, angleOfB] : [angleOfB, angleOfA];
        let pointA = { x: radius * Math.cos(angleOfA), y: radius * Math.sin(angleOfA) };
        let pointB = { x: radius * Math.cos(angleOfB), y: radius * Math.sin(angleOfB) };
        let pointC = { x: radius * Math.cos(angleOfC), y: radius * Math.sin(angleOfC) };
        let pointD = { x: radius * Math.cos(angleOfD), y: radius * Math.sin(angleOfD) };
        let pointO = { x: 0, y: 0 };

        // Determine canvas size and diagram position
        let xMax = radius;
        let xMin = -radius;
        let yMax = radius;
        let yMin = -radius;
        let width = xMax - xMin;
        let height = yMax - yMin;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2;
        let yCorrection = canvasHeight / 2;
        pointA.x += xCorrection;
        pointB.x += xCorrection;
        pointC.x += xCorrection;
        pointD.x += xCorrection;
        pointO.x += xCorrection;
        pointA.y += yCorrection;
        pointB.y += yCorrection;
        pointC.y += yCorrection;
        pointD.y += yCorrection;
        pointO.y += yCorrection;

        // Determine points' labels' positions. 
        let textAlignA, textAlignB, textAlignC, textAlignD //, textAlignO;
        let textBaselineA, textBaselineB, textBaselineC, textBaselineD //, textBaselineO;
        textAlignA = pointA.x > pointO.x ? 'left' : 'right';
        textBaselineA = pointA.y > pointO.y ? 'top' : 'bottom';
        textAlignB = pointB.x > pointO.x ? 'left' : 'right';
        textBaselineB = pointB.y > pointO.y ? 'top' : 'bottom';
        textAlignC = pointC.x > pointO.x ? 'left' : 'right';
        textBaselineC = pointC.y > pointO.y ? 'top' : 'bottom';
        textAlignD = pointD.x > pointO.x ? 'left' : 'right';
        textBaselineD = pointD.y > pointO.y ? 'top' : 'bottom';
//        textAlignO = pointO.x > (pointA.x + pointB.x) / 2 ? 'left' : 'right';
//        textBaselineO = pointO.y > (pointA.y + pointB.y) / 2 ? 'top' : 'bottom';


        // Draw;
        const draw = (ctx) => {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.arc(pointO.x, pointO.y, radius, 0, Math.PI * 2);
//            ctx.moveTo(pointO.x, pointO.y)
//            ctx.arc(pointO.x, pointO.y, 1, 0, Math.PI * 2, true);
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointC.x, pointC.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.lineTo(pointD.x, pointD.y);
            ctx.lineTo(pointA.x, pointA.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignA;
            ctx.textBaseline = textBaselineA;
            ctx.fillText('A', pointA.x, pointA.y);

            ctx.textAlign = textAlignB;
            ctx.textBaseline = textBaselineB;
            ctx.fillText('B', pointB.x, pointB.y);

            ctx.textAlign = textAlignC;
            ctx.textBaseline = textBaselineC;
            ctx.fillText('C', pointC.x, pointC.y);

            ctx.textAlign = textAlignD;
            ctx.textBaseline = textBaselineD;
            ctx.fillText('D', pointD.x, pointD.y);

//            ctx.textAlign = textAlignO;
//            ctx.textBaseline = textBaselineO;
//            ctx.fillText("O", pointO.x, pointO.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }
    drawCyclicQuadrilateral = () => {
        let Diameter = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = Diameter / 2;
        let minimumPointSpace = 0.1 * Math.PI;
        let anglesOfAllVertices = [];
        for (let i = 0; i < 4; i++) {
            anglesOfAllVertices.push(Math.random() * (Math.PI * 2 - minimumPointSpace * 4));
        }
        anglesOfAllVertices.sort((a, b) => a - b);
        for (let i = 1; i < 4; i++) {
            anglesOfAllVertices[i] += i * minimumPointSpace;
        }
        let angleOfRotation = Math.random() * Math.PI * 2;
        anglesOfAllVertices = anglesOfAllVertices.map(e => e + angleOfRotation);
        let [angleOfA, angleOfB, angleOfC, angleOfD] = anglesOfAllVertices;
        let pointA = { x: radius * Math.cos(angleOfA), y: radius * Math.sin(angleOfA) };
        let pointB = { x: radius * Math.cos(angleOfB), y: radius * Math.sin(angleOfB) };
        let pointC = { x: radius * Math.cos(angleOfC), y: radius * Math.sin(angleOfC) };
        let pointD = { x: radius * Math.cos(angleOfD), y: radius * Math.sin(angleOfD) };
        let pointO = { x: 0, y: 0 };

        // Determine canvas size and diagram position
        let xMax = radius;
        let xMin = -radius;
        let yMax = radius;
        let yMin = -radius;
        let width = xMax - xMin;
        let height = yMax - yMin;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 3 * textSize;
        let canvasHeight = height + 3 * textSize;
        let xCorrection = canvasWidth / 2;
        let yCorrection = canvasHeight / 2;
        pointA.x += xCorrection;
        pointB.x += xCorrection;
        pointC.x += xCorrection;
        pointD.x += xCorrection;
        pointO.x += xCorrection;
        pointA.y += yCorrection;
        pointB.y += yCorrection;
        pointC.y += yCorrection;
        pointD.y += yCorrection;
        pointO.y += yCorrection;

        // Determine points' labels' positions. 
        let textAlignA, textAlignB, textAlignC, textAlignD //, textAlignO;
        let textBaselineA, textBaselineB, textBaselineC, textBaselineD //, textBaselineO;
        textAlignA = pointA.x > pointO.x ? 'left' : 'right';
        textBaselineA = pointA.y > pointO.y ? 'top' : 'bottom';
        textAlignB = pointB.x > pointO.x ? 'left' : 'right';
        textBaselineB = pointB.y > pointO.y ? 'top' : 'bottom';
        textAlignC = pointC.x > pointO.x ? 'left' : 'right';
        textBaselineC = pointC.y > pointO.y ? 'top' : 'bottom';
        textAlignD = pointD.x > pointO.x ? 'left' : 'right';
        textBaselineD = pointD.y > pointO.y ? 'top' : 'bottom';
        //        textAlignO = pointO.x > (pointA.x + pointB.x) / 2 ? 'left' : 'right';
        //        textBaselineO = pointO.y > (pointA.y + pointB.y) / 2 ? 'top' : 'bottom';


        // Draw;
        const draw = (ctx) => {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.arc(pointO.x, pointO.y, radius, 0, Math.PI * 2);
            //            ctx.moveTo(pointO.x, pointO.y)
            //            ctx.arc(pointO.x, pointO.y, 1, 0, Math.PI * 2, true);
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.lineTo(pointC.x, pointC.y);
            ctx.lineTo(pointD.x, pointD.y);
            ctx.lineTo(pointA.x, pointA.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignA;
            ctx.textBaseline = textBaselineA;
            ctx.fillText('A', pointA.x, pointA.y);

            ctx.textAlign = textAlignB;
            ctx.textBaseline = textBaselineB;
            ctx.fillText('B', pointB.x, pointB.y);

            ctx.textAlign = textAlignC;
            ctx.textBaseline = textBaselineC;
            ctx.fillText('C', pointC.x, pointC.y);

            ctx.textAlign = textAlignD;
            ctx.textBaseline = textBaselineD;
            ctx.fillText('D', pointD.x, pointD.y);

            //            ctx.textAlign = textAlignO;
            //            ctx.textBaseline = textBaselineO;
            //            ctx.fillText("O", pointO.x, pointO.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }
    drawRadiusTangent = () => {
        let OPplusRadius = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = OPplusRadius * myMath.randomRealNumber(0.2, 0.45);
        let OP = OPplusRadius - radius;
        let angleOfP = Math.random() * 2 * Math.PI;
        let anglePOT = Math.acos(radius / OP);
        let angleOfT = angleOfP + (Math.random() > 0.5 ? anglePOT : (-anglePOT));

        let pointP = { x: Math.cos(angleOfP) * OP, y: Math.sin(angleOfP) * OP };
        let pointT = { x: Math.cos(angleOfT) * radius, y: Math.sin(angleOfT) * radius };
        let pointO = { x: 0, y: 0 };

        // Determine canvas size and diagram position
        let xMax = Math.max(pointP.x, radius);
        let xMin = Math.min(pointP.x, -radius);
        let yMax = Math.max(pointP.y, radius);
        let yMin = Math.min(pointP.y, -radius);
        let width = xMax - xMin;
        let height = yMax - yMin;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 6 * textSize;
        let canvasHeight = height + 6 * textSize;
        let xCorrection = canvasWidth / 2;
        let yCorrection = canvasHeight / 2;
        pointP.x += xCorrection;
        pointT.x += xCorrection;
        pointO.x += xCorrection;
        pointP.y += yCorrection;
        pointT.y += yCorrection;
        pointO.y += yCorrection;

        // Determine points' labels' positions. 
        let textAlignP, textAlignO, textAlignT;
        let textBaselineP, textBaselineO, textBaselineT;
        [textAlignP, textAlignO] = pointP.x >= pointO.x ? ['left', 'right'] : ['right', 'left'];
        [textBaselineP, textBaselineO] = pointP.y >= pointO.y ? ['top', 'bottom'] : ['bottom', 'top'];
        textAlignT = pointT.x > pointO.x ? 'left' : 'right';
        textBaselineT = pointT.y > pointO.y ? 'top' : 'bottom';

        // Draw;
        const draw = (ctx) => {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.arc(pointO.x, pointO.y, radius, 0, Math.PI * 2);
            ctx.moveTo(pointO.x, pointO.y)
            ctx.arc(pointO.x, pointO.y, 1, 0, Math.PI * 2, true);
            ctx.moveTo(pointO.x, pointO.y);
            ctx.lineTo(pointT.x, pointT.y);
            ctx.lineTo(pointP.x, pointP.y);
            ctx.lineTo(pointO.x, pointO.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignP;
            ctx.textBaseline = textBaselineP;
            ctx.fillText('P', pointP.x, pointP.y);

            ctx.textAlign = textAlignO;
            ctx.textBaseline = textBaselineO;
            ctx.fillText('O', pointO.x, pointO.y);

            ctx.textAlign = textAlignT;
            ctx.textBaseline = textBaselineT;
            ctx.fillText('T', pointT.x, pointT.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }
    drawChordTangent = () => {
        let OPplusRadius = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.3); // Hypotenuse, also Diameter;
        let radius = OPplusRadius * myMath.randomRealNumber(0.2, 0.45);
        let OP = OPplusRadius - radius;
        let angleOfP = Math.random() * 2 * Math.PI;
        let anglePOA = Math.acos(radius / OP);
        let direction = Math.random() > 0.5 ? 1 : -1;
        let angleOfA = angleOfP + anglePOA * direction * -1;
        let minimumPointSpace = 0.3 * Math.PI;
        let maximumABSpace = 0.9 * Math.PI;
        let angleOfB = angleOfA + myMath.randomRealNumber(minimumPointSpace, maximumABSpace) * direction;
        let angleOfC = myMath.randomRealNumber(angleOfB + minimumPointSpace * direction, angleOfA + (Math.PI * 2 - minimumPointSpace) * direction);

        let pointP = { x: Math.cos(angleOfP) * OP, y: Math.sin(angleOfP) * OP };
        let pointA = { x: Math.cos(angleOfA) * radius, y: Math.sin(angleOfA) * radius };
        let pointB = { x: Math.cos(angleOfB) * radius, y: Math.sin(angleOfB) * radius };
        let pointC = { x: Math.cos(angleOfC) * radius, y: Math.sin(angleOfC) * radius };
        let pointO = { x: 0, y: 0 };

        // Determine canvas size and diagram position
        let xMax = Math.max(pointP.x, radius);
        let xMin = Math.min(pointP.x, -radius);
        let yMax = Math.max(pointP.y, radius);
        let yMin = Math.min(pointP.y, -radius);
        let width = xMax - xMin;
        let height = yMax - yMin;
        let textSize = Math.max(window.innerWidth / 100, 10) * 2;
        let canvasWidth = width + 6 * textSize;
        let canvasHeight = height + 6 * textSize;
        let xCorrection = canvasWidth / 2;
        let yCorrection = canvasHeight / 2;
        pointP.x += xCorrection;
        pointA.x += xCorrection;
        pointB.x += xCorrection;
        pointC.x += xCorrection;
        pointO.x += xCorrection;
        pointP.y += yCorrection;
        pointA.y += yCorrection;
        pointB.y += yCorrection;
        pointC.y += yCorrection;
        pointO.y += yCorrection;

        // Determine points' labels' positions. 
        let textAlignP, textAlignA, textAlignB, textAlignC;
        let textBaselineP, textBaselineA, textBaselineB, textBaselineC;
        textAlignP = pointP.x > pointO.x ? 'left' : 'right';
        textBaselineP = pointP.y > pointO.y ? 'top' : 'bottom';
        textAlignA = pointA.x > pointO.x ? 'left' : 'right';
        textBaselineA = pointA.y > pointO.y ? 'top' : 'bottom';
        textAlignB = pointB.x > pointO.x ? 'left' : 'right';
        textBaselineB = pointB.y > pointO.y ? 'top' : 'bottom';
        textAlignC = pointC.x > pointO.x ? 'left' : 'right';
        textBaselineC = pointC.y > pointO.y ? 'top' : 'bottom';

        // Draw;
        const draw = (ctx) => {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.lineJoin = 'round';
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.arc(pointO.x, pointO.y, radius, 0, Math.PI * 2);
            ctx.moveTo(pointP.x, pointP.y);
            ctx.lineTo(pointA.x, pointA.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.lineTo(pointC.x, pointC.y);
            ctx.lineTo(pointA.x, pointA.y);
            ctx.stroke();

            // Draw Points' labels;
            ctx.font = textSize + "px TimesNewRome";

            ctx.textAlign = textAlignP;
            ctx.textBaseline = textBaselineP;
            ctx.fillText('P', pointP.x, pointP.y);

            ctx.textAlign = textAlignA;
            ctx.textBaseline = textBaselineA;
            ctx.fillText('A', pointA.x, pointA.y);

            ctx.textAlign = textAlignB;
            ctx.textBaseline = textBaselineB;
            ctx.fillText('B', pointB.x, pointB.y);

            ctx.textAlign = textAlignC;
            ctx.textBaseline = textBaselineC;
            ctx.fillText('C', pointC.x, pointC.y);
        }
        return <Canvas className='canvas' draw={draw} width={canvasWidth} height={canvasHeight} />;
    }

    generateQuestion = () => {

        let problemType = myMath.randomInteger(1, 6);
        let question, given, correctAnswer, diagram;
        let angleACB = myMath.randomInteger(1, 89);
        let angleAOB = angleACB * 2;

        switch (problemType) {
            case 1: // Diameter => 90 degree;
                question = '\\angle ACB'
                given = 'AB \\text{ is the diameter of Circle } O.'
                diagram = this.drawDiameter();
                correctAnswer = 90;
                break;
            case 2: // Central angle = Inscribed angle * 2.
                if (Math.random() < 0.5) {
                    question = '\\angle ACB';
                    given = '\\text{ The central angle } \\angle AOB = ' + angleAOB + '^\\circ';
                    correctAnswer = angleACB;
                } else {
                    question = '\\angle AOB';
                    given = '\\text{ The inscribed angle } \\angle ACB = ' + angleACB + '^\\circ';
                    correctAnswer = angleAOB;
                }
                diagram = this.drawCentralAngle();
                break;
            case 3: // Inscribed angles are equal
                question = '\\angle ADB';
                given = '\\text{ The inscribed angle } \\angle ACB = ' + angleACB + '^\\circ';
                correctAnswer = angleACB;
                diagram = this.drawInscribedAngles();
                break;
            case 4: // Cyclic quadrilateral
                let allAngles = 'ABCD';
                let questionAngleID = myMath.randomInteger(0, 3);
                let givenAngleID = (questionAngleID + 2) % 4;
                let givenAngle = myMath.randomInteger(10, 170);
                correctAnswer = 180 - givenAngle;
                question = '\\angle ' + allAngles[questionAngleID];
                given = 'ABCD \\text{ is cyclic. } \\angle ' + allAngles[givenAngleID] + '=' + givenAngle + '^\\circ';
                diagram = this.drawCyclicQuadrilateral();
                break;
            case 5: // Radius perpendicular to Tangent
                question = '\\angle OTP';
                given = 'PT \\text{ is tangent to Circle } O \\text{ at } T.';
                correctAnswer = 90;
                diagram = this.drawRadiusTangent();
                break;
            case 6: // Chord Tangent Angle
                given = 'PT \\text{ is tangent to Circle } O \\text{ at } A. ';
                if (Math.random() < 0.5) {
                    question = '\\angle ACB';
                    given += '\\angle PAB = ' + angleACB + '^\\circ';
                } else {
                    question = '\\angle PAB';
                    given += '\\angle ACB = ' + angleACB + '^\\circ';
                }
                correctAnswer = angleACB;
                diagram = this.drawChordTangent();
                break;
            default:
                console.log('The problem type is' + problemType);
        }
        this.setState({
            question: question,
            correctAnswer: correctAnswer,
        });
        return (<><p>
            <MathComponent display={false} tex={given} />
            <MathComponent display={false} tex={'\\text{ (Diagram not to scale)}'} />
        </p>{diagram}</>);
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
                tex={'\\text{Incorrect!}~' + this.state.question + '=' + correctAnswer + '^\\circ.~'} />
        </>);
    }

    render() {

        let answerForm = (<>
            <MathComponent display={false} tex={'~' + this.state.question + '=~'} />
            <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
                onChange={e => this.setState({ userAnswer: e.target.value })}></input>
            <MathComponent display={false} tex={'^\\circ'} />
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

export default AngleChase;
