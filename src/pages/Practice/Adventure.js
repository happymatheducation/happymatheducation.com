import { Component } from "react";
import ImmediateMultipleChoice from "../../components/ImmediateMultipleChoice";
import { MathComponent } from "mathjax-react";
import Cayley from "../../assets/ContestPapers/Cayley";

class Adventure extends Component {

    state = {
        question: '',
    };

    generateQuestion = () => {
        const numOfPapers = Math.ceil(Math.random() * Cayley.length);
        const selectedPaper = Cayley[Math.floor(Math.random() * numOfPapers)];
        const currentQuestion = selectedPaper.question[1].problem;
        return currentQuestion;
    }

    render = () => {
        return (
            <>
                {this.generateQuestion()}
            </>
        );
    }
}

export default Adventure;
