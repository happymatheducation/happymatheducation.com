import { Component } from "react";
import PracticeQuiz from "../../components/PracticeQuiz";
import { MathComponent } from "mathjax-react";

class Quadratic_Diophantine_Equations extends Component {

  state = {
    correctPosIntSolns: 0,
    correctIntSolns: 0,
    posIntSolns: '',
    intSolns: '',
  };

  calculateCorrectPosIntSolns(u, v, p, twos, threes, fives, sevens) {
    let ans = 0;
    for (let i = 0; i <= twos; i++) {
      for (let j = 0; j <= threes; j++) {
        for (let k = 0; k <= fives; k++) {
          for (let l = 0; l <= sevens; l++) {
            const aPlusV = 2 ** i * 3 ** j * 5 ** k * 7 ** l;
            const bPlusU = p / aPlusV;
            if (aPlusV - v > 0 && bPlusU - u > 0) {
              ans++;
            }
          }
        }
      }
    }
    return ans;
  }

  generateQuestion = () => {
    // ab + ua + vb = t
    // (a+v)(b+u) = t + uv
    // p = t + uv
    // (a+v)(b+u) = p

    const twos = Math.floor(Math.random() * 3)
    const threes = Math.floor(Math.random() * 3);
    const fives = Math.floor(Math.random() * 2);
    const sevens = (twos + threes + fives) < 3 ? 1 : 0;
    const p = 2 ** twos * 3 ** threes * 5 ** fives * 7 ** sevens;

    const u = Math.floor(Math.random() * 12) - 4;
    const v = Math.floor(Math.random() * 12) - 4;

    this.state.correctIntSolns = (twos + 1) * (threes + 1) * (fives + 1) * (sevens + 1) * 2;
    this.state.correctPosIntSolns = this.calculateCorrectPosIntSolns(u, v, p, twos, threes, fives, sevens);

    const t = p - u * v;

    const term1 = "ab";
    let term2 = "";
    let term3 = "";
    if (u != 0) {
      term2 = `${u > 0 ? "+" : ""}${u}a`;
    }
    if (v != 0) {
      term3 = `${v > 0 ? "+" : ""}${v}b`;
    }
    return (<MathComponent tex={`${term1}${term2}${term3} = ${t}`} />);
  }

  clearAnswerForm = () => {
    this.setState({ posIntSolns: '', intSolns: '' });
  }

  checkAnswer = () => {
    if (parseInt(this.state.posIntSolns) === this.state.correctPosIntSolns && parseInt(this.state.intSolns) === this.state.correctIntSolns) {
      return true;
    } else {
      return `Incorrect! The correct answers are ${this.state.correctPosIntSolns} and ${this.state.correctIntSolns}.`;
    }
  }

  render() {
    return (
      <PracticeQuiz
        checkAnswer={this.checkAnswer}
        generateQuestion={this.generateQuestion}

        clearAnswerForm={this.clearAnswerForm}
        answerForm={(
          <>
            # of positive integer solutions=<input type="number" value={this.state.posIntSolns}
              onChange={e => this.setState({ posIntSolns: e.target.value })}></input><br></br>
            # of integer solutions = <input type="number" value={this.state.intSolns}
              onChange={e => this.setState({ intSolns: e.target.value })}></input><br></br><br></br>
          </>
        )}
      />
    );
  }
}

export default Quadratic_Diophantine_Equations;
