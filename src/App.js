import { lazy, React, Suspense, useEffect } from "react";
import { Link, Route, Routes, useLocation } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavBar from './NavBar.js';
import Logo from './logo/logo.png';
import Home from './pages/Home.js'

const Classes = lazy(() => import("./pages/Classes.js"))
const Practice = lazy(() => import("./pages/Practice.js"))
const Contests = lazy(() => import("./pages/Contests.js"))
const Career = lazy(() => import("./pages/Career.js"))
const Contact = lazy(() => import("./pages/Contact.js"))
const Team = lazy(() => import("./pages/Team.js"))
const License = lazy(() => import("./pages/License.js"))
const Notfound = lazy(() => import("./pages/Notfound.js"))

const QuadraticEquations = lazy(() => import("./pages/Practice/Quadratic_Equations.js"))
const QuadraticDiophantineEquationsTypeAB = lazy(() => import("./pages/Practice/Quadratic_Diophantine_Equations_Type_ab.js"))
const QuadraticDiophantineEquationsSimpleSquareType = lazy(() => import("./pages/Practice/Quadratic_Diophantine_Equations_Simple_Square_Type.js"))
const TrigsOfSpeicalAngles = lazy(() => import("./pages/Practice/Trigs_Of_Special_Angles.js"))
const NumberOfFactors = lazy(() => import("./pages/Practice/NumberOfFactors.js"))
const RemainderOfProductsAndPowers = lazy(() => import("./pages/Practice/RemainderOfProductsAndPowers.js"))
const DeMoivresFormula = lazy(() => import("./pages/Practice/De_Moivres_Formula.js"))
const EuclidsTheorem = lazy(() => import("./pages/Practice/Euclids_Theorem.js"))
const PrimeFactorizationForFactorials = lazy(() => import("./pages/Practice/PrimeFactorizationForFactorials.js"))
const ArithmeticSequence = lazy(() => import("./pages/Practice/ArithmeticSequence.js"))
const RollingDice = lazy(() => import("./pages/Practice/RollingDice.js"))
const LineThroughTwoPointsSlopeOnly = lazy(() => import("./pages/Practice/LineThroughTwoPoints_SlopeOnly.js"))
const CompleteTheSquare = lazy(() => import("./pages/Practice/CompleteTheSquare.js"))
const ChineseRemainderTheorem = lazy(() => import("./pages/Practice/ChineseRemainderTheorem.js"))
const SimpleLogarithm = lazy(() => import("./pages/Practice/SimpleLogarithm.js"))
const MagicSquares = lazy(() => import("./pages/Practice/MagicSquares.js"))
const StarsAndBars = lazy(() => import("./pages/Practice/StarsAndBars.js"))
const MentalMathWithBasicAlgebra = lazy(() => import("./pages/Practice/MentalMathWithBasicAlgebra.js"))
const PerfectSquares = lazy(() => import("./pages/Practice/PerfectSquares.js"))
const Simple3Dshapes = lazy(() => import("./pages/Practice/Simple3Dshapes.js"))
const BasicSimilarTriangles = lazy(() => import("./pages/Practice/BasicSimilarTriangles.js"))
const DistanceBetweenTwoPoints = lazy(() => import("./pages/Practice/DistanceBetweenTwoPoints.js"))
const RemainderWithSpecialDivisors = lazy(() => import("./pages/Practice/RemainderWithSpecialDivisors.js"))
const NumberBaseChange = lazy(() => import("./pages/Practice/NumberBaseChange.js"))
const SimpleTrigIequality = lazy(() => import("./pages/Practice/SimpleTrigIequality.js"))
const LawOfCos = lazy(() => import("./pages/Practice/LawOfCos.js"))
const SimpleLinearDiophantineEquation = lazy(() => import("./pages/Practice/SimpleLinearDiophantineEquation.js"))
const PolynomialFactorization = lazy(() => import("./pages/Practice/PolynomialFactorization.js"))
const VietasTheorem = lazy(() => import("./pages/Practice/VietasTheorem.js"))
const AngleChase = lazy(() => import("./pages/Practice/AngleChase"))
const TrigIdentitiesII = lazy(() => import("./pages/Practice/TrigIdentitiesII"))
const BinomialTheorem = lazy(() => import("./pages/Practice/BinomialTheorem"))

