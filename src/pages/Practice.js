//import { MathComponent } from "mathjax-react"
import arithmetic_sequence from './uploads/arithmetic_sequence.pdf';
import basic_similar_triangles from './uploads/basic_similar_triangles.pdf';
import basic_similar_triangles_answers from './uploads/basic_similar_triangles_answers.pdf';
import binomial_theorem from './uploads/binomial_theorem.pdf';
import binomial_theorem_answers from './uploads/binomial_theorem_answers.pdf';
import brahmagupta_formula from './uploads/brahmagupta_formula.pdf';
import brahmagupta_formula_answers from './uploads/brahmagupta_formula_answers.pdf';
import chinese_remainder_theorem from './uploads/chinese_remainder_theorem.pdf';
import de_moivres_formula from './uploads/de_moivres_formula.pdf';
import de_moivres_formula_answers from './uploads/de_moivres_formula_answers.pdf';
import euclid_theorem from './uploads/euclid_theorem.pdf';
import euclid_theorem_answers from './uploads/euclid_theorem_answers.pdf';
import line_through_two_points from './uploads/line_through_two_points.pdf';
import line_through_two_points_answers from './uploads/line_through_two_points_answers.pdf';
import linear_diophantine_equations from './uploads/linear_diophantine_equations.pdf';
import linear_diophantine_equations_answers from './uploads/linear_diophantine_equations_answers.pdf';
import logarithm from './uploads/logarithm.pdf';
import logarithm_with_quadratic_equations from './uploads/logarithm_with_quadratic_equations.pdf';
import logarithm_with_quadratic_equations_answers from './uploads/logarithm_with_quadratic_equations_answers.pdf';
import magic_squares_3x3 from './uploads/magic_squares_3x3.pdf';
import magic_squares_3x3_answers from './uploads/magic_squares_3x3_answers.pdf';
import mental_math_with_basic_algebra from './uploads/mental_math_with_basic_algebra.pdf';
import mental_math_with_basic_algebra_answers from './uploads/mental_math_with_basic_algebra_answers.pdf';
import number_base_change from './uploads/number_base_change.pdf';
import number_of_factors from './uploads/number_of_factors.pdf';
import polynomial_factorization from './uploads/polynomial_factorization.pdf';
import polynomial_factorization_answers from './uploads/polynomial_factorization_answers.pdf';
import prime_factoriazation_for_factorials from './uploads/prime_factoriazation_for_factorials.pdf';
import prime_factoriazation_for_factorials_answers from './uploads/prime_factoriazation_for_factorials_answers.pdf';
import quadratic_diophantine_equations_simple_square_type from './uploads/quadratic_diophantine_equations_simple_square_type.pdf';
import quadratic_diophantine_equations_simple_square_type_answer from './uploads/quadratic_diophantine_equations_simple_square_type_answer.pdf';
import quadratic_diophantine_equations_type_ab from './uploads/quadratic_diophantine_equations_type_ab.pdf';
import quadratic_diophantine_equations_type_ab_answers from './uploads/quadratic_diophantine_equations_type_ab_answers.pdf';
import quadratic_equations from './uploads/quadratic_equations.pdf';
import quadratic_equations_answers from './uploads/quadratic_equations_answers.pdf';
import remainder from './uploads/remainder.pdf';
import remainder_answers from './uploads/remainder_answers.pdf';
import rolling_dice from './uploads/rolling_dice.pdf';
import rolling_dice_answers from './uploads/rolling_dice_answers.pdf';
import simple_trig_inequality from './uploads/simple_trig_inequality.pdf';
import simple_trig_inequality_answers from './uploads/simple_trig_inequality Answers.pdf';
import starts_and_bars from './uploads/starts_and_bars.pdf';
import starts_and_bars_answers from './uploads/starts_and_bars_answers.pdf';
import trigs_of_special_angles from './uploads/trigs_of_special_angles.pdf';
import two_line_intersection from './uploads/two_line_intersection.pdf';
import two_line_intersection_answers from './uploads/two_line_intersection_answers.pdf';

