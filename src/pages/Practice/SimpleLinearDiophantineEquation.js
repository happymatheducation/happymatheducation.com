import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class SimpleLinearDiophantineEquation extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        allSolns:'',
    };

    generateQuestion = () => {
        // ax + by = n

        const a = myMath.randomInteger(2, 9);
        let b = myMath.randomInteger(2, 9);
        while (myMath.gcdOfTwo(a, b) !== 1) { b = myMath.randomInteger(2, 9); }
        const minX = myMath.randomInteger(1, b);
        const minY = myMath.randomInteger(1, a);
        const countOfSolns = myMath.randomInteger(1, 5);
        const maxX = minX + b * (countOfSolns - 1);
        const maxY = minY + a * (countOfSolns - 1);
        let n = a * minX + b * maxY;
        let equation = a + 'x+' + b + 'y=' + n;
        let domainString = 'x, y \\in \\mathbb{N}.';
        let questionString, correctAnswer;
        let allSolns = '';
        let currentX = minX;
        let currentY = maxY;
        for (let i = 0; i < countOfSolns; i++) {
            allSolns += '(' + currentX + ',' + currentY + '),';
            currentX += b;
            currentY -= a;
        }
        allSolns = allSolns.slice(0, -1);
        allSolns += '.';


        if (Math.random() < 0.5) {
            questionString = ' How many solutions does the equation have?';
            correctAnswer = countOfSolns;
        } else {
            if (Math.random() < 0.5) { // asking x
                if (Math.random() < 0.5) { // asking minX
                    questionString = <> What is the smallest possible value of &nbsp;
                        <MathComponent display={false} tex={'x'} /> ?</>;
                    correctAnswer = minX;
                } else { // asking maxX
                    questionString = <> What is the largest possible value of &nbsp;
                        <MathComponent display={false} tex={'x'} /> ?</>;
                    correctAnswer = maxX;
                }
            } else { // asking y
                if (Math.random() < 0.5) { // asking minY
                    questionString = <> What is the smallest possible value of &nbsp;
                        <MathComponent display={false} tex={'y'} /> ?</>;
                    correctAnswer = minY;
                } else { // asking maxY
                    questionString = <> What is the largest possible value of &nbsp;
                        <MathComponent display={false} tex={'y'} /> ?</>;
                    correctAnswer = maxY;
                }
            }
        }

        this.setState({
            correctAnswer: correctAnswer,
            allSolns: allSolns,
        })

        return (<> Given &nbsp;
            <MathComponent display={false} tex={domainString} />
            {questionString} <br/>
            <MathComponent display={false} tex={equation} /></>);
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: ''
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctAnswer;
        if (parseInt(this.state.userAnswer) === this.state.correctAnswer) {
            return true;
        } else {
            correctAnswer = this.state.correctAnswer;
        }
        return (<>
            <MathComponent display={false} tex={'\\text{Incorrect! Answer: }' + correctAnswer + '. '} />
            <MathComponent display={false} tex={'\\text{ All solutions: }' + this.state.allSolns} />
        </>
        );
    }

    render() {

        let answerForm = (<>
            Your Answer: <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
                onChange={e => this.setState({ userAnswer: e.target.value })}></input><br />
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

export default SimpleLinearDiophantineEquation;
