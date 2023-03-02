import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class StarsAndBars extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        primeFactorizationString: '',
    };

    generateQuestion = () => {
        // solution: n choose k;
        // 4 <= n <= 10; 2 <= k <= n-2;
        // a+b+c ~ a+b+c+d+e+f+g+h+i

        const n = myMath.randomInteger(4, 10);
        const k = myMath.randomInteger(2, n - 2);
        const allVariables = 'abcdefghi';
        let questionString = '';
        let domainString = '';
        let domainMin = [];
        let i, currentMin;
        for (i = 0; i < k + 1; i++) {
            questionString += allVariables[i];
            questionString += i === k ? '' : '+'
            currentMin = myMath.randomInteger(-1, 3);
            domainString += allVariables[i] + '\\geq' + currentMin;
            domainString += i === k ? '' : ',~'
            domainMin.push(currentMin);
        };
        let m = n + myMath.sumArray(domainMin) - k ; // a+b+...= m;
        questionString += '=' + m;

        let correctAnswer = myMath.binomial(n, k);

        this.setState({
            correctAnswer: correctAnswer,
        })

        return (<>How many integer solutions?<br />
            <MathComponent display={false} tex={questionString} /><br />
            <MathComponent display={false} tex={domainString} /></>);
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
        return (
            <MathComponent display={false} tex={String.raw`\text{Incorrect! Answer: }${correctAnswer}.~`} />
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

export default StarsAndBars;
