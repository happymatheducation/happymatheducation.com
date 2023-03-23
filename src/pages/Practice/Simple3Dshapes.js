import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";
import sphere from './Diagrams/sphere.png'
import cylinder from './Diagrams/cylinder.png'
import cone from './Diagrams/cone.png'
import cube from './Diagrams/cube.png'
import cuboid from './Diagrams/cuboid.png'
import squarePyramid from './Diagrams/squarePyramid.png'
import triangularPyramid from './Diagrams/triangularPyramid.png'
import hexagonalPyramid from './Diagrams/hexagonalPyramid.png'

class Simple3Dshapes extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        hintString: '',
        beforeBlank: '',
    };

    generateQuestion = () => {

        let questionString = 'A ';
        let correctAnswer, correctAnswerString;
        let hintString = '';
        const allShapes = ['cube', 'cuboid', 'cylinder', 'coneOrPyramid', 'sphere'];
        let shape = myMath.randomFromArray(allShapes);
        let a, r, h, s, A, b, c;
        let diagram;
        let beforeBlank = '';

        if (Math.random() < 0.5) { // surface area
            beforeBlank = 'Surface area = ';
            switch (shape) {
                case 'cube': // cube(1~6),
                    a = myMath.randomInteger(1, 6);
                    questionString += 'cube has edge length ' + a;
                    correctAnswer = 6 * a * a + '';
                    hintString = '6a^2';
                    diagram = cube;
                    break;
                case 'cuboid': // cuboid(1~5),
                    a = myMath.randomInteger(1, 5);
                    b = myMath.randomInteger(1, 5);
                    c = myMath.randomInteger(1, 5);
                    questionString += 'cuboid (rectangular prism) has dimesions ' + a + ' by ' + b + ' by ' + c;
                    correctAnswer = 2 * (a * b + b * c + c * a) + '';
                    hintString = '2(ab+bc+ca)';
                    diagram = cuboid;
                    break;
                case 'cylinder': // right circular cylinder(r, h = 1~5),
                    r = myMath.randomInteger(1, 5);
                    h = myMath.randomInteger(1, 5);
                    questionString += 'right circular cylinder has base radius ' + r + ', and height ' + h;
                    correctAnswer = 2 * r * (r + h) + '\u03c0';
                    hintString = '2\u03c0 r^2 + 2\u03c0 rh';
                    diagram = cylinder;
                    break;
                case 'coneOrPyramid': // right circular cone(r = 1~5, s = r + 1~5),
                    r = myMath.randomInteger(1, 5);
                    s = myMath.randomInteger(1, 5) + r;
                    questionString += 'right circular cone has base radius ' + r + ', and slant height ' + s;
                    correctAnswer = r * (r + s) + '\u03c0';
                    hintString = '\u03c0 r^2 + \u03c0 rs';
                    diagram = cone;
                    break;
                case 'sphere': // sphere(1~10);
                    r = myMath.randomInteger(1, 10);
                    questionString += 'sphere has radius ' + r;
                    correctAnswer = 4 * r * r + '\u03c0';
                    hintString = '4 \u03c0 r^2';
                    diagram = sphere;
                    break;
                default:
                    console.log(shape);
            }
        } else { // volume: 
            beforeBlank = 'Volume = ';
            switch (shape) {        
                case 'cube': // cube(1~10),
                    a = myMath.randomInteger(1, 10);
                    questionString += 'cube has edge length ' + a;
                    correctAnswer = a ** 3 + '';
                    hintString = 'a^3';
                    diagram = cube;
                    break;
                case 'cuboid': // cuboid(1~6),
                    a = myMath.randomInteger(1, 6);
                    b = myMath.randomInteger(1, 6);
                    c = myMath.randomInteger(1, 6);
                    questionString += 'cuboid (rectangular prism) has dimesions ' + a + ' by ' + b + ' by ' + c;
                    correctAnswer = a * b * c + '';
                    hintString = 'abc';
                    diagram = cuboid;
                    break;
                case 'cylinder': // cylinder(1~6),
                    r = myMath.randomInteger(1, 6);
                    h = myMath.randomInteger(1, 6);
                    questionString += 'cylinder has base radius ' + r + ', and height ' + h;
                    correctAnswer = r * r * h;
                    if (correctAnswer === 1) { correctAnswer = ''; }
                    correctAnswer += '\u03c0';
                    hintString = '\u03c0 r^2 h';
                    diagram = cylinder;
                    break;
                case 'coneOrPyramid': // cone / square pyramid(1~6, or + h*=3), triangular / hexagonal pyramid(A, h = 1~10, A or h *= 3);
                    let base = myMath.randomFromArray(['cone', 'square', 'triangular', 'hexagonal']);
                    switch (base) {
                        case 'cone':
                            r = myMath.randomInteger(1, 6);
                            h = myMath.randomInteger(1, 6);
                            if (r * h % 3) { h *= 3 };
                            questionString += 'cone has base radius ' + r + ', and height ' + h;
                            correctAnswer = r * r * h / 3;
                            if (correctAnswer === 1) { correctAnswer = ''; }
                            correctAnswer += '\u03c0';
                            hintString = '{1 \\over 3}\u03c0 r^2 h';
                            diagram = cone;
                            break;
                        case 'square':
                            a = myMath.randomInteger(1, 6);
                            h = myMath.randomInteger(1, 6);
                            if (a * h % 3) { h *= 3 };
                            questionString += 'square pyramid has base side length ' + a + ', and height ' + h;
                            correctAnswer = a * a * h / 3 + '';
                            hintString = '{1 \\over 3} a^2 h';
                            diagram = squarePyramid;
                            break;
                        case 'triangular':
                            A = myMath.randomInteger(1, 10);
                            h = myMath.randomInteger(1, 10);
                            if (A * h % 3) { Math.random() < 0.5 ? h *= 3 : A *= 3 };
                            questionString += 'triangular pyramid has base area ' + A + ', and height ' + h;
                            correctAnswer = A * h / 3 + '';
                            hintString = '{1 \\over 3} A h';
                            diagram = triangularPyramid;
                            break;
                        case 'hexagonal':
                            A = myMath.randomInteger(1, 10);
                            h = myMath.randomInteger(1, 10);
                            if (A * h % 3) { Math.random() < 0.5 ? h *= 3 : A *= 3 };
                            questionString += 'hexagonal pyramid has base area ' + A + ', and height ' + h;
                            correctAnswer = A * h / 3 + '';
                            hintString = '{1 \\over 3} A h';
                            diagram = hexagonalPyramid;
                            break;
                        default:
                            console.log(base);
                    }
                    break;
                case 'sphere': // sphere(r = 3, 6, 15, or 30), 
                    r = myMath.randomFromArray([3, 6, 15, 30]);
                    questionString += 'sphere has radius ' + r;
                    correctAnswer = 4 * r**3 / 3 + '\u03c0';
                    hintString = '{4 \\over 3} r^3';
                    diagram = sphere;
                    break;
                default:
                    console.log(shape);
            }
        }
        this.setState({
            correctAnswer: correctAnswer,
            hintString: hintString,
            correctAnswerString: correctAnswerString,
            beforeBlank: beforeBlank,
        });

        questionString += '.'

        return <>
            <p>{questionString}</p>
            <img className='canvas' src={diagram} alt="(No diagram)" width={Math.min(window.innerWidth * 0.2, window.innerHeight * 0.2)} />
        </>;
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: ''
        });
        this.answerForm.current.focus();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    checkAnswer = () => {
        let correctAnswer;
        if (this.state.userAnswer === this.state.correctAnswer) {
            return true;
        } else {
            correctAnswer = this.state.correctAnswer;
        }
        return (<>
            <MathComponent display={false}
                tex={String.raw`\text{Incorrect! Answer: }${ correctAnswer }.~`} />
            <MathComponent display={false} tex={String.raw`\text {Hint: }`
                + this.state.hintString} /></>
        );
}

render() {

    let answerForm = (<>
        {this.state.beforeBlank}<input type="text" value={this.state.userAnswer} ref={this.answerForm} autoFocus
            onChange={e => {
                let userAnswer = e.target.value.replaceAll('pi', '\u03c0');
                userAnswer = userAnswer.replaceAll(' ', '');
                this.setState({ userAnswer: userAnswer })
            }}></input>
        <button style={{ margin: '0px max(4vw, 40px)', padding: '0px max(1vw, 10px)' }} onClick={
                () => { 
                    let userAnswer = this.state.userAnswer;
                    userAnswer += '\u03c0'; 
                    this.setState({ userAnswer: userAnswer }); 
                    this.answerForm.current.focus();
                }
            }>&pi;</button>
        <br />
        (To input &pi;, type "pi" or click on "&pi;".)
        <br />
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

export default Simple3Dshapes;
