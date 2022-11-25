import { Component } from "react";

/**
 * @callback checkAnswerCallback
 * @return {boolean | string} true if the answer is correct, or a string if the answer is incorrect
 */

/**
 * @callback generateQuestionCallback
 * @return {Component | string} a component displaying the checkAnswer question
 */

class PracticeQuiz extends Component {
  /**
   *
   * @param {component: Component |
   * checkAnswer: checkAnswerCallback |
   * generateQuestion: generateQuestionCallback |
   * answerForm: Component |
   * clearAnswerForm: Function} props Properties for the practice quiz, including callbacks for running the quiz
   */
  constructor(props) {
    super(props);
  }

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
    this.state.attemptedNumber++;
    if (message === true) {
      this.state.correctNumber++;
      this.state.correctMessage = "Correct!";
    } else {
      this.setState({ correctMessage: message });
    }
    this.props.clearAnswerForm();
    this.setState({ paused: true });
  }

  next = () => {
    this.setState({
      paused: false,
      currentQuestion: this.props.generateQuestion()
    });
  }

  render = () => {
    return (
      <div style={{
        width: '70%',
        backgroundColor: '#EEFFEE',
        padding: '20px',
        margin: 'auto',
        border: '3px solid #000000'
      }}>
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
          <br/>
          <p>{this.state.currentQuestion}</p>
          <br/>
          {
            this.state.paused &&
            (<>
              <p>{this.state.correctMessage}</p>
              <br/>
              <button onClick={this.next}>Next</button>
            </>)
          }

          {
            !this.state.paused &&
            (<>

              {this.state.started && this.props.answerForm}

              {this.state.started ?
                <button className="checkAnswerButton" onClick={this.checkAnswer}>Check Answer</button>
                :
                <button className="startButton" onClick={this.start}>Start</button>
              }
            </>)
          }
        </div>
      </div>


    )
  }
}

export default PracticeQuiz;
