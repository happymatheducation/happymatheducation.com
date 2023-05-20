import { Component } from "react";
import { MathComponent } from "mathjax-react";
import JSConfetti from 'js-confetti'

class ImmediateMultipleChoice extends Component {

    /* props:
     * generateQuestion() = <MathComponent tex={question} />; (Callback)
     * allChoices = [{tex:'',value:''}, {tex:'',value:''}];
     * correctChoiceID = 0;
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
        correctChoiceButton.className += " correctchoice";
        if (userChoiceID === this.props.correctChoiceID) {
            this.setState({ correctNumber: this.state.correctNumber + 1 });
            this.setState({ correctMessage: <span style={{ fontSize: '20px', color: '#007700' }}>Correct! Great job!!!</span> });
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti()
        } else {
            let userChoiceButton = document.getElementById(userChoiceID);
            userChoiceButton.className += " wrongchoice";
/*            let correctAnswer = <MathComponent
                display={false}
                tex={this.props.allChoices[this.props.correctChoiceID].tex}
            />;
            this.setState({ correctMessage: <span style={{ color: '#990000' }}>Incorrect! The correct answer is {correctAnswer}.</span> });
*/        }
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
                    onClick={() => { !this.state.paused ? this.checkAnswer(i) : void (0) }}>
                    <MathComponent tex={allChoices[i].tex} display={false} />
                </button>);
            if (this.props.verticalAlignChoices) { choiceButtons.push(<br key={i+100} />) };
        }
        choiceButtons.pop();


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
                    {this.state.currentQuestion}
                    <br />
                    {!this.state.started &&
                        <button className="btn" onClick={this.start}>Start</button>
                    }

                    {this.state.started &&
                        <>{choiceButtons}<br />
                        {/*this.state.correctMessage*/}
                        <button className="btn" onClick={this.next}
                            style={this.state.paused ? {} : { visibility: 'hidden' }}
                            >Next</button>
                        </>
                    }

                </div>
            </div>
        )
    }
}

export default ImmediateMultipleChoice;
