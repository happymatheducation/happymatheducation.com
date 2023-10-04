import React, { Component } from "react";
import InlineBlanks from "../../components/InlineBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class FractionReduction extends Component {

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctNumerator: 0,
        correctDenominator: 0,
        userNumerator: '',
        userDenominator: '',
        question: '',
    };

    generateQuestion = () => {
        let denominator = 1;
        let numerator = 1;
        while (numerator % denominator === 0) {
            denominator = myMath.randomInteger(2, 10);
            numerator = myMath.randomInteger(2, 10);
        }
        let factor = myMath.randomInteger(2, 10);
        denominator = denominator * factor;
        numerator = numerator * factor;

        let [reducedNumerator, reducedDenominator] = myMath.reduceFraction(numerator, denominator);
        let question = '{' + numerator + '\\over' + denominator + '} =~';

        this.setState({
            correctNumerator: reducedNumerator,
            correctDenominator: reducedDenominator,
            question: question,
        });

        return null;
    }

    clearAnswerForm = () => {
        this.setState({ userDenominator: '', userNumerator: '' });
        this.answerForm.current.focus();
    }

    checkAnswer = () => {
        const correctNumerator = this.state.correctNumerator;
        const correctDenominator = this.state.correctDenominator;
        const userNumerator = parseInt(this.state.userNumerator);
        const userDenominator = parseInt(this.state.userDenominator);
        if (userNumerator === correctNumerator && userDenominator === correctDenominator) {
            return true;
        } else {
            return <MathComponent tex={'\\text{Incorrect! The correct answer is} {' + correctNumerator + '\\over' + correctDenominator + '}'} display={false} />;
        }
    }

    render() {
        return (
            <InlineBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={(
                    <>
                        <MathComponent tex={'\\huge' + this.state.question} display={false}/>
                        <table className="inlineFraction">
                            <thead>
                                <tr>
                                    <th className="numerator">
                                        <input type="number" value={this.state.userNumerator} ref={this.answerForm} autoFocus
                                            onChange={e => this.setState({ userNumerator: e.target.value })}></input>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <input type="number" value={this.state.userDenominator}
                                            onChange={e => this.setState({ userDenominator: e.target.value })}></input>
                                    </th>
                                </tr>
                            </thead>
                        </table><br/>
                    </>
                )}
            />
        );
    }
}

export default FractionReduction;
