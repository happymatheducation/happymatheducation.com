import { MathComponent } from "mathjax-react";
import ReactDOM from 'react-dom';

let passedTime = 0;

function Quadratic_Equations() {

    let x1;
    let x2;
    let a = 1;
    let b;
    let c;
    let firstTerm;
    let secondTerm = '';
    let thirdTerm = '';
    let question;
    let userx1;
    let userx2;

    return (
        <>
            <div style={{ width: '70%', backgroundColor: '#EEFFEE', padding: '20px', margin: 'auto', border: '3px solid #000000'}}>
                <table style={{ textAlign: 'left', borderCollapse: 'collapse' }}>
                    <tr>
                        <th style={{ textAlign: 'left'}}>Attempted:</th>
                        <td id="attemptedNumber" style={{ textAlign: 'left', width:'30%' }}>0</td>
                        <th style={{ textAlign: 'left' }}>Correct:</th>
                        <td id="correctNumber" style={{ textAlign: 'left', width: '30%' }}>0</td>
                        <th style={{ textAlign: 'left' }}>Time:</th>
                        <td id="timer" style={{ textAlign: 'left', width: '30%' }}>0h 0m 0s</td>
                    </tr>
                </table>

                <br />
                <br />
                <div style={{ textAlign: 'center'}} >

                    <p id="quadraticEquation">The quadratic equation will appear here.</p>
                    <p id="correctOrNot">&nbsp;</p>

                    <br />

                    <form id="Responses">
                        <MathComponent tex={String.raw`x_1=`} display={false} /><input type="number" id="userx1"></input><br></br>
                        <MathComponent tex={String.raw`x_2=`} display={false} /><input type="number" id="userx2"></input><br></br><br></br>
                        <input id="submitButton" type="button" value="Submit" style={{ display: 'none' }} onClick={
                            () => {
                                userx1 = document.getElementById("userx1").value;
                                userx2 = document.getElementById("userx2").value;
                                if ((userx1 == x1 && userx2 == x2) || (userx1 == x2 && userx2 == x1)) {
                                    document.getElementById("correctOrNot").innerHTML = "Correct!";
                                    var correctNumber = Number(document.getElementById("correctNumber").innerHTML);
                                    correctNumber += 1;
                                    document.getElementById("correctNumber").innerHTML = correctNumber;
                                }
                                else {
                                    document.getElementById("correctOrNot").innerHTML = "Wrong! The answers are " + x1 + " and " + x2 + ".";
                                }
                                document.getElementById("submitButton").style.display = "none";
                                document.getElementById("nextButton").style.display = "inline";
                                var attemptedNumber = Number(document.getElementById("attemptedNumber").innerHTML);
                                attemptedNumber += 1;
                                document.getElementById("attemptedNumber").innerHTML = attemptedNumber;
                            }
                        } ></input>
                        <input id="startButton" type="button" value="Start" onClick={
                            () => {
                                x1 = Math.floor(Math.random() * 25) - 12;
                                x2 = Math.floor(Math.random() * 25) - 12;
                                b = -a * (x1 + x2);
                                c = a * x1 * x2;

                                firstTerm = `x^2`;

                                if (b > 1) { secondTerm = `+${b}x` }
                                else if (b == 1) { secondTerm = `+x` }
                                else if (b == 0) { secondTerm = `` }
                                else if (b == -1) { secondTerm = `-x` }
                                else { secondTerm = `${b}x` }

                                if (c > 0) { thirdTerm = `+${c}` }
                                else if (c == 0) { thirdTerm = `` }
                                else { thirdTerm = `${c}` }

                                question = firstTerm.concat(secondTerm, thirdTerm, `=0`);

                                var quadraticEquation = document.getElementById("quadraticEquation");

                                ReactDOM.render(<MathComponent tex={ question } />, quadraticEquation);

                                document.getElementById("submitButton").style.display = "inline";
                                document.getElementById("startButton").style.display = "none";
                                document.getElementById("nextButton").style.display = "none";
                                document.getElementById("correctOrNot").innerHTML = "&nbsp;";
                                document.getElementById("userx1").value = "";
                                document.getElementById("userx2").value = "";

                                setInterval(showTimer, 1000);
                                function showTimer() {
                                    passedTime = passedTime + 1;
                                    var seconds = passedTime % 60;
                                    var minutes = Math.floor(passedTime / 60) % 60;
                                    var hours = Math.floor(passedTime / 3600);
                                    document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
                                }
                            }
                        }></input>
                        <input id="nextButton" type="button" value="Next" style={{ display: 'none' }} onClick={
                            () => {
                                x1 = Math.floor(Math.random() * 25) - 12;
                                x2 = Math.floor(Math.random() * 25) - 12;
                                b = -a * (x1 + x2);
                                c = a * x1 * x2;

                                firstTerm = `x^2`;

                                if (b > 1) { secondTerm = `+${b}x` }
                                else if (b == 1) { secondTerm = `+x` }
                                else if (b == 0) { secondTerm = `` }
                                else if (b == -1) { secondTerm = `-x` }
                                else { secondTerm = `${b}x` }

                                if (c > 0) { thirdTerm = `+${c}` }
                                else if (c == 0) { thirdTerm = `` }
                                else { thirdTerm = `${c}` }

                                question = firstTerm.concat(secondTerm, thirdTerm, `=0`);

                                var quadraticEquation = document.getElementById("quadraticEquation");

                                ReactDOM.render(<MathComponent tex={question} />, quadraticEquation);

                                document.getElementById("submitButton").style.display = "inline";
                                document.getElementById("startButton").style.display = "none";
                                document.getElementById("nextButton").style.display = "none";
                                document.getElementById("correctOrNot").innerHTML = "&nbsp;";
                                document.getElementById("userx1").value = "";
                                document.getElementById("userx2").value = "";
                                }
                            } ></input>
                    </form>
                </div>
            </div>
    </>
    );
}

export default Quadratic_Equations;