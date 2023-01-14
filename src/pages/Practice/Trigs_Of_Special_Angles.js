import { Component } from "react";
import ImmediateMultipleChoice from "../../components/ImmediateMultipleChoice";
import { MathComponent } from "mathjax-react";

class Trigs_Of_Special_Angles extends Component {

    state = {
        correctChoiceID: '',
        allChoices: [
            { tex: String.raw`-\sqrt 3`, value: -1.732 }, // Math.round(-Math.sqrt(3) * 1000) / 1000 },
            { tex: String.raw`-1`, value: -1 },
            { tex: String.raw`-{\sqrt3 \over 2}`, value: -0.866 }, // Math.round(-Math.sqrt(3) / 2 * 1000) / 1000 },
            { tex: String.raw`-{\sqrt2 \over 2}`, value: -0.707 }, // Math.round(-Math.sqrt(2) / 2 * 1000) / 1000 },
            { tex: String.raw`-{\sqrt3 \over 3}`, value: -0.577 }, // Math.round(-Math.sqrt(3) / 3 * 1000) / 1000 },
            { tex: String.raw`-{1 \over 2}`, value: -0.5 },
            { tex: String.raw`0`, value: 0 },
            { tex: String.raw`{1 \over 2}`, value: 0.5 },
            { tex: String.raw`{\sqrt3 \over 3}`, value: 0.577 }, // Math.round(Math.sqrt(3) / 3 * 1000) / 1000 },
            { tex: String.raw`{\sqrt2 \over 2}`, value: 0.707 }, // Math.round(Math.sqrt(2) / 2 * 1000) / 1000 },
            { tex: String.raw`{\sqrt3 \over 2}`, value: 0.866 }, // Math.round(Math.sqrt(3) / 2 * 1000) / 1000 },
            { tex: String.raw`1`, value: 1 },
            { tex: String.raw`\sqrt 3`, value: 1.732 }, // Math.round(Math.sqrt(3) * 1000) / 1000 },
            { tex: String.raw`\text {nonexistent}`, value: 999 }, 
        ],
    };

    findChoiceByValue(value, allChoices) {
        for (var i = 0; i < allChoices.length; i++) {
            if (allChoices[i].value === value) {
                return i;
            }
        }
    }

    converToRadian = (angle) => {
        function noOne(a) {
            if (a === 1) { return '' } else { return a }
        }
        let sign;
        let angleInRadian;
        angle < 0 ? sign = '-' : sign = ''
        angle = Math.abs(angle);
        if (angle === 0) {
            angleInRadian = '0';
        } else if (Number.isInteger(angle / 180)) {
            angleInRadian = noOne(angle / 180) + String.raw`\pi`;
        } else if (Number.isInteger(angle / 90)) {
            angleInRadian = String.raw`{${noOne(angle / 90)} \pi \over 2}`;
        } else if (Number.isInteger(angle / 60)) {
            angleInRadian = String.raw`{${noOne(angle / 60)} \pi \over 3}`;
        } else if (Number.isInteger(angle / 45)) {
            angleInRadian = String.raw`{${noOne(angle / 45)} \pi \over 4}`;
        } else if (Number.isInteger(angle / 30)) {
            angleInRadian = String.raw`{${noOne(angle / 30)} \pi \over 6}`;
        } else { console.log('angle is' + angle) };
        angleInRadian = sign + angleInRadian;
        return angleInRadian;
    }

    generateQuestion = () => {
        const angles = [30, 45, 60, 90];
        const angle = angles[Math.floor(Math.random() * angles.length)] + Math.floor(Math.random() * 8 - 4) * 90;
        let correctAnswer;

        const trigFunctionSelector = Math.ceil(Math.random() * 10);
        let trigTex;
        if (trigFunctionSelector <= 4) {
            trigTex = String.raw`\sin`;
            correctAnswer = Math.round(Math.sin(angle / 180 * Math.PI) * 1000) / 1000;
        } else if (trigFunctionSelector <= 8) {
            trigTex = String.raw`\cos`;
            correctAnswer = Math.round(Math.cos(angle / 180 * Math.PI) * 1000) / 1000;
        } else {
            trigTex = String.raw`\tan`;
            Math.abs(angle % 180) === 90
                ? correctAnswer = 999
                : correctAnswer = Math.round(Math.tan(angle / 180 * Math.PI) * 1000) / 1000
        }
        const correctChoiceID = this.findChoiceByValue(correctAnswer, this.state.allChoices);
        this.setState({ correctChoiceID: correctChoiceID });

        let questionEnd = `=?`;
        if (angle < 0) { trigTex += `(`; questionEnd = `)` + questionEnd }

        let question = '';
        Math.random() < 0.5
            ? question = trigTex + angle + String.raw`^\circ` + questionEnd
            : question = trigTex + this.converToRadian(angle) + questionEnd

        return (<MathComponent tex={question}/>);
    }

    render = () => {
        return (
            <ImmediateMultipleChoice
                generateQuestion={this.generateQuestion}
                allChoices={this.state.allChoices}
                correctChoiceID={this.state.correctChoiceID}
            />
        );
    }
}

export default Trigs_Of_Special_Angles;
