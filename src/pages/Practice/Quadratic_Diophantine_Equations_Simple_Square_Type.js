import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";

class Quadratic_Diophantine_Equations_Simple_Square_Type extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        allSolns: [],
        correctSolnsCount: '',
        userSolnsCount: '',
        userXMax: '',
        userXMin: '',
        userYMax: '',
        userYMin: '',
        xMax: '',
        xMin: '',
        yMax: '',
        yMin: '',
        factoredQuestion: '',
        asking: '', // 0: count; 1: xMax; 2: xMin; 3: yMax; 4: yMin;
    };

    generateQuestion = () => {
        let allSolns = [];
        let x = 0;
        let y = 0;
        let xAll = [];
        let yAll = [];

        const p = Math.ceil(Math.random() * 100);

        for (let factorTwo = 1; factorTwo <= Math.sqrt(p); factorTwo++) {
            let factorOne = p / factorTwo;
            if (Number.isInteger(factorOne) && Number.isInteger((factorOne + factorTwo) / 2)) {
                x = (factorOne + factorTwo) / 2;
                y = (factorOne - factorTwo) / 2;
                allSolns.push({ x: x, y: y });
                xAll.push(x);
                yAll.push(y);
            }
        }

        if (x === 0) {
            this.setState({ asking: 0 }); // count
        }
        else {
            let i = Math.random()*8;
            if (i > 4) {
                this.setState({ asking: 0 }); // count
            }
            else if (i > 3) {
                this.setState({ asking: 1 }); // xMax
            }
            else if (i > 2) {
                this.setState({ asking: 2 }); // xMin
            }
            else if (i > 1) {
                this.setState({ asking: 3 }); // yMax
            }
            else{
                this.setState({ asking: 4 }); // yMin
            }
        }


        this.setState({
            allSolns: allSolns,
            correctSolnsCount: allSolns.length,
            xMax: Math.max(...xAll),
            xMin: Math.min(...xAll),
            yMax: Math.max(...yAll),
            yMin: Math.min(...yAll),
            factoredQuestion: <MathComponent display={false} tex={`(x+y)(x-y)=${p}`} />,
        });

        return (
            <>Given &nbsp;
                <MathComponent display={false} tex={`x`} />&nbsp;
                and <MathComponent display={false} tex={`y`} />&nbsp;
                are non-negative integers, and <br/>
                <MathComponent tex={`x^2-y^2=${p}`} display={false} />
            </>);
    }

    clearAnswerForm = () => {
        this.setState({
            userSolnsCount: '',
            userXMax: '',
            userXMin: '',
            userYMax: '',
            userYMin: '',
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctAnswer;
        switch (this.state.asking) {
            case 0: 
                if (parseInt(this.state.userSolnsCount) === this.state.correctSolnsCount) {
                    return true;
                } else {
                    correctAnswer = this.state.correctSolnsCount;
                }
                break;
            case 1:
                if (parseInt(this.state.userXMax) === this.state.xMax) {
                    return true;
                } else {
                    correctAnswer = this.state.xMax;
                }
                break;
            case 2:
                if (parseInt(this.state.userXMin) === this.state.xMin) {
                    return true;
                } else {
                    correctAnswer = this.state.xMin;
                }
                break;
            case 3:
                if (parseInt(this.state.userYMax) === this.state.yMax) {
                    return true;
                } else {
                    correctAnswer = this.state.yMax;
                }
                break;
            case 4:
                if (parseInt(this.state.userYMin) === this.state.yMin) {
                    return true;
                } else {
                    correctAnswer = this.state.yMin;
                }
                break;
            default:
                console.log('this.state.asking is' + this.state.asking);
        }
        return (<>Incorrect! Answer: {correctAnswer}. Hint: {this.state.factoredQuestion}</>);
    }

    render() {

        let answerForm;
        switch (this.state.asking) {
            case 0:
                answerForm = (<>
                    Number of solutions = <input type="number" value={this.state.userSolnsCount} ref={this.answerForm} autoFocus
                        onChange={e => this.setState({ userSolnsCount: e.target.value })}></input><br />
                </>);
                break;
            case 1:
                answerForm = (<>
                    Maximum value of <MathComponent display={false} tex={'x='} /> <input type="number" value={this.state.userXMax} ref={this.answerForm} autoFocus
                        onChange={e => this.setState({ userXMax: e.target.value })}></input><br />
                </>);
                break;
            case 2:
                answerForm = (<>
                    Minimum value of <MathComponent display={false} tex={'x='} /> <input type="number" value={this.state.userXMin} ref={this.answerForm} autoFocus
                        onChange={e => this.setState({ userXMin: e.target.value })}></input><br />
                </>);
                break;
            case 3:
                answerForm = (<>
                    Maximum value of <MathComponent display={false} tex={'y='} /> <input type="number" value={this.state.userYMax} ref={this.answerForm} autoFocus
                        onChange={e => this.setState({ userYMax: e.target.value })}></input><br />
                </>);
                break;
            case 4:
                answerForm = (<>
                    Minimum value of <MathComponent display={false} tex={'y='} /> <input type="number" value={this.state.userYMin} ref={this.answerForm} autoFocus
                        onChange={e => this.setState({ userYMin: e.target.value })}></input><br />
                </>);
                break;
            default:
        }
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

export default Quadratic_Diophantine_Equations_Simple_Square_Type;