const SimpleAddition = lazy(() => import("./pages/Practice/SimpleAddition.js"))
const SimpleSubtraction = lazy(() => import("./pages/Practice/SimpleSubtraction.js"))
const SimpleMultiplication = lazy(() => import("./pages/Practice/SimpleMultiplication.js"))
const SimpleDivision = lazy(() => import("./pages/Practice/SimpleDivision.js"))
const OneStepEquation = lazy(() => import("./pages/Practice/OneStepEquation.js"))
const FractionReduction = lazy(() => import("./pages/Practice/FractionReduction.js"))
const FractionAddition = lazy(() => import("./pages/Practice/FractionAddition.js"))
const Average = lazy(() => import("./pages/Practice/Average.js"))
const RoundingSquareRoot = lazy(() => import("./pages/Practice/RoundingSquareRoot.js"))
const GreatestCommonDivisor = lazy(() => import("./pages/Practice/GreatestCommonDivisor.js"))
const LeaseCommonMultiple = lazy(() => import("./pages/Practice/LeaseCommonMultiple.js"))
const MutidigitTimesOnedigit = lazy(() => import("./pages/Practice/MutidigitTimesOnedigit.js"))
const LongDivision = lazy(() => import("./pages/Practice/LongDivision.js"))
const TwoDigitTimesTwoDigit = lazy(() => import("./pages/Practice/TwoDigitTimesTwoDigit.js"))
const Percentage = lazy(() => import("./pages/Practice/Percentage.js"))
const SimpleLinearEquation = lazy(() => import("./pages/Practice/SimpleLinearEquation.js"))
const Adventure = lazy(() => import("./pages/Practice/Adventure.js"))

