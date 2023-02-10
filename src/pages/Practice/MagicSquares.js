import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class MagicSquares extends Component {

    state = {
        given: [false, false, false, false, false, false, false, false, false],
        correctAnswer: ['', '', '', '', '', '', '', '', '',],
        userAnswer: ['', '', '', '', '', '', '', '', '',],
    };

    generateQuestion = () => {

        let allIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
        let givenIndex = allIndex.slice(0, 3);
        while (givenIndex.every(element => [1, 2, 3].includes(element))
            || givenIndex.every(element => [4, 5, 6].includes(element))
            || givenIndex.every(element => [7, 8, 9].includes(element))
            || givenIndex.every(element => [1, 4, 7].includes(element))
            || givenIndex.every(element => [2, 5, 8].includes(element))
            || givenIndex.every(element => [3, 6, 9].includes(element))
            || givenIndex.every(element => [1, 5, 9].includes(element))
            || givenIndex.every(element => [3, 5, 7].includes(element))
        ) {
            allIndex = allIndex.sort(() => Math.random() - 0.5);
            givenIndex = allIndex.slice(0, 3);
        };

        let given = [false, false, false, false, false, false, false, false, false];
        givenIndex.forEach(element => given[element - 1] = true);

        let a, b, c;
        let d, e, f;
        let g, h, i;
        e = myMath.randomInteger(5, 50);
        a = myMath.randomInteger(0, 2 * e);
        c = myMath.randomInteger(0, 2 * e);
        i = 2 * e - a;
        g = 2 * e - c;
        b = g + i - e;
        d = c + i - e;
        f = a + g - e;
        h = a + c - e;
        
        this.setState({
            correctAnswer: [a, b, c, d, e, f, g, h, i],
            given: given,
        });

        return ('The sum of each row, column, and diagonal is the same. Please complete the grid.');
    }

    clearAnswerForm = () => {
        let givens = this.state.given;
        for (let i = 0; i < givens.length; i++) {
            if (!givens[i]) {
                document.getElementById('input' + i).className='';
            }
        }
        this.setState({
            given: [false, false, false, false, false, false, false, false, false],
            userAnswer: ['', '', '', '', '', '', '', '', '',],
        });
        document.getElementById('correctAnswer').className = 'invisible';
        
    }

    checkAnswer = () => {
        let givens = this.state.given;
        let correct = true;
        let currentInput;
        for (let i = 0; i < givens.length; i++) {
            if (!givens[i]) {
                currentInput = document.getElementById('input' + i);
                if (this.state.correctAnswer[i] === parseInt(this.state.userAnswer[i])) {
                    currentInput.className = 'correct';
                }
                else {
                    currentInput.className = 'wrong';
                    correct = false;
                }
            }
        }
        if (correct) { return true };

        document.getElementById('correctAnswer').className = 'rightSquare';
        return (
            <MathComponent display={false}
                tex={`\\text{Incorrect!}`} />
        );
    }

    render() {
        let cells = this.state.given.map(
            (value, i) =>
            (value ? this.state.correctAnswer[i]
                : <input type="text" value={this.state.userAnswer[i]} key={i} id={'input'+i}
                    onChange={
                        e => {
                            let userAnswer = this.state.userAnswer;
                            userAnswer[i] = e.target.value;
                            this.setState({ userAnswer: userAnswer });
                        }
                    } />)
        )
        let correctAnswer = this.state.correctAnswer;

        let answerForm = <div className='magicSquares'>
            <table className='leftSquare'>
                <tbody>
                    <tr>
                        <td>{cells[0]}</td><td>{cells[1]}</td><td>{cells[2]}</td>
                    </tr>
                    <tr>
                        <td>{cells[3]}</td><td>{cells[4]}</td><td>{cells[5]}</td>
                    </tr>
                    <tr>
                        <td>{cells[6]}</td><td>{cells[7]}</td><td>{cells[8]}</td>
                    </tr>
                </tbody>
            </table>
            <table className='invisible' id='correctAnswer'>
                <tbody>
                    <tr>
                        <td>{correctAnswer[0]}</td><td>{correctAnswer[1]}</td><td>{correctAnswer[2]}</td>
                    </tr>
                    <tr>
                        <td>{correctAnswer[3]}</td><td>{correctAnswer[4]}</td><td>{correctAnswer[5]}</td>
                    </tr>
                    <tr>
                        <td>{correctAnswer[6]}</td><td>{correctAnswer[7]}</td><td>{correctAnswer[8]}</td>
                    </tr>
                </tbody>
            </table>
        </div>;
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

export default MagicSquares;
