import { MathComponent } from "mathjax-react";
import { Component } from "react";
import ReactDOM from 'react-dom/client';

class Quadratic_Equations extends Component {

    state = {
        x1: 0,
        x2: 0,
        correctNumber: 0,
        attemptedNumber:0,
    };

    generateQuestion = () => {

        this.state.x1 = Math.floor(Math.random() * 25) - 12;
        this.state.x2 = Math.floor(Math.random() * 25) - 12;

        const a = 1;
        const b = -a * (this.state.x1 + this.state.x2);
        const c = a * this.state.x1 * this.state.x2;

        const firstTerm = `x^2`;
        let secondTerm = '';
        let thirdTerm = '';
        let question = '';

        if (b > 1) { secondTerm = `+${b}x` }
        else if (b == 1) { secondTerm = `+x` }
        else if (b == 0) { secondTerm = `` }
        else if (b == -1) { secondTerm = `-x` }
        else { secondTerm = `${b}x` }

        if (c > 0) { thirdTerm = `+${c}` }
        else if (c == 0) { thirdTerm = `` }
        else { thirdTerm = `${c}` }

        question = firstTerm.concat(secondTerm, thirdTerm, `=0`);

        return question;
    }

    resetForm() {
        document.getElementById("submitButton").style.display = "inline";
        document.getElementById("startButton").style.display = "none";
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("correctOrNot").innerHTML = "&nbsp;";
        document.getElementById("userx1").value = "";
        document.getElementById("userx2").value = "";
    }

    checkAnsewr = () => {
        const userx1 = document.getElementById("userx1").value;
        const userx2 = document.getElementById("userx2").value;
        const x1 = this.state.x1;
        const x2 = this.state.x2;
        if ((userx1 == x1 && userx2 == x2) || (userx1 == x2 && userx2 == x1)) {
            document.getElementById("correctOrNot").innerHTML = "Correct!";
            this.setState({ correctNumber: this.state.correctNumber + 1 });
        }
        else {
            document.getElementById("correctOrNot").innerHTML = "Wrong! The answers are " + x1 + " and " + x2 + ".";
        }
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("nextButton").style.display = "inline";
        this.setState({ attemptedNumber: this.state.attemptedNumber + 1 });
    }

    render() {

        let passedTime = 0;
        let quadraticEquationReactDOMRoot;

        return (
            <>
                <br />
                <br />

                <div style={{ width: '70%', backgroundColor: '#EEFFEE', padding: '20px', margin: 'auto', border: '3px solid #000000' }}>
                    <table style={{ textAlign: 'left', borderCollapse: 'collapse' }}>
                        <tr>
                            <th style={{ textAlign: 'left' }}>Attempted:</th>
                            <td id="attemptedNumber" style={{ textAlign: 'left', width: '30%' }}>{this.state.attemptedNumber}</td>
                            <th style={{ textAlign: 'left' }}>Correct:</th>
                            <td id="correctNumber" style={{ textAlign: 'left', width: '30%' }}>{this.state.correctNumber}</td>
                            <th style={{ textAlign: 'left' }}>Time:</th>
                            <td id="timer" style={{ textAlign: 'left', width: '30%' }}>0h 0m 0s</td>
                        </tr>
                    </table>

                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }} >

                        <p id="quadraticEquation">The quadratic equation will appear here.</p>
                        <p id="correctOrNot">&nbsp;</p>

                        <br />

                        <form id="Responses">
                            <MathComponent tex={String.raw`x_1=`} display={false} /><input type="number" id="userx1"></input><br></br>
                            <MathComponent tex={String.raw`x_2=`} display={false} /><input type="number" id="userx2"></input><br></br><br></br>
                            <input id="submitButton" type="button" value="Submit" style={{ display: 'none' }} onClick={this.checkAnsewr}></input>
                            <input id="startButton" type="button" value="Start" onClick={
                                () => {
                                    quadraticEquationReactDOMRoot = ReactDOM.createRoot(document.getElementById("quadraticEquation"));
                                    quadraticEquationReactDOMRoot.render(<MathComponent tex={this.generateQuestion()} />);
                                    this.resetForm();

                                    setInterval(showTimer, 1000);
                                    function showTimer() {
                                        passedTime++;
                                        var seconds = passedTime % 60;
                                        var minutes = Math.floor(passedTime / 60) % 60;
                                        var hours = Math.floor(passedTime / 3600);
                                        document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
                                    }
                                }
                            }></input>
                            <input id="nextButton" type="button" value="Next" style={{ display: 'none' }} onClick={
                                () => {
                                    quadraticEquationReactDOMRoot = ReactDOM.createRoot(document.getElementById("quadraticEquation"));
                                    quadraticEquationReactDOMRoot.render(<MathComponent tex={this.generateQuestion()} />);
                                    this.resetForm();
                                }
                            } ></input>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
export default Quadratic_Equations;
