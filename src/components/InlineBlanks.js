import { Component } from "react";
import JSConfetti from 'js-confetti'

class FillBlanks extends Component {
    /* props:
    *  (Callback) checkAnswer() = {boolean | string} true if the answer is correct, or a string if the answer is incorrect
    *  (Callback) generateQuestion() = {Component | string} displaying the question
    *  answerForm: Component |
    *  (Callback) clearAnswerForm
    */
    state = {
        attemptedNumber: 0,
        correctNumber: 0,
        started: false,
        paused: false,

        currentQuestion: <>The question will appear here. Click start to begin! < br /><br /></>,
        correctMessage: "",

        timeElapsed: 0,
    };

    start = () => {
        this.setState({ started: true, currentQuestion: this.props.generateQuestion() });
        setInterval(() => this.setState({ timeElapsed: this.state.timeElapsed + 1 }), 1000);
    }

    checkAnswer = () => {
        const message = this.props.checkAnswer();
        this.setState({ attemptedNumber: this.state.attemptedNumber + 1 });
        if (message === true) {
            this.setState({ correctNumber: this.state.correctNumber + 1 });
            this.setState({ correctMessage: <span style={{ fontSize: '20px', color: '#007700' }}>Correct! Great job!!!</span> });
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti()
        } else {
            this.setState({ correctMessage: <span style={{ color: '#990000' }}>{message}</span> });
        }
        this.setState({ paused: true });
    }

    next = () => {
        this.setState({
            paused: false,
            currentQuestion: this.props.generateQuestion(),
            correctMessage: ""
        });
        this.props.clearAnswerForm();
    }

    render = () => {
        return (
            <div className='practicequiz' >
                <div className='practiceheader'>
                    <span id="correctNumber" className='practiceheaderleft'>Correct: {this.state.correctNumber + '/' + this.state.attemptedNumber} </span>
                    <span id="timer" className='practiceheaderright'>
                        Time: {Math.floor(this.state.timeElapsed / 3600) + 'h '
                            + Math.floor(this.state.timeElapsed / 60) % 60 + 'm '
                            + this.state.timeElapsed % 60 + 's'}
                    </span>
                </div>

                <div className='practicebody'>
                    <>{this.state.currentQuestion}</>
                    <div>
                        <>{this.state.started && this.props.answerForm}</>
                        <>{this.state.correctMessage}</>
                        <br />
                        {
                            this.state.paused &&
                            (<>
                                <button className="btn" onClick={this.next}>Next</button>
                            </>)
                        }

                        {
                            !this.state.paused &&
                            (<>
                                {this.state.started ?
                                    <button className="btn" onClick={this.checkAnswer}>Check Answer</button>
                                    :
                                    <button className="btn" onClick={this.start}>Start</button>
                                }
                            </>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FillBlanks;
