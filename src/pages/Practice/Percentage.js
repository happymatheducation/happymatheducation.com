import React, { Component } from "react";
import InlineBlanks from "../../components/InlineBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath"; //example [{prime:2,power:3}, {prime:3, power:1}];

class Percentage extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        p: '',
        part: '',
        total: '',
    };

    generateQuestion = () => {

        // part is p % of total;

        let p = myMath.randomInteger(1, 100);
        if (p > 10 && p < 30) { p = 5 * Math.round(p / 5) }
        else if (p >= 30) { p = 10 * Math.round(p / 10) }

        let [reducedNum, reducedDenom] = myMath.reduceFraction(p, 100);
        let total = reducedDenom * myMath.randomInteger(1, 10);
        let part = Math.round(total / 100 * p);

        this.setState({ p: p, total: total, part: part });

        let problemTypeID = myMath.randomInteger(1, 3);
        switch (problemTypeID) {
            case 1:
                this.setState({ correctAnswer:p });
                break;
            case 2:
                this.setState({ correctAnswer: part });
                break;
            case 3:
                this.setState({ correctAnswer: total });
                break;
            default:
                break;
        }

        this.setState({ problemTypeID: problemTypeID });

        return null;
    }

    clearAnswerForm = () => {
        this.setState({
            userAnswer: ''
        });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        let correctAnswer;
        if (parseInt(this.state.userAnswer) === this.state.correctAnswer) {
            return true;
        } else {
            correctAnswer = this.state.correctAnswer;
        }
        return <MathComponent display={false}
            tex={String.raw`\text{Incorrect! Answer: }${correctAnswer}.~`} />;
    }

    render() {

        let answerForm
        switch (this.state.problemTypeID) {
            case 1:
                answerForm = (<>
                    <MathComponent display={false} tex={this.state.part + '\\text{ is }'} /><input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
                        onChange={e => this.setState({ userAnswer: e.target.value })}></input>
                    <MathComponent display={false} tex={'\\text{% of }' + this.state.total} />
                    <br />
                </>);
                break;
            case 2:
                answerForm = (<>
                    <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
                        onChange={e => this.setState({ userAnswer: e.target.value })}></input>
                    <MathComponent display={false} tex={'\\text{ is ' + this.state.p + '% of }' + this.state.total} />
                    <br />
                </>);
                break;
            case 3:
                answerForm = (<>
                    <MathComponent display={false} tex={this.state.part + '\\text{ is }' + this.state.p + '\\text{% of }'} /><input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus
                        onChange={e => this.setState({ userAnswer: e.target.value })}></input>
                    <br />
                </>);
                break;
            default:
                break;
        }           
        return (
            <InlineBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={answerForm}
            />
        );
    }
}

export default Percentage;
