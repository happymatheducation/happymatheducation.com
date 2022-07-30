
import {React} from "react";
import { Route, Router, Routes } from 'react-router-dom'

import NavBar from './NavBar.js';

import Tuition from './pages/Tuition';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Contests from './pages/Contests';
import Career from './pages/Career'
import Contact from './pages/Contact';
import Team from './pages/Team';

export function BackToTopButton() {
  return(
    <button id = 'backtotop' className = 'btn' style = {{position: 'sticky', bottom: '30px', left: '89%', marginBottom: '-30px', marginTop: '30px', display: 'none'}} onClick = {
      () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // document.documentElement.scrollTop = 0;  For Chrome, Firefox, IE and Opera
    }   
    }>Back to Top</button>
  )
}

export function backToTop(mybutton) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

export const Copyright = () => {
  return (
    <footer>
      <h1 style = {{display: 'inline', color: '#fff', fontSize: '1.2vw', justifyContent: 'left', fontWeight: 'lighter'}}>
        Copyright © 2022: Jeffrey Zang
      </h1>
      <a href = 'https://github.com/jeffrey-zang/happy-math-education' target = '_blank' style = {{fontSize: '1.2vw', textDecoration: 'none', color: '#fff', fontWeight: 'lighter'}}>
        <i class='bi bi-github'></i>
        {' Source'}
      </a>
    </footer>
  )
}

const App = () => {

  window.onscroll = function() {backToTop(document.getElementById('backtotop'))};

  return (
    <>    
    <NavBar/>

    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/tuition' element = {<Tuition/>}/>
      <Route path = '/practice' element = {<Practice/>}/>
      <Route path = '/contests' element = {<Contests/>}/>
      <Route path = '/careers' element = {<Career/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/team' element = {<Team/>}/>
    </Routes>

    <BackToTopButton/>
    <Copyright/>

    </>
  );
}

export default App;
