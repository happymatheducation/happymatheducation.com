import React, { Component } from "react";
import InlineBlanks from "../../components/InlineBlanks";
import { MathComponent } from "mathjax-react";
import myMath from "../../assets/myMath";

class FractionAdditionAndSubtraction extends Component {

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
        let sumNumerator = 1;
        let sumDenominator = 1;
        let question = '';
        let denominator1, denominator2, numerator1, numerator2;
        while (sumNumerator === sumDenominator) {
            denominator1 = myMath.randomInteger(2, 10);
            numerator1 = myMath.randomInteger(1, denominator1 - 1);
            [numerator1, denominator1] = myMath.reduceFraction(numerator1, denominator1);
            denominator2 = myMath.randomInteger(2, 10);
            numerator2 = myMath.randomInteger(1, denominator2 - 1);
            [numerator2, denominator2] = myMath.reduceFraction(numerator2, denominator2);

            sumDenominator = denominator1 * denominator2;
            sumNumerator = numerator1 * denominator2 + numerator2 * denominator1;
        }
        [sumNumerator, sumDenominator] = myMath.reduceFraction(sumNumerator, sumDenominator);
        
        if (Math.random()>0.5) 
        {
            question = '{' + numerator1 + '\\over' + denominator1 + '} + { ' + numerator2 + '\\over' + denominator2 + '} =~';
            this.setState({
                correctNumerator: sumNumerator,
                correctDenominator: sumDenominator,
                question: question,
            });
        } else {
            question = '{' + sumNumerator + '\\over' + sumDenominator + '} - { ' + numerator2 + '\\over' + denominator2 + '} =~';
            this.setState({
                correctNumerator: numerator1,
                correctDenominator: denominator1,
                question: question,
            });
        }

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
                        <MathComponent tex={'\\Huge' + this.state.question} display={false}/>
                        <table className="inlineFraction">
                            <thead>
                                <tr>
                                    <th className="numerator">
                                        <input type="number" value={this.state.userNumerator} ref={this.answerForm} autoFocus
                                            style={{ fontSize: '24px' }}
                                            onChange={e => this.setState({ userNumerator: e.target.value })}></input>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <input type="number" value={this.state.userDenominator}
                                            style={{ fontSize: '24px' }}
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

export default FractionAdditionAndSubtraction;