export function backToTop(mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

export const Copyright = () => {
    return (
        <footer id='footer'>

            <div id='footerdiv'>
                <div>
                    <img src={Logo} alt='footerlogo' style={{ width: 'max(15vw, 100px)' }}></img>
                    <Link to='/license' style={{ display: 'block' }}>
                        License
                    </Link>
                    <a href='https://github.com/happymatheducation/happymatheducation.com' target='_blank' rel='noreferrer'>
                        <i className='bi bi-github'></i>
                        {' Source'}
                    </a>
                </div>

                <div>
                    <p style={{ color: '#7E94C4', textAlign: 'center' }}>
                        Maths
                    </p>
                    <Link to='/classes'>Classes</Link>
                    <br></br>
                    <Link to='/practice'>Practice</Link>
                    <br></br>
                    <Link to='/contests'>Contests</Link>
                    <br></br>
                </div>

                <div>
                    <p style={{ color: '#7E94C4', textAlign: 'center' }}>
                        Company
                    </p>
                    <Link to='/'>Home</Link>
                    <br></br>
                    <Link to='/careers'>Careers</Link>
                    <br></br>
                    <Link to='/team'>Our Team</Link>
                    <br></br>
                </div>

            </div>

            <p style={{ marginTop: '40px' }}>
                Copyright © 2022: <a href='https://jeffrey-zang.github.io/' target='_blank' rel='noreferrer'>Jeffrey Zang</a>
            </p>

            <button className='backtotop' style={{ cursor: 'pointer' }} onClick={
                () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }>Back to Top</button>

            <br></br>
        </footer>
    )
}

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App = () => {

    AOS.init();

    return (
        <>
            <ScrollToTop />
            <NavBar />

            <Suspense fallback={<div className="lazy-preloader"></div>}>
                <div className='page'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/classes' element={<Classes />} />
                        <Route exact path='/practice' element={<Practice />} />
                        <Route exact path='/contests' element={<Contests />} />
                        <Route exact path='/license' element={<License />} />
                        <Route exact path='/careers' element={<Career />} />
                        <Route exact path='/apply' element={<Contact />} />
                        <Route exact path='/team' element={<Team />} />

                        <Route exact path='/Practice/Quadratic_Equations' element={<QuadraticEquations />} />
                        <Route exact path='/Practice/Quadratic_Diophantine_Equations_Type_ab' element={<QuadraticDiophantineEquationsTypeAB />} />
                        <Route exact path='/Practice/Quadratic_Diophantine_Equations_Simple_Square_Type' element={<QuadraticDiophantineEquationsSimpleSquareType />} />
                        <Route exact path='/Practice/Trigs_Of_Special_Angles' element={<TrigsOfSpeicalAngles />} />
                        <Route exact path='/Practice/NumberOfFactors' element={<NumberOfFactors />} />
                        <Route exact path='/Practice/RemainderOfProductsAndPowers' element={<RemainderOfProductsAndPowers />} />
                        <Route exact path='/Practice/De_Moivres_Formula' element={<DeMoivresFormula />} />
                        <Route exact path='/Practice/PrimeFactorizationForFactorials' element={<PrimeFactorizationForFactorials />} />
                        <Route exact path='/Practice/Euclids_Theorem' element={<EuclidsTheorem />} />
                        <Route exact path='/Practice/ArithmeticSequence' element={<ArithmeticSequence />} />
                        <Route exact path='/Practice/RollingDice' element={<RollingDice />} />
                        <Route exact path='/Practice/LineThroughTwoPoints_SlopeOnly' element={<LineThroughTwoPointsSlopeOnly />} />
                        <Route exact path='/Practice/CompleteTheSquare' element={<CompleteTheSquare />} />
                        <Route exact path='/Practice/ChineseRemainderTheorem' element={<ChineseRemainderTheorem />} />
                        <Route exact path='/Practice/SimpleLogarithm' element={<SimpleLogarithm />} />
                        <Route exact path='/Practice/MagicSquares' element={<MagicSquares />} />
                        <Route exact path='/Practice/StarsAndBars' element={<StarsAndBars />} />
                        <Route exact path='/Practice/MentalMathWithBasicAlgebra' element={<MentalMathWithBasicAlgebra />} />
                        <Route exact path='/Practice/PerfectSquares' element={<PerfectSquares />} />
                        <Route exact path='/Practice/Simple3Dshapes' element={<Simple3Dshapes />} />
                        <Route exact path='/Practice/BasicSimilarTriangles' element={<BasicSimilarTriangles />} />
                        <Route exact path='/Practice/DistanceBetweenTwoPoints' element={<DistanceBetweenTwoPoints />} />
                        <Route exact path='/Practice/RemainderWithSpecialDivisors' element={<RemainderWithSpecialDivisors />} />
                        <Route exact path='/Practice/NumberBaseChange' element={<NumberBaseChange />} />
                        <Route exact path='/Practice/SimpleTrigIequality' element={<SimpleTrigIequality />} />
                        <Route exact path='/Practice/LawOfCos' element={<LawOfCos />} />
                        <Route exact path='/Practice/SimpleLinearDiophantineEquation' element={<SimpleLinearDiophantineEquation />} />
                        <Route exact path='/Practice/PolynomialFactorization' element={<PolynomialFactorization />} />
                        <Route exact path='/Practice/VietasTheorem' element={<VietasTheorem />} />
                        <Route exact path='/Practice/AngleChase' element={<AngleChase />} />
                        <Route exact path='/Practice/TrigIdentitiesII' element={<TrigIdentitiesII />} />
                        <Route exact path='/Practice/BinomialTheorem' element={<BinomialTheorem />} />
                        
                        <Route exact path='/Practice/SimpleAddition' element={<SimpleAddition />} />
                        <Route exact path='/Practice/SimpleSubtraction' element={<SimpleSubtraction />} />
                        <Route exact path='/Practice/SimpleMultiplication' element={<SimpleMultiplication />} />
                        <Route exact path='/Practice/SimpleDivision' element={<SimpleDivision />} />
                        <Route exact path='/Practice/OneStepEquation' element={<OneStepEquation />} />
                        <Route exact path='/Practice/FractionReduction' element={<FractionReduction />} />
                        <Route exact path='/Practice/FractionAddition' element={<FractionAddition />} />
                        <Route exact path='/Practice/Average' element={<Average />} />
                        <Route exact path='/Practice/RoundingSquareRoot' element={<RoundingSquareRoot />} />
                        <Route exact path='/Practice/GreatestCommonDivisor' element={<GreatestCommonDivisor />} />
                        <Route exact path='/Practice/LeaseCommonMultiple' element={<LeaseCommonMultiple />} />
                        <Route exact path='/Practice/MutidigitTimesOnedigit' element={<MutidigitTimesOnedigit />} />
                        <Route exact path='/Practice/LongDivision' element={<LongDivision />} />
                        <Route exact path='/Practice/TwoDigitTimesTwoDigit' element={<TwoDigitTimesTwoDigit />} />
                        <Route exact path='/Practice/Percentage' element={<Percentage />} />
                        <Route exact path='/Practice/SimpleLinearEquation' element={<SimpleLinearEquation />} />
                        <Route exact path='/Practice/Adventure' element={<Adventure />} />
                        <Route exact path='/*' element={<Notfound />} />
                    </Routes>
                </div>
            </Suspense>

            <Copyright />
        </>
    );
}

export default App;
