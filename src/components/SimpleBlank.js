import { Component } from "react";

class SimpleBlank extends Component {

    state = {
        correctNumber: 0,
        started: false,
        paused: false,

        correctMessage: "",
    };

    start = () => {
        this.props.generateQuestion();
        this.setState({ started: true });
        setInterval(() => this.setState({ timeElapsed: this.state.timeElapsed + 1 }), 1000);
    }

    checkAnswer = () => {
        let pointsPerProblem = this.props.getPoints();
        const message = this.props.checkAnswer();
        if (message === true) {
            this.setState({ correctNumber: this.state.correctNumber + pointsPerProblem });
            this.setState({ correctMessage: <span style={{ fontSize: '20px', color: '#007700' }}>Correct! Great job! +{pointsPerProblem} points!</span> });
        } else {
            this.setState({ correctMessage: <span style={{ color:'#990000'} }>{message}</span> });
        }
        this.setState({ paused: true });
    }

    next = () => {
        this.props.generateQuestion();
        this.props.clearAnswerForm();
        this.setState({
            paused: false,
            correctMessage: ""
        });
    }

    render = () => {
        return (
            <div>
                <br /><br />
                <div className='practicequiz' >
                    Score:&nbsp;<span id="correctNumber">{this.state.correctNumber}</span>

                    <div style={{ textAlign: 'center' }}>
                        <br />
                        <>{this.state.started && this.props.answerForm}</>
                        <>{this.state.correctMessage}</>
                        <br />
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
                                    <button className="btn" onClick={this.checkAnswer}>Submit</button>
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

export default SimpleBlank;
