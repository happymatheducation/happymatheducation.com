import { Component } from "react";
import ImmediateMultipleChoice from "../../components/ImmediateMultipleChoice";
import { MathComponent } from "mathjax-react";
import problems from "./Problems/allProblems";

class Adventure extends Component {

    state = {
        i: Math.floor(Math.random() * problems.length),
    };

    generateQuestion = () => {
        const i = Math.floor(Math.random() * problems.length);
        console.log( problems[i]);        
    }

    render = () => {
        return (
            <>
                <MathComponent tex={problems[this.state.i].question} />
            </>
        );
    }
}

export default Adventure;
