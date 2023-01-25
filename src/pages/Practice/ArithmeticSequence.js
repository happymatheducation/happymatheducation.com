import React, { Component } from "react";
import FillBlanks from "../../components/FillBlanks";
import { MathComponent } from "mathjax-react";
import { sumArray } from "../../assets/myMath";

class ArithmeticSequence extends Component {

    /* formulaIDs: 
     1. a(n)=a(1)+(n-1)d; 4 variables
     2. s(n)=(a(1)+a(n))n/2; 4 variable
     3. a(m)-a(n)=d(m-n); 3 variables
     4. a(n)=s(n)-s(n-1); 3 variables

     5. a(n),a(n+k),a(n+2k) is arithmetic; 3 variables
     6. s(2n-1)=(2n-1)a(n); 2 variables
     7. s(n),s(2n)-s(n),s(3n)-s(2n) is arithmetic; 1 variable
     8. s(n) = (a(1+k) + a(n - k))n / 2; 4 variables
     Total variables = 4+4+3+3+3+2+1+4=24
     */

    constructor() {
        super();
        this.answerForm = React.createRef(); // to be used for auto focus.
    }

    state = {
        correctAnswer: '',
        userAnswer: '',
        formulaID: 0,
        beforeBlank: '',
    };

    generateQuestion = () => {
        const variablesPerFormula = [4, 4, 3, 3, 3, 2, 1, 4];
        const totalVariableIDs = sumArray(variablesPerFormula);
        const overallVariableID = Math.ceil(Math.random() * totalVariableIDs); // 1~24;
        let variableID = overallVariableID;
        let formulaID = 1;
        while (variableID > variablesPerFormula[formulaID - 1]) {
            variableID -= variablesPerFormula[formulaID - 1];
            formulaID++;
        }
        this.setState({ formulaID: formulaID });
        let questionDescription;
        function sequenceDescription(d) {
            return <>
                <MathComponent display={false} tex={'a_{n+1}-a_n=' + d + '~'} />
                for all positive integers
                <MathComponent display={false} tex={'~n.~'} />
            </>;
        }
        const n = Math.ceil(Math.random() * 7) + 3; // 4~10;
        let m = Math.ceil(Math.random() * 9) + 1; // 2~10;
        while (m === n) {
            m = Math.ceil(Math.random() * 8) + 2; // 3~10;
        }
        const a1 = Math.floor(Math.random() * 21) - 10; // -10~10;
        const d = Math.ceil(Math.random() * 5); // 1~5;
        let k = Math.ceil(Math.random() * 4) + 1; // 2~5;
        const nk = n + k;
        const n2k = n + 2 * k;
        const an = a1 + (n - 1) * d;
        const am = a1 + (m - 1) * d;
        const ank = an + k * d;
        const an2k = ank + k * d;
        let sn = (a1 + an) * n / 2;
        const sn_1 = sn - an;
        const n_1 = n - 1;
        let sumDescription = <MathComponent display={false} tex={String.raw`S_n=a_1+a_2+\cdots+a_n,~`} />;
        let difficulty;
        switch (formulaID) {
            case 1: // 1. a(n)=a(1)+(n-1)d;
                difficulty = '';
                switch (variableID) {
                    case 1: // a(n)
                        this.setState({ correctAnswer: an });
                        questionDescription = <>
                            {sequenceDescription(d)}
                            <MathComponent display={false} tex={'a_1=' + a1 + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + n + '}=~' });
                        break;
                    case 2: // a(1)
                        this.setState({ correctAnswer: a1 });
                        questionDescription = <>
                            {sequenceDescription(d)}
                            <MathComponent display={false} tex={'a_{' + n + '}=' + an + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_1=~' });
                        break;
                    case 3: // n
                        this.setState({ correctAnswer: n });
                        questionDescription = <>
                            {sequenceDescription(d)}
                            <MathComponent display={false} tex={'a_1=' + a1 + ', a_n=' + an + '.'} />
                        </>
                        this.setState({ beforeBlank: 'n=~' });
                        break;
                    case 4: // d
                        this.setState({ correctAnswer: d });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            <MathComponent display={false} tex={'a_1=' + a1 + ', a_{' + n + '}=' + an + '.'} />
                        </>
                        this.setState({ beforeBlank: 'd=~' });
                        break;
                    default:
                        console.log('variableID=' + variableID);
                }
                break;
            case 2: // 2. s(n)=(a(1)+a(n))n/2;
                difficulty = '';
                switch (variableID) {
                    case 1: // s(n)
                        this.setState({ correctAnswer: sn });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            <MathComponent display={false} tex={'a_1=' + a1 + ', a_{' + n + '}=' + an + '.'} />
                        </>
                        this.setState({ beforeBlank: 'S_{' + n + '}=~' });
                        break;
                    case 2: // a(1)
                        this.setState({ correctAnswer: a1 });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            <MathComponent display={false} tex={'a_{' + n + '}=' + an + ', S_{' + n + '}=' + sn + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_1=~' });
                        break;
                    case 3: // a(n)
                        this.setState({ correctAnswer: an });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            <MathComponent display={false} tex={'a_1=' + a1 + ', S_{' + n + '}=' + sn + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + n + '}=~' });
                        break;
                    case 4: // n
                        this.setState({ correctAnswer: n });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            <MathComponent display={false} tex={'a_1=' + a1 + ', a_n=' + an + ', S_n=' + sn + '.'} />
                        </>
                        this.setState({ beforeBlank: 'n=~' });
                        break;
                    default:
                        console.log('variableID=' + variableID);
                }
                break;
            case 3: // 3. a(m) - a(n)=d(m - n); a(m) and m are always given;
                difficulty = '';
                switch (variableID) {
                    case 1: // a(n)
                        this.setState({ correctAnswer: an });
                        questionDescription = <>
                            {sequenceDescription(d)}
                            <MathComponent display={false} tex={'a_{' + m + '}=' + am + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + n + '}=~' });
                        break;
                    case 2: // d 
                        this.setState({ correctAnswer: d });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            <MathComponent display={false} tex={'a_{' + m + '}=' + am + ',~a_{' + n + '}=' + an + '.' } />
                        </>
                        this.setState({ beforeBlank: 'd=~' });
                        break;
                    case 3: // n
                        this.setState({ correctAnswer: n });
                        questionDescription = <>
                            {sequenceDescription(d)}
                            <MathComponent display={false} tex={'a_{' + m + '}=' + am + ',~a_n=' + an + '.'} />
                        </>
                        this.setState({ beforeBlank: 'n=~' });
                        break;
                    default:
                        console.log('variableID=' + variableID);
                }
                break;
            case 4: // 4. a(n) = s(n) - s(n-1);
                difficulty = '';
                switch (variableID) {
                    case 1: // a(n)
                        this.setState({ correctAnswer: an });
                        questionDescription = <>
                            {sumDescription}
                            <MathComponent display={false} tex={'S_{' + n + '}=' + sn + ',~S_{' + n_1 + '}=' + sn_1 + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + n + '}=~' });
                        break;
                    case 2: // s(n)
                        this.setState({ correctAnswer: sn });
                        questionDescription = <>
                            {sumDescription}
                            <MathComponent display={false} tex={'a_{' + n + '}=' + an + ',~S_{' + n_1 + '}=' + sn_1 + '.'} />
                        </>
                        this.setState({ beforeBlank: 'S_{' + n + '}=~' });
                        break;
                    case 3: // s(n-1)
                        this.setState({ correctAnswer: sn_1 });
                        questionDescription = <>
                            {sumDescription}
                            <MathComponent display={false} tex={'a_{' + n + '}=' + an + ',~S_{' + n + '}=' + sn + '.'} />
                        </>
                        this.setState({ beforeBlank: 'S_{' + n_1 + '}=~' });
                        break;
                    default:
                        console.log('variableID=' + variableID);
                }
                break;
            case 5: // 5. a(n), a(n + k), a(n + 2k) is arithmetic;
                difficulty = ' (Hard) ';
                switch (variableID) {
                    case 1: // a(n)
                        this.setState({ correctAnswer: an });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            < MathComponent display={false} tex={'a_{' + nk + '}=' + ank + ',~a_{' + n2k + '}=' + an2k + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + n + '}=~' });
                        break;
                    case 2: // a(n+k)
                        this.setState({ correctAnswer: ank });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            < MathComponent display={false} tex={'a_{' + n + '}=' + an + ',~a_{' + n2k + '}=' + an2k + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + nk + '}=~' });
                        break;
                    case 3: // a(n+2k)
                        this.setState({ correctAnswer: an2k });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            < MathComponent display={false} tex={'a_{' + n + '}=' + an + ',~a_{' + nk + '}=' + ank + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + n2k + '}=~' });
                        break;
                    default:
                        console.log('variableID=' + variableID);
                }
                break;
            case 6: // 6. s(2n - 1) = (2n - 1)a(n);
                difficulty = ' (Hard) ';
                const Ssub = 2 * n - 1;
                switch (variableID) {
                    case 1: // s(2n-1)
                        this.setState({ correctAnswer: Ssub*an });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            < MathComponent display={false} tex={'a_{' + n + '}=' + an + '.'} />
                        </>
                        this.setState({ beforeBlank: 'S_{' + Ssub + '}=~' });
                        break;
                    case 2: // a(n)
                        this.setState({ correctAnswer: an });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            < MathComponent display={false} tex={'S_{' + Ssub + '}=' + Ssub*an + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + n + '}=~' });
                        break;
                    default:
                        console.log('variableID=' + variableID);
                }
                break;
            case 7: // 7. s(n), s(2n) - s(n), s(3n) - s(2n) is arithmetic;
                // use the values of a(n), a(n+k), a(n+2k) to avoid too large numbers;
                // not asking s(n) since it is a bit tedious. 
                difficulty = ' (Super hard) ';
                sn = an;
                let s2n = sn + ank;
                let s3n = s2n + an2k;
                this.setState({ correctAnswer: s3n });
                questionDescription = <>
                    {sequenceDescription('d')}
                    {sumDescription}
                    < MathComponent display={false} tex={'S_{' + n + '}=' + sn + ',~S_{' + 2 * n + '}=' + s2n + '.'} />
                </>
                this.setState({ beforeBlank: 'S_{' + 3 * n + '}=~' });
                break;
            case 8: // 8. s(n) = (a(1+k) + a(n - k))n / 2;
                difficulty = ' (Super hard) ';
                k = Math.ceil(Math.random() * Math.floor(n/2-1)); // 1~(n/2-1);
                const k1 = k + 1;
                const ak1 = a1 + k * d;
                const n_k = n - k;
                const an_k = an - k * d;
                switch (variableID) {
                    case 1: // s(n)
                        this.setState({ correctAnswer: sn });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            <MathComponent display={false} tex={'a_{' + k1 + '}=' + ak1 + ', a_{' + n_k + '}=' + an_k + '.'} />
                        </>
                        this.setState({ beforeBlank: 'S_{' + n + '}=~' });
                        break;
                    case 2: // a(1+k)
                        this.setState({ correctAnswer: ak1 });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            <MathComponent display={false} tex={'a_{' + n_k + '}=' + an_k + ', S_{' + n + '}=' + sn + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + k1 + '}=~' });
                        break;
                    case 3: // a(n-k)
                        this.setState({ correctAnswer: an_k });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            <MathComponent display={false} tex={'a_{' + k1 + '}=' + ak1 + ', S_{' + n + '}=' + sn + '.'} />
                        </>
                        this.setState({ beforeBlank: 'a_{' + n_k + '}=~' });
                        break;
                    case 4: // n
                        this.setState({ correctAnswer: n });
                        questionDescription = <>
                            {sequenceDescription('d')}
                            {sumDescription}
                            <MathComponent display={false} tex={'a_{' + k1 + '}=' + ak1 + ', a_{n-' + k + '}=' + an_k + ', S_n=' + sn + '.'} />
                        </>
                        this.setState({ beforeBlank: 'n=~' });
                        break;
                    default:
                        console.log('variableID=' + variableID);
                }
                break;
            default:
                console.log('formulaID=' + formulaID);
        }
        questionDescription = <>{questionDescription}{difficulty}</>
        return questionDescription;
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
        let hintMath = String.raw`\text{Hint: }`;
        let hintText = '';
        switch (this.state.formulaID) {
            case 1: // 1. a(n)=a(1)+(n-1)d;
                hintMath += String.raw`a_n=a_1+(n-1)d`;
                break;
            case 2: // 2. s(n)=(a(1)+a(n))n/2;
                hintMath += String.raw`S_n=(a_1+a_n)n/2`;
                break;
            case 3: // 3. a(m) - a(n)=d(m - n);
                hintMath += String.raw`a_m-a_n=d(m-n)`;
                break;
            case 4: // 4. a(n) = s(n) - s(n-1);
                hintMath += String.raw`a_{n+1}=S_{n+1}-S_n`;
                break;
            case 5: // 5. a(n), a(n + k), a(n + 2k) is arithmetic;
                hintMath += String.raw`a_n,a_{n+k},a_{n+2k}`;
                hintText = String.raw`\text{ is an arithmetic sequence}`;
                break;
            case 6: // 6. s(2n - 1) = (2n - 1)a(n);
                hintMath += String.raw`S_{2n-1}=(2n-1)a_n`;
                break;
            case 7: // 7. s(n), s(2n) - s(n), s(3n) - s(2n) is arithmetic;
                hintMath += String.raw`S_n,S_{2n}-S_n,S_{3n}-S_{2n}`;
                hintText = String.raw`\text{ is an arithmetic sequence}`;
                break;
            case 8: // 8. s(n) = (a(1+k) + a(n - k))n / 2;
                hintMath += String.raw`S_n=(a_{1+k}+a_{n-k})n/2`;
                break;
            default:
                console.log('formulaID=' + this.state.formulaID);
        }
        return (<>
            <MathComponent display={false} tex={String.raw`\text{Incorrect! Answer: }${correctAnswer}{.~}`} />
            <MathComponent display={false} tex={hintMath} />
            <MathComponent display={false} tex={hintText} />
        </>);
    }

    render() {

        let answerForm = (<>
            <MathComponent display={false}
                tex={this.state.beforeBlank} />
            <input type="number" value={this.state.userAnswer} ref={this.answerForm} autoFocus 
                onChange={e => this.setState({ userAnswer: e.target.value })}></input><br />
        </>);
        return (
            <FillBlanks
                checkAnswer={this.checkAnswer}
                generateQuestion={this.generateQuestion}
                clearAnswerForm={this.clearAnswerForm}
                answerForm={answerForm}
            />
        );
    }
}

export default ArithmeticSequence;
