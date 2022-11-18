function Quadratic_Equations() {

  return (
    <>
    <div style= "width: 70%; background-color: #EEFFEE; padding: 20px; margin: auto; border: 3px solid #000000; ">
        <style>
            table, td, th {
                text-align: left;
            }

            table {
                border-collapse: collapse;
            }

            td {
                width: 30%
            }
        </style>

        <table>
            <tr>
                <th>Attempted:</th>
                <td id="attemptedNumber">0</td>
                <th>Correct:</th>
                <td id="correctNumber">0</td>
                <th>Time:</th>
                <td id="timer">0h 0m 0s</td>
            </tr>
        </table>

        <br />
        <br />
        <div style="text-align: center;">

            <p id="quadraticEquation">The quadratic equation will appear here.</p>
            <p id="correctOrNot">&nbsp;</p>

            <br />

            <form id="Responses">
                $x_1=$ <input type="number" id="userx1"><br>
                $x_2=$ <input type="number" id="userx2"><br><br>
                <input id="submitButton" type="button" onclick="checkAnswer()" value="Submit">
                <input id="startButton" type="button" onclick="startPractice()" value="Start">
                <input id="nextButton" type="button" onclick="loadQuestion()" value="Next">
            </form>

            <script>let x1;
                let x2;
                let a = 1;
                let b;
                let c;
                let firstTerm;
                let secondTerm;
                let thirdTerm;
                let question;
                let userx1;
                let userx2;
                let passedTime = 0;

                window.onload = function init() {
                    document.getElementById("submitButton").style.display = "none";
                    document.getElementById("nextButton").style.display = "none";
                }


                function startPractice() {
                    loadQuestion();
                    setInterval(showTimer, 1000);
                }

                function showTimer() {
                    ++passedTime;
                    var seconds = passedTime % 60;
                    var minutes = Math.floor(passedTime / 60) % 60;
                    var hours = Math.floor(passedTime / 3600);
                    document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
                }

                function loadQuestion() {

                    x1 = Math.floor(Math.random() * 25) - 12;
                    x2 = Math.floor(Math.random() * 25) - 12;
                    b = -a * (x1 + x2);
                    c = a * x1 * x2;

                    firstTerm = `x^2`;

                    if (b > 1) { secondTerm = `+${b}x`; }
                    else if (b == 1) { secondTerm = `+x`; }
                    else if (b == 0) { secondTerm = ``; }
                    else if (b == -1) { secondTerm = `-x`; }
                    else { secondTerm = `${b}x`; }

                    if (c > 0) { thirdTerm = `+${c}`; }
                    else if (c == 0) { thirdTerm = ``; }
                    else { thirdTerm = `${c}`;; }

                    question = firstTerm.concat(secondTerm, thirdTerm, `=0`);

                    katex.render(question, quadraticEquation, {
                        throwOnError: false
                    });

                    document.getElementById("submitButton").style.display = "inline";
                    document.getElementById("startButton").style.display = "none";
                    document.getElementById("nextButton").style.display = "none";
                    document.getElementById("correctOrNot").innerHTML = "&nbsp;";
                    document.getElementById("userx1").value = "";
                    document.getElementById("userx2").value = "";
                }

                function checkAnswer() {
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
                }</script>
        </div>
    </div>
              
    </>
  );
}

export default Quadratic_Equations;
