
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
    <div className = 'container' style = {{position: 'sticky', marginBottom: '-99999px', backgroundColor: '#51557E',marginTop: '70px', display: 'flex', justifyContent: 'space-between', width: '100%', borderRadius: '0px', marginBottom: '0px'}}>
      <h1 style = {{display: 'inline', color: '#fff', fontSize: '2vw', justifyContent: 'left'}}>
        Copyright © 2022: Jeffrey Zang
      </h1>
      <button hover = {{background: '#51557E', color: '#fff'}} className = 'btn' style = {{borderColor: '#fff', marginTop: '0px', fontSize: '1.75vw'}} onClick = {
        () => {window.open('https://github.com/jeffrey-zang/happy-math-education')}
      }>
        {'Source '}
        <i class={'bi bi-github'} style={{ fontSize: '1.75vw' }}></i>
      </button>
    </div>
    </footer>
  )
}

const App = () => {
  return (
    <>    
    <NavBar/>

    <Routes>
      <Route path = '/home' element = {<Home/>}/>
      <Route path = '/tuition' element = {<Tuition/>}/>
      <Route path = '/practice' element = {<Practice/>}/>
      <Route path = '/contests' element = {<Contests/>}/>
      <Route path = '/careers' element = {<Career/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/team' element = {<Team/>}/>
    </Routes>

    </>
  );
}

export default App;
