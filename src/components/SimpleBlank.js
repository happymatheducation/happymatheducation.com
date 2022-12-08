import React, { Component } from "react";
import { MathComponent } from "mathjax-react";

class SimpleBlank extends Component {

    /* props:
     * generateQuestion() = {question:'', pointsPerQuestion:0, correctAnswer:0} (Callback)
     * formSize = '0px' (example: '40px')
     * texSize = '' (example:'\Huge')
     */

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    static defaultProps = {
        texSize: ''
    }

    state = {
        score: 0,
        started: false,
        paused: false,

        correctMessage: "",
        question: '',
        correctAnswer: '',
        pointsPerQuestion: '',
        userAnswer: ''
    };

    grabQuestion = () => {
        const currentQuestion = this.props.generateQuestion();
        this.setState({
            question: currentQuestion.question,
            pointsPerQuestion: currentQuestion.pointsPerQuestion,
            correctAnswer: currentQuestion.correctAnswer
        });
    }

    start = () => {
        this.grabQuestion();
        this.setState({ started: true });
    }

    checkAnswer = () => {
        const userAnswer = parseInt(this.state.userAnswer);
        if (userAnswer === this.state.correctAnswer) {
            const pointsPerQuestion = this.state.pointsPerQuestion;
            this.setState({ score: this.state.score + pointsPerQuestion });
            this.setState({ correctMessage: <span style={{ fontSize: '20px', color: '#007700' }}>Correct! Great job! +{pointsPerQuestion} points!</span> });
        } else {
            const message = `Incorrect! The correct answer is ${this.state.correctAnswer}.`;
            this.setState({ correctMessage: <span style={{ color: '#990000' }}>{message}</span> });
        }
        this.setState({ paused: true });
    }

    next = () => {
        this.grabQuestion();
        this.setState({ userAnswer: '' });
        this.setState({
            paused: false,
            correctMessage: ""
        });
        this.answerForm.current.focus(); 
    }

    render = () => {
        return (
            <div>
                <br /><br />
                <div className='practicequiz' >
                    <div className='practiceheader'>
                        <span id="score" className="practiceheaderright" >Score: {this.state.score}</span>
                    </div>

                    <div className='practicebody'>
                        <br />
                        {!this.state.started && <p>Push "start" to begin. Have fun!</p>}
                        {this.state.started &&
                            <>
                                <MathComponent tex={this.props.texSize + this.state.question} display={false} />
                                <input
                                    ref={this.answerForm}
                                    type='number'
                                    value={this.state.userAnswer}
                                    style={{ width: '100px', fontSize: this.props.formSize }}
                                    onChange={e => this.setState({ userAnswer: e.target.value })}
                                    autoFocus>
                                </input>
                                <br /><br />
                            </>
                        }
                        {this.state.correctMessage}
                        <br />
                        <br />

                        {
                            this.state.paused &&
                            <>
                                <button className="btn" onClick={this.next}>Next</button>
                            </>
                        }

                        {
                            !this.state.paused &&
                            <>
                                {this.state.started ?
                                    <button className="btn" onClick={this.checkAnswer}>Submit</button>
                                    :
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

export default SimpleBlank;
