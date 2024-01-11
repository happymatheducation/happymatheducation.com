import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class SimpleSystemOfLinearEquations extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctX: '',
        correctY: '',
        userX: '',
        userY: '',
    };

    equationString = (a, b, p) => {
        //ax+by=p
        let equationString = '';
        if (a !== 1) { equationString += a };
        equationString += 'x';
        if (b === 1) { equationString += '+y' }
        else if (b < -1) { equationString += b + 'y' }
        else if (b === -1) { equationString += '-y' }
        else { equationString += '+' + b + 'y' }
        equationString += '=' + p
        return equationString
    }

    generateQuestion = () => {
        //ax+by=p
        //cx+dy=q

        let x = myMath.randomInteger(0, 5);
        let y = myMath.randomInteger(1, 9);
        let a = myMath.randomInteger(1, 5);
        let b = myMath.randomInteger(1, 3);
        b = Math.random() > 0.5 ? b : -b;
        let c = myMath.randomInteger(1, 5);
        let d = myMath.randomInteger(1, 3);
        d = Math.random() > 0.5 ? d : -d;
        if (a*d === b*c) { d=-d }

        let p = a * x + b * y;
        let q = c * x + d * y;

        let equation1 = this.equationString(a, b, p);
        let equation2 = this.equationString(c, d, q);

        this.setState({ correctY: y, correctX: x });

        return (<>Solve <MathComponent display={false}
            tex={`
            \\left\\{
            \\begin{array}{ll}
            ${equation1} \\\\
            ${equation2}
            \\end{array}
            \\right.
            `} /></>);
    }

    clearAnswerForm = () => {
        this.setState({
            userX: '',
            userY: '',
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctX = this.state.correctX;
        let correctY = this.state.correctY;
        let userX = parseInt(this.state.userX);
        let userY = parseInt(this.state.userY);
        if (userX === correctX
            && userY === correctY) {
            return true;
        }
        return (
            <MathComponent display={false}
                tex={`\\text{Incorrect! Answer: }x=${correctX}, y= ${correctY}`} />
        );
    }

    render() {

        let answerForm = (<>
            <MathComponent display={false} tex={`x=`} />
            <input type="number" value={this.state.userX} ref={this.answerForm} autoFocus
                onChange={e => this.setState({ userX: e.target.value })}></input><br/>
            <MathComponent display={false} tex={`y=`} />
            <input type="number" value={this.state.userY}
                onChange={e => this.setState({ userY: e.target.value })}></input>
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

export default SimpleSystemOfLinearEquations;
