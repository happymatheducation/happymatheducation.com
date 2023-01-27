function Practice() {

    return (
        <>
            <h1 >Ultimate Practice</h1>

            <button className="collapsible" id='introduction' onClick={
                () => {
                    var me = document.getElementById('introduction')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Introduction (Click)
            </button>
            <div width='60%' className="content">
                <div style={{ justifyContent: 'space-between' }}>
                    Below are some topic based problems created by Happy Math Education (a.k.a Blessed Eduloo before 2021). If
                    the creator is a volunteering student, then the name of the volunteer appears on the top right in each page.
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
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Fundamentals
            </button>
            <div className="content" style={{ maxHeight: '50000px' }}>
                <div className='practicediv'>
                    Arithmetic Sequence:<br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a style={{ display: 'inline' }}
                        href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/arithmetic_sequence.pdf'
                    >pdf</a> | 
                    <a href='/Practice/ArithmeticSequence'>App</a>
                </div>
                <div className='practicediv'>
                    Mental Math with Basic Algebra: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/mental_math_with_basic_algebra.pdf'
                    >pdf</a> |
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/mental_math_with_basic_algebra_answers.pdf'
                    >Answers</a>
                </div>
                <div className='practicediv'>
                    Basic Similar Triangles: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/basic_similar_triangles.pdf'
                    >pdf</a> |
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/basic_similar_triangles_answers.pdf'
                    >Answers</a>
                </div>
                <div className='practicediv'>
                    Two Line Intersection: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/two_line_intersection.pdf'
                    >pdf</a> |
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/two_line_intersection_answers.pdf'
                    >Answers</a>
                </div>
                <div className='practicediv'>
                    Line Through Two Points: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/line_through_two_points.pdf'
                    >pdf</a> |
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/line_through_two_points_answers.pdf'
                    >Answers</a>
                </div>
                <div className='practicediv'>
                    Number of Factors: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/number_of_factors.pdf'
                    >pdf</a> |
                    <a href='/Practice/NumberOfFactors'>App</a>
                </div>
                <div className='practicediv'>
                    Number Base Change: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/number_base_change.pdf'
                    >pdf</a> 
                </div>                
                <div className='practicediv'>
                    Rolling Dice: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/rolling_dice.pdf'
                    >pdf</a> |
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/rolling_dice_answers.pdf'
                    >Answers</a> | 
                    <a href='/Practice/RollingDice'>App</a>
                </div>
                <div className='practicediv'>
                    Quadratic Equations: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_equations.pdf'
                    >pdf</a> |
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_equations_answers.pdf'
                    >Answers</a> |
                    <a href='/Practice/Quadratic_Equations'>App</a>

                </div>
                <div className='practicediv'>
                    Euclids Theorem: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/euclid_theorem.pdf'
                    >pdf</a> |
                    <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/euclid_theorem_answers.pdf'
                    >Answers</a> |
                    <a href='/Practice/Euclids_Theorem'>App</a>
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
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Intermediate
            </button>
            <div className="content" style={{ maxHeight: '50000px' }}>
                <div style={{ justifyContent: 'space-between' }}>
                    <div className='practicediv'>
                        Prime Factorization For Factorials: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/prime_factoriazation_for_factorials.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/prime_factoriazation_for_factorials_answers.pdf'
                        >Answers</a> |
                        <a href='/Practice/PrimeFactorizationForFactorials'>App</a>
                    </div>
                    <div className='practicediv'>
                        Quadratic Diophantine Equations Type ab: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_diophantine_equations_-_type_ab.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_diophantine_equations_-_type_ab_answers.pdf'
                        >Answers</a> |
                        <a href='/Practice/Quadratic_Diophantine_Equations_Type_ab'>App</a>
                    </div>
                    <div className='practicediv'>
                        Quadratic Diophantine Equations - Simple Square Type: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_diophantine_equations_-_simple_square_type.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_diophantine_equations_-_simple_square_type_answer.pdf'
                        >Answers</a> |
                        <a href='/Practice/Quadratic_Diophantine_Equations_Simple_Square_Type'>App</a>
                    </div>
                    <div className='practicediv'>
                        Trigs of Special Angles: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/trigs_of_special_angles.pdf'
                        >pdf</a> |
                        <a href='/Practice/Trigs_Of_Special_Angles'>App</a>
                    </div>
                    <div className='practicediv'>
                        Find Remainders: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/remainder.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/remainder_answers.pdf'
                        >Answers</a> |
                        <a href='/Practice/Find_Remainders'>App</a>
                    </div>
                    <div className='practicediv'>
                        Binomial Theorem: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/binomial_theorem.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/binomial_theorem_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        Logarithm with Quadratic Equations: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/logarithm_with_quadratic_equations.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/logarithm_with_quadratic_equations_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        Stars and Bars: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/starts_and_bars.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/starts_and_bars_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        Chinese Remainder Theorem: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/chinese_remainder_theorem.pdf'
                        >pdf</a>
                    </div>
                    <div className='practicediv'>
                        Magic Squares: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/magic_squares_3x3.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/magic_squares_3x3_answers.pdf'
                        >Answers</a>
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
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Advanced
            </button>
            <div className="content" style={{ maxHeight: '50000px' }}>
                <div style={{ justifyContent: 'space-between' }}>
                    <div className='practicediv'>
                        Simple Trig Inequality: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/simple_trig_inequality.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/prime_factoriazation_for_factorials_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        Brahmagupta's Formula: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/brahmagupta%E2%80%99s_formula.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/brahmagupta%E2%80%99s_formula_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        Linear Diophantine Equations: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/linear_diophantine_equations.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/linear_diophantine_equations_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        Polynomial Factorization: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/polynomial_factorization.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/polynomial_factorization_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        De Moivres Formula: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/de_moivres_formula.pdf'
                        >pdf</a> |
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/de_moivres_formula_answers.pdf'
                        >Answers</a> |
                        <a href='/Practice/De_Moivres_Formula'>App</a>
                    </div>
                    <div className='practicediv'>
                        Logarithm from Contests: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/logarithm.pdf'
                        >pdf</a>
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
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Playground
            </button>
            <div className="content" style={{ maxHeight: '500px' }}>
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
                    <a href='/Practice/OneStepEquation'>One Step Equation</a>
                </div>
                <div className='practicediv' style={{ display: 'none' }}>
                    Grade 10: <a href='/Practice/Adventure'>Adventure</a>
                </div>
            </div>
        </>
    );
}

export default Practice;