function Practice() {

    return (
        <>
            <h1>Ultimate Practice</h1>

            <button className="collapsible" id='introduction' onClick={
                () => {
                    var me = document.getElementById('introduction')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Introduction (Click)
            </button>
            <div width='60%' className="content">
                <div style={{ justifyContent: 'space-between' }}>
                    Below are some topic based problems created by Happy Math Education (a.k.a Blessed Eduloo before 2021). If
                    the creator of a pdf file is a volunteering student, then the name of the volunteer appears on the top right in each page.
                    <br /><br />Each set is designed to be a THOROUGH practice on that specific topic, therefore:
                    <br />1. There are many problems in each set;
                    <br />2. The level of difficulty may change drastically between different problems in the same
                    set;
                    <br />3. There is no need to FINISH a set of problems. Usually, finishing 10% of a set of
                    problems is good enough to make you an expert on that topic;
                    <br />4. If you really want to finish a set, don't expect to finish it in one sitting.
                    <br /><br />This list of problems, including the answers and practice apps are constantly being
                    updated.
                </div>
            </div>

            <button className="collapsible cactive" id='fundamentals' onClick={
                () => {
                    var me = document.getElementById('fundamentals')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Fundamentals
            </button>
            <div className="content" style={{ maxHeight: '50000px' }}>
                <div className='practicediv'>
                    Angle Chase in a Circle: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/AngleChase'>App</a>
                </div>
                <div className='practicediv'>
                    Arithmetic Sequence:<br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/ArithmeticSequence'>App</a> |
                    <a href={arithmetic_sequence}
                    //href=' https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/arithmetic_sequence.pdf'
                    >pdf</a>
                </div>
                <div className='practicediv'>
                    Distance Between Two Points: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/DistanceBetweenTwoPoints'>App</a>
                </div>
                <div className='practicediv'>
                    Euclids Theorem: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/Euclids_Theorem'>App</a> |
                    <a href={euclid_theorem}>pdf</a> |
                    <a href={euclid_theorem_answers}>Answers</a>
                </div>
                <div className='practicediv'>
                    Line Through Two Points: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/LineThroughTwoPoints_SlopeOnly'>App (Slope)</a> |
                    <a href={line_through_two_points}>pdf</a> |
                    <a href={line_through_two_points_answers}>Answers</a>
                </div>
                <div className='practicediv'>
                    Linear Diophantine Equation, Simple: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/SimpleLinearDiophantineEquation'>App</a>
                </div>
                <div className='practicediv'>
                    Mental Math with Basic Algebra: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/MentalMathWithBasicAlgebra'>App</a> |
                    <a href={mental_math_with_basic_algebra}>pdf</a> |
                    <a href={mental_math_with_basic_algebra_answers}>Answers</a>
                </div>
                <div className='practicediv'>
                    Number Base Change: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/NumberBaseChange'>App</a> |
                    <a href={number_base_change}>pdf</a>
                </div>
                <div className='practicediv'>
                    Number of Factors: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/NumberOfFactors'>App</a> |
                    <a href={number_of_factors}>pdf</a>
                </div>
                <div className='practicediv'>
                    Perfect Squares: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/PerfectSquares'>App</a>
                </div>
                <div className='practicediv'>
                    Quadratic Equations / Functions: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/Quadratic_Equations'>App (Find roots)</a> |
                    <a href={quadratic_equations}>pdf</a> |
                    <a href={quadratic_equations_answers}>Answers</a>
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/CompleteTheSquare'>App (Complete the Square / Vertex Form)</a>
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/VietasTheorem'>App (Vieta's Theorem)</a>
                </div>
                <div className='practicediv'>
                    Remainder with Special Divisors: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/RemainderWithSpecialDivisors'>App</a>
                </div>
                <div className='practicediv'>
                    Rolling Dice: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/RollingDice'>App</a> |
                    <a href={rolling_dice}>pdf</a> |
                    <a href={rolling_dice_answers}>Answers</a>
                </div>
                <div className='practicediv'>
                    Similar Triangles, Basic: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/BasicSimilarTriangles'>App</a> |
                    <a href={basic_similar_triangles}>pdf</a> |
                    <a href={basic_similar_triangles_answers}>Answers</a>
                </div>
                <div className='practicediv'>
                    Simple 3D shapes: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/Practice/Simple3Dshapes'>App</a>
                </div>
                <div className='practicediv'>
                    Two Line Intersection: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={two_line_intersection}>pdf</a> |
                    <a href={two_line_intersection_answers}>Answers</a>
                </div>
            </div>

            <button className="collapsible cactive" id='intermediate' onClick={
                () => {
                    var me = document.getElementById('intermediate')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Intermediate
            </button>
            <div className="content" style={{ maxHeight: '50000px' }}>
                <div style={{ justifyContent: 'space-between' }}>
                    <div className='practicediv'>
                        Binomial Theorem: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/BinomialTheorem'>App</a> |
                        <a href={binomial_theorem}>pdf</a> |
                        <a href={binomial_theorem_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Chinese Remainder Theorem: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/ChineseRemainderTheorem'>App</a> |
                        <a href={chinese_remainder_theorem}>pdf</a>
                    </div>
                    <div className='practicediv'>
                        Law of Cosine: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/LawOfCos'>App</a>
                    </div>
                    <div className='practicediv'>
                        Logarithm, Simple: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/SimpleLogarithm'>App</a>
                    </div>
                    <div className='practicediv'>
                        Magic Squares: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/MagicSquares'>App</a> |
                        <a href={magic_squares_3x3}>pdf</a> |
                        <a href={magic_squares_3x3_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Polynomial Inequality: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/PolynomialInequality'>App</a>
                    </div>
                    <div className='practicediv'>
                        Prime Factorization For Factorials: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/PrimeFactorizationForFactorials'>App</a> |
                        <a href={prime_factoriazation_for_factorials}>pdf</a> |
                        <a href={prime_factoriazation_for_factorials_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Quadratic Diophantine Equations Type ab: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/Quadratic_Diophantine_Equations_Type_ab'>App</a> |
                        <a href={quadratic_diophantine_equations_type_ab}>pdf</a> |
                        <a href={quadratic_diophantine_equations_type_ab_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Quadratic Diophantine Equations - Simple Square Type: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/Quadratic_Diophantine_Equations_Simple_Square_Type'>App</a> |
                        <a href={quadratic_diophantine_equations_simple_square_type}>pdf</a> |
                        <a href={quadratic_diophantine_equations_simple_square_type_answer}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Remainder of Products and Powers: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/RemainderOfProductsAndPowers'>App</a> |
                        <a href={remainder}>pdf</a> |
                        <a href={remainder_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Stars and Bars: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/StarsAndBars'>App</a> | 
                        <a href={starts_and_bars}>pdf</a> |
                        <a href={starts_and_bars_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Trigs of Special Angles: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/Trigs_Of_Special_Angles'>App</a> |
                        <a href={trigs_of_special_angles}>pdf</a>
                    </div>
                </div>
            </div>

            <button className="collapsible cactive" id='advanced' onClick={
                () => {
                    var me = document.getElementById('advanced')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Advanced
            </button>
            <div className="content" style={{ maxHeight: '50000px' }}>
                <div style={{ justifyContent: 'space-between' }}>
                    <div className='practicediv'>
                        Brahmagupta's Formula: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={brahmagupta_formula}>pdf</a> |
                        <a href={brahmagupta_formula_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        De Moivres Formula: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/De_Moivres_Formula'>App</a> |
                        <a href={de_moivres_formula}>pdf</a> |
                        <a href={de_moivres_formula_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Linear Diophantine Equations: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={linear_diophantine_equations}>pdf</a> |
                        <a href={linear_diophantine_equations_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Logarithm from Contests: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={logarithm}>pdf</a>
                    </div>
                    <div className='practicediv'>
                        Logarithm with Quadratic Equations: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={logarithm_with_quadratic_equations}>pdf</a> |
                        <a href={logarithm_with_quadratic_equations_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Polynomial Factorization: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/PolynomialFactorization'>App</a> |
                        <a href={polynomial_factorization}>pdf</a> |
                        <a href={polynomial_factorization_answers}>Answers</a>
                    </div>
                    <div className='practicediv'>
                        Trig Identities II: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/TrigIdentitiesII'>App</a>
                    </div>
                    <div className='practicediv'>
                        Trig Inequality, simple: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='/Practice/SimpleTrigIequality'>App</a> |
                        <a href={simple_trig_inequality}>pdf</a> |
                        <a href={simple_trig_inequality_answers}>Answers</a>
                    </div>
                </div>
            </div>

            <button className="collapsible cactive" id='playground' onClick={
                () => {
                    var me = document.getElementById('playground')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Playground
            </button>
            <div className="content" style={{ maxHeight: '1000px' }}>
                <div className='practicediv'>
                    <a href='/Practice/SimpleAddition'>Simple Addition</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/SimpleSubtraction'>Simple Subtraction</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/SimpleMultiplication'>Simple Multiplication</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/SimpleDivision'>Simple Division</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/OneStepEquation'>One Step Equation</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/FractionReduction'>Fraction Reduction</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/FractionAdditionAndSubtraction'>Fraction Addition and Subtraction</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/Average'>Average</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/RoundingSquareRoot'>Rounding Square Root</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/GreatestCommonDivisor'>Greatest Common Divisor</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/LeaseCommonMultiple'>Lease Common Multiple</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/MutidigitTimesOnedigit'>Muti-digit Times One-digit</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/LongDivision'>Long Division</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/TwoDigitTimesTwoDigit'>Two-Digit Times Two-Digit</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/Percentage'>Percentage</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/SimpleLinearEquation'>Simple Linear Equation</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/SimpleSystemOfLinearEquations'>Simple System Of Linear Equations</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/FractionMultiplicationAndDivision'>Fraction Multiplication And Division</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/CrossMultiplication'>Cross Multiplication</a>
                </div>
                <div className='practicediv' style={{ display: 'none' }}>
                    Grade 10: <a href='/Practice/Adventure'>Adventure</a>
                </div>
            </div>
        </>
    );
}

export default Practice;
