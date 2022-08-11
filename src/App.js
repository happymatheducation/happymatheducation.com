import {React, useEffect} from "react";
import { Route, Routes, useLocation } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import NavBar from './NavBar.js';

import Tuition from './pages/Tuition';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Contests from './pages/Contests';
import Career from './pages/Career'
import Contact from './pages/Contact';
import Team from './pages/Team';
import License from './pages/License';
import { Link } from 'react-router-dom'
import Logo from './logo/logo.png';

export function backToTop(mybutton) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

export const Copyright = () => {
  return (
    <footer id = 'footer'>

      <div style = {{display: 'flex', justifyContent: 'space-between', padding: '0vw 10vw 0vw 10vw'}}>
        <div>
          <img src = {Logo} alt = 'footerlogo' style = {{width: 'max(15vw, 150px)'}}></img>
          <Link to = '/license' style = {{display: 'block'}}>
            License
          </Link>
        </div>

        <div style = {{display: 'block', textAlign: 'left'}}>
          <p style = {{color: '#7E94C4', textAlign: 'center'}}>
            Maths
          </p>
          <Link to = '/tuition'>Tuition</Link>
          <br></br>
          <Link to = '/practice'>Ultimate Practice</Link>
          <br></br>
          <Link to = '/contests'>Math Contests</Link>
          <br></br>
        </div>

        <div style = {{display: 'block', textAlign: 'left'}}>
          <p style = {{color: '#7E94C4', textAlign: 'center'}}>
            Company
          </p>
          <Link to = '/tuition'>Tuition</Link>
          <br></br>
          <Link to = '/practice'>Ultimate Practice</Link>
          <br></br>
          <Link to = '/contests'>Math Contests</Link>
          <br></br>
        </div>

      </div>

      <p style = {{marginTop: '40px'}}>
        Copyright © 2022: Happy Math Education
      </p>

      <a id = 'backtotop' style = {{cursor: 'pointer'}} onClick = {
          () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }   
      }>Back to Top</a>

      <br></br>
      <a href = 'https://github.com/jeffrey-zang/happy-math-education' target = '_blank'>
        <i class='bi bi-github'></i>
        {' Source'}
      </a>
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
    <NavBar/>

    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/tuition' element = {<Tuition/>}/>
      <Route path = '/practice' element = {<Practice/>}/>
      <Route path = '/contests' element = {<Contests/>}/>
      <Route path = '/license' element = {<License/>}/>
      <Route path = '/careers' element = {<Career/>}/>
      <Route path = '/getstarted' element = {<Contact/>}/>
      <Route path = '/team' element = {<Team/>}/>
    </Routes>

    <Copyright/>

    </>
  );
}

export default App;
