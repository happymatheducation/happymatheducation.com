import { Component } from "react";

/**
 * @callback checkAnswerCallback
 * @return {boolean | string} true if the answer is correct, or a string if the answer is incorrect
 */

/**
 * @callback generateQuestionCallback
 * @return {Component | string} a component displaying the checkAnswer question
 */

class FillBlanks extends Component {
    /**
     *
     * @param {component: Component |
     * checkAnswer: checkAnswerCallback |
     * generateQuestion: generateQuestionCallback |
     * answerForm: Component |
     * clearAnswerForm: Function} props Properties for the practice quiz, including callbacks for running the quiz
     */
    state = {
        attemptedNumber: 0,
        correctNumber: 0,
        started: false,
        paused: false,

        currentQuestion: "The question will appear here. Click start to begin!",
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
            this.setState({ correctMessage: <span style={{ fontSize: '20px', color: '#007700'}}>Correct! Great job!!!</span> });
        } else {
            this.setState({ correctMessage: <span style={{ color:'#990000'} }>{message}</span> });
        }
        this.setState({ paused: true });
    }

    next = () => {
        this.props.clearAnswerForm();
        this.setState({
            paused: false,
            currentQuestion: this.props.generateQuestion(),
            correctMessage: ""
        });
    }

    render = () => {
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
                        <>{this.state.currentQuestion}</>
                        <>{this.state.correctMessage}</>
                        <br />
                        <br />
                        <>{this.state.started && this.props.answerForm}</>

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
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default FillBlanks;
