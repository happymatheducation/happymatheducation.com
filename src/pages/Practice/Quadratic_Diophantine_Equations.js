import { Component } from "react";
import PracticeQuiz from "../../components/PracticeQuiz";
import { MathComponent } from "mathjax-react";

class Quadratic_Diophantine_Equations extends Component {

  state = {
      correctPosIntSolns: 0,
      correctIntSolns: 0,
      userPosIntSolns: "",
      userIntSolns: "",
      allSolns: [],
  };

    linearTerm(rawCoef, variable) {
        let linearTerm = "";
        const coef = parseInt(rawCoef);
        if (coef > 1) {
            linearTerm = `+${coef}` + variable
        } else if (coef === 1) {
            linearTerm = `+` + variable
        } else if (coef === 0) {
            linearTerm = ``
        } else if (coef === -1) {
            linearTerm = `-` + variable
        } else {
            linearTerm = `${coef}` + variable
        };
        return linearTerm;
    }

    generateQuestion = () => {
        // ab + ua + vb = t
        // (a+v)(b+u) = t + uv
        // p = t + uv
        // (a+v)(b+u) = p
        let allSolns = [];

        const twos = Math.floor(Math.random() * 3)
        const threes = Math.floor(Math.random() * 3);
        const fives = Math.floor(Math.random() * 2);
        const sevens = (twos + threes + fives) < 3 ? 1 : 0;
        const p = 2 ** twos * 3 ** threes * 5 ** fives * 7 ** sevens;

        const u = Math.floor(Math.random() * 13) - 6;
        const v = Math.floor(Math.random() * 13) - 6;

        let correctPosIntSolns = 0;
        for (let i = 0; i <= twos; i++) {
            for (let j = 0; j <= threes; j++) {
                for (let k = 0; k <= fives; k++) {
                    for (let l = 0; l <= sevens; l++) {
                        const aPlusV = 2 ** i * 3 ** j * 5 ** k * 7 ** l;
                        const bPlusU = p / aPlusV;
                        allSolns.push({ a: aPlusV - v, b: bPlusU - u });
                        allSolns.push({ a: -aPlusV - v, b: -bPlusU - u });
                        aPlusV - v > 0 && bPlusU - u > 0 && correctPosIntSolns++;
                    }
                }
            }
        }
        this.setState({
            allSolns: allSolns,
            correctPosIntSolns: correctPosIntSolns,
            correctIntSolns: allSolns.length
        });

    const t = p - u * v;

      const term1 = "ab";
      let term2 = this.linearTerm(u, "a");
      let term3 = this.linearTerm(v, "b");
    return (<MathComponent tex={`${term1}${term2}${term3} = ${t}`} />);
  }

  clearAnswerForm = () => {
    this.setState({ userPosIntSolns: '', userIntSolns: '' });
  }

  checkAnswer = () => {
    if (parseInt(this.state.userPosIntSolns) === this.state.correctPosIntSolns && parseInt(this.state.correctIntSolns) === this.state.correctIntSolns) {
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
            Number of positive integer solutions = <input type="number" value={this.state.userPosIntSolns}
              onChange={e => this.setState({ userPosIntSolns: e.target.value })}></input><br/>
            Number of integer solutions = <input type="number" value={this.state.userIntSolns}
              onChange={e => this.setState({ userIntSolns: e.target.value })}></input><br/><br/>
            </>
        )}
      />
    );
  }
}

export default Quadratic_Diophantine_Equations;
