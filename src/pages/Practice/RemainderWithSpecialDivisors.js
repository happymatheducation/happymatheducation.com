import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class RemainderWithSpecialDivisors extends Component {

    state = {
        divisors: [],
        correctAnswer: [],
        userAnswer: [],
    };

    generateQuestion = () => {
        const divisors = [2, 3, 4, 5, 9, 10, 11, 25];
        const dividend = myMath.randomInteger(100, 9999999);
        const remainders = divisors.map(divisor => dividend % divisor);
        this.setState({
            divisors: divisors,
            correctAnswer: remainders,
        });
        return <MathComponent display={false} tex={'\\Large \\text{For }' + dividend} />;
    }

    clearAnswerForm = () => {
        let empty = this.state.correctAnswer.map(e=>'');
        this.setState({
            userAnswer: empty,
        });
        document.getElementById('correctAnswer').className = 'invisible';
        for (let i = 0; i < empty.length; i++) {
            document.getElementById('input' + i).className = '';
        }
    }

    checkAnswer = () => {
        let correct = true;
        let correctAnswer = this.state.correctAnswer;
        let userAnswer = this.state.userAnswer;

        for (let i = 0; i < correctAnswer.length; i++) {
            let currentInput = document.getElementById('input' + i);
            if (parseInt(userAnswer[i]) === correctAnswer[i]) {
                currentInput.className = 'correct';
            } else {
                currentInput.className = 'wrong';
                correct = false;
            }
        }
        if (correct) { return true; }
        document.getElementById('correctAnswer').className = '';
        return (
            <MathComponent display={false}
                tex={`\\text{Incorrect!}`} />
        );
    }

    render() {
        let divisors = this.state.divisors;
        let correctAnswer = this.state.correctAnswer;
        let userAnswer = divisors.map(
            (value, i) => <td><input type="number" value={this.state.userAnswer[i]} key={i} id={'input' + i}
                onChange={
                    e => {
                        let userAnswer = this.state.userAnswer;
                        userAnswer[i] = e.target.value;
                        this.setState({ userAnswer: userAnswer });
                    }
                } /></td>)
        let divisorsInTable = divisors.map((e, i) => <td key={i}>{e}</td>);
        let correctAnswerInTable = correctAnswer.map((e, i) => <td key={i}>{e}</td>);

        let answerForm = <table className='remainderTable'>
            <tbody>
                <tr>
                    <td>Divisor</td>
                    {divisorsInTable}
                </tr>
                <tr>
                    <td>Remainder</td>
                    {userAnswer}
                </tr>
                <tr id='correctAnswer' className='invisible'>
                    <td>Answers</td>
                    {correctAnswerInTable}
                </tr>
            </tbody>
        </table>

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

export default RemainderWithSpecialDivisors;
