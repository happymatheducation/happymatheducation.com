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
      askingPosIntSolns: false,
      factoredQuestion: <MathComponent tex={ 'x^2' }/>,
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
    factored(variable, coef) {
        if (coef === 0) {
            return variable;
        } else if (coef < 0) {
            return '(' + variable + coef + ')';
        } else {
            return '(' + variable + '+' + coef + ')';
        }
    }

    generateQuestion = () => {
        // xy + ax + by = t
        // (x+b)(y+a) = t + ab
        // p = t + ab
        // (x+b)(y+a) = p
        let allSolns = [];
        let correctPosIntSolns = 0;

        const p = Math.ceil(Math.random() * 100);
        const a = Math.floor(Math.random() * 19) - 9;
        const b = Math.floor(Math.random() * 19) - 9;
        const t = p - a * b;

        for (let factorOne = 1; factorOne <= Math.sqrt(p); factorOne++) {
            let factorTwo = p / factorOne;
            if (Number.isInteger(factorTwo) ) {
                allSolns.push({ x: factorOne - b, y: factorTwo - a });
                allSolns.push({ x: -factorOne - b, y: -factorTwo - a });
                factorOne - b > 0 && factorTwo - a > 0 && correctPosIntSolns++;
                -factorOne - b > 0 && -factorTwo - a > 0 && correctPosIntSolns++;
                if (factorOne !== factorTwo) {
                    allSolns.push({ x: factorTwo - b, y: factorOne - a });
                    allSolns.push({ x: -factorTwo - b, y: -factorOne - a });
                    factorOne - a > 0 && factorTwo - b > 0 && correctPosIntSolns++;
                    -factorOne - a > 0 && -factorTwo - b > 0 && correctPosIntSolns++;
                }
            }
        }
        this.setState({
            allSolns: allSolns,
            correctPosIntSolns: correctPosIntSolns,
            correctIntSolns: allSolns.length
        });

        this.setState(Math.random() < 0.5 ? { askingPosIntSolns: true } : { askingPosIntSolns: false });

        let factoredQuestion = this.factored('x', b) + this.factored('y', a) + '=' + p;
        this.setState({ factoredQuestion: <MathComponent tex={factoredQuestion} display={false} /> });

        const term1 = "xy";
        let term2 = this.linearTerm(a, "x");
        let term3 = this.linearTerm(b, "y");
        return (<MathComponent tex={`${term1}${term2}${term3} = ${t}`} />);
  }

  clearAnswerForm = () => {
    this.setState({ userPosIntSolns: '', userIntSolns: '' });
  }

    checkAnswer = () => {
        let correctAnswer;
        if (!this.state.askingPosIntSolns) {
            if (parseInt(this.state.userIntSolns) === this.state.correctIntSolns) {
                return true;
            } else {
                correctAnswer = this.state.correctIntSolns;
            }
        } else {
            if (parseInt(this.state.userPosIntSolns) === this.state.correctPosIntSolns) {
                return true;
            } else {
                correctAnswer = this.state.correctPosIntSolns;
            }
        }
        return (<>Incorrect! Answer: {correctAnswer}. Hint: {this.state.factoredQuestion}</>);
    }

    render() {

        let answerForm;
        this.state.askingPosIntSolns ? 
        answerForm = (<>
            Number of positive integer solutions = <input type="number" value={this.state.userPosIntSolns}
                onChange={e => this.setState({ userPosIntSolns: e.target.value })}></input><br /><br />
            </>)
            :
        answerForm = (<>
                Number of integer solutions = <input type="number" value={this.state.userIntSolns}
                    onChange={e => this.setState({ userIntSolns: e.target.value })}></input><br /><br />
            </>)
    return (
      <PracticeQuiz
            checkAnswer={this.checkAnswer}
            generateQuestion={this.generateQuestion}
            clearAnswerForm={this.clearAnswerForm}
            answerForm={answerForm}
      />
    );
  }
}

export default Quadratic_Diophantine_Equations;
