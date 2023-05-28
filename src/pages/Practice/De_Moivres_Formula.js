import { Component } from "react";
import ImmediateMultipleChoice from "../../components/ImmediateMultipleChoice";
import { MathComponent } from "mathjax-react";

class De_Moivres_Formula extends Component {

    state = {
        correctChoiceID: '',
        allChoices: [ // all values are angles in degree;
            { tex: String.raw`1`, value: 0 },
            { tex: String.raw`{\sqrt3 \over 2} + i{1 \over 2}`, value: 30 },
            { tex: String.raw`{\sqrt2 \over 2} + i{\sqrt2 \over 2}`, value: 45 },
            { tex: String.raw`{1 \over 2} + i{\sqrt3 \over 2}`, value: 60 },
            { tex: String.raw`i`, value: 90 },
            { tex: String.raw`-{1 \over 2} + i{\sqrt3 \over 2}`, value: 120 },
            { tex: String.raw`-{\sqrt2 \over 2} + i{\sqrt2 \over 2}`, value: 135 },
            { tex: String.raw`-{\sqrt3 \over 2} + i{1 \over 2}`, value: 150 },
            { tex: String.raw`-1`, value: 180 },
            { tex: String.raw`-{\sqrt3 \over 2} - i{1 \over 2}`, value: 210 },
            { tex: String.raw`-{\sqrt2 \over 2} - i{\sqrt2 \over 2}`, value: 225 },
            { tex: String.raw`-{1 \over 2} - i{\sqrt3 \over 2}`, value: 240 },
            { tex: String.raw`-i`, value: 270 },
            { tex: String.raw`{1 \over 2} - i{\sqrt3 \over 2}`, value: 300 },
            { tex: String.raw`{\sqrt2 \over 2} - i{\sqrt2 \over 2}`, value: 315 },
            { tex: String.raw`{\sqrt3 \over 2} - i{1 \over 2}`, value: 330 },
        ],
    };

    findChoiceByValue(value, allChoices) {
        for (var i = 0; i < allChoices.length; i++) {
            if (allChoices[i].value === value) {
                return i;
            }
        }
    }

    generateQuestion = () => {
        const allBases = this.state.allChoices;
        const n = allBases.length;
        let currentBase = { value: 0 };
        while (currentBase.value === 0) {
            const i = Math.floor(Math.random() * n); //0~n-1
            currentBase = allBases[i];
        }

        const power = Math.ceil(Math.random() * 90) + 10; //11~100
        const answerAngle = currentBase.value * power % 360;
        const correctChoiceID = this.findChoiceByValue(answerAngle, allBases);
        this.setState({ correctChoiceID : correctChoiceID });

        const question = String.raw`(${currentBase.tex})^{${power}}=?`

        return (<MathComponent tex={question} />);
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

export default De_Moivres_Formula;
