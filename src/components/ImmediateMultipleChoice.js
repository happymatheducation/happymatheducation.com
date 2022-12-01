import { Component } from "react";
import { MathComponent } from "mathjax-react";

/**
 * @callback checkAnswerCallback
 * @return {boolean | string} true if the answer is correct, or a string if the answer is incorrect
 */

/**
 * @callback generateQuestionCallback
 * @return {Component | string} a component displaying the checkAnswer question
 */

class ImmediateMultipleChoice extends Component {
    /**
     *
     * @param {component: Component |
     * userChoiceID: userChoiceIDCallback |
     * clearForm: clearFormCallback |
     * generateQuestion: generateQuestionCallback |
     * checkAnswer: checkAnswerCallback |
     * answerForm: Component} props Properties for the practice quiz, including callbacks for running the quiz
     */
    state = {
        attemptedNumber: 0,
        correctNumber: 0,
        started: false,
        paused: false,

        currentQuestion: "The question will appear here. Click start to begin!",
        correctMessage: "",

        userChoiceID: '',

        timeElapsed: 0,
    };

    start = () => {
        this.setState({ started: true, currentQuestion: this.props.generateQuestion() });
        setInterval(() => this.setState({ timeElapsed: this.state.timeElapsed + 1 }), 1000);
    }

    checkAnswer = (userChoiceID) => {
        this.setState({ attemptedNumber: this.state.attemptedNumber + 1 });
        this.setState({ userChoiceID: userChoiceID });
        let correctChoiceButton = document.getElementById(this.props.correctChoiceID);
        correctChoiceButton.className = "correctchoice";
        if (userChoiceID === this.props.correctChoiceID) {
            this.setState({ correctNumber: this.state.correctNumber + 1 });
            this.setState({ correctMessage: <span style={{ fontSize: '20px', color: '#007700' }}>Correct! Great job!!!</span> });
        } else {
            let correctAnswer = <MathComponent
                display={false}
                tex={this.props.allChoices[this.props.correctChoiceID].tex}
            />;
            let userChoiceButton = document.getElementById(userChoiceID);
            userChoiceButton.className = "wrongchoice";
            this.setState({ correctMessage: <span style={{ color: '#990000' }}>Incorrect! The correct answer is {correctAnswer}.</span> });
        }
        this.setState({ paused: true });
    }

    clearAnswerForm = () => {
        let correctChoiceButton = document.getElementById(this.props.correctChoiceID);
        correctChoiceButton.className = "choices";
        let userChoiceButton = document.getElementById(this.state.userChoiceID);
        userChoiceButton.className = "choices";
        this.setState({
            userChoiceID: '',
        });
    }

    next = () => {
        this.clearAnswerForm();
        this.setState({
            paused: false,
            currentQuestion: this.props.generateQuestion(),
            correctMessage: ""
        });
    }

    render = () => {
        let choiceButtons = [];
        let allChoices = this.props.allChoices;
        for (let i = 0; i < allChoices.length; i++) {
            choiceButtons.push(
                <button key={i} id={i} name='choices' className='choices'
                    onClick={() => { this.checkAnswer(i) }}>
                    <MathComponent tex={allChoices[i].tex} display={false} />
                </button>);
        }

        return (
            <div>
                <br /><br />
                <div className='practicequiz' >
                    {/* Header */}
                    <table style={{ textAlign: 'left', borderCollapse: 'collapse' }}>
                        <tbody>
                            <tr>
                                <th style={{ textAlign: 'left' }}>Attempted:&nbsp;</th>
                                <td id="attemptedNumber" style={{ textAlign: 'left', width: '30%' }}>{this.state.attemptedNumber}</td>

                                <th style={{ textAlign: 'left' }}>Correct:&nbsp;</th>
                                <td id="correctNumber" style={{ textAlign: 'left', width: '30%' }}>{this.state.correctNumber}</td>

                                <th style={{ textAlign: 'left' }}>Time:&nbsp;</th>
                                <td id="timer" style={{ textAlign: 'left', width: '30%' }}>
                                    {Math.floor(this.state.timeElapsed / 3600)}h&nbsp;
                                    {Math.floor(this.state.timeElapsed / 60) % 60}m&nbsp;
                                    {this.state.timeElapsed % 60}s&nbsp;
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ textAlign: 'center' }}>
                        <br />
                        {this.state.currentQuestion}
                        {this.state.correctMessage}
                        <br />
                        <br />
                        {this.state.started && <>{choiceButtons}<br /><br /></>}

                        {this.state.paused && <button className="btn" onClick={this.next}>Next</button>}

                        {!this.state.paused &&
                            <>
                            {!this.state.started &&
                                <button className="btn" onClick={this.start}>Start</button>
                                }
                            </>
                        }
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default ImmediateMultipleChoice;
