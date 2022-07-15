import logo from './logo.png';
import background2 from './background2.png';

import {React, useRef} from "react";
import root from './index.js';
import Tuition from './pages/Tuition';

export const NavBar = () => {

  const reference = useRef(null);
    
  return(
  <>
  <img src = {logo} alt = 'logo' style = {{display: 'block', marginLeft: 'auto', marginTop: '5px', marginRight: 'auto'}}></img>
  <div ref={reference} className="topnav" style = {{zIndex: '6969', position: 'sticky', top: -1, backgroundColor: '#51557E', marginTop: '5px', padding: '5px 10px', marginBottom: '5px', borderWidth: '3px', borderColor: '#51557E', borderStyle: 'solid', borderRadius: '0px'}}>
    <button className='btnnavbar' style = {{padding: '', justifySelf: 'center', marginRight: '30px'}} onClick = {
      () => {
        root.render(
          <App/>
        )
      }
    }>HOME</button>
    <button className='btnnavbar' style = {{marginRight: '30px'}} onClick = {
      () => {
        root.render (
          <Tuition/>
        )          
      }    
    }>TUITION & POLICY</button>
    <button className='btnnavbar' style = {{marginRight: '30px'}}>ULTIMATE PRACTICE</button>
    <button className='btnnavbar' style = {{marginRight: '30px'}}>MATH CONTESTS</button>
    <button className='btnnavbar' style = {{marginRight: '30px'}}>CAREER</button>
    <button className='btnnavbar' style = {{marginRight: '30px'}}>CONTACT</button>
    <button className='btnnavbar' style = {{marginLeft: '', marginBottom: '0px', float: 'right'}}>OUR TEAM</button>
</div>
</>
  )
}

export const Copyright = () => {
  return (
    <div className = 'container' style = {{backgroundColor: '#51557E',marginTop: '70px', display: 'flex', justifyContent: 'space-between', width: '100%', borderRadius: '0px', marginBottom: '0px'}}>
      <h1 style = {{display: 'inline', color: '#fff', fontSize: '30px', justifyContent: 'left'}}>
        Copyright © 2022: Jeffrey Zang
      </h1>
      <button hover = {{background: '#51557E', color: '#fff'}} className = 'btn' style = {{fontSize: '25px', borderWidth: '3px', borderColor: '#fff', marginTop: '0px'}} onClick = {
        () => {window.open('https://github.com/jeffrey-zang/happy-math-education')}
      }>
        {'Source '}
        <i class={'bi bi-github'} style={{ fontSize: 25 }}></i>
      </button>
  </div>
  )
}

function App() {
  console.log(window.location)
  return (
    <>    
    <NavBar/>

    <div style = {{position: 'relative', textAlign: 'center'}}>
      <img src = {background2} alt = 'background' style = {{height: '600px', border: '15px solid #51557E', borderRadius: '20px', width: '70%', display: 'block', marginLeft: 'auto', marginTop: '50px', marginRight: 'auto'}}></img>
      <div class='centered' style = {{textAlign: 'center'}}>
        <h1 style = {{marginTop: '120px', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: '80px'}}>Happy Math Education</h1>
        <h1 style = {{color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: '40px'}}>Our mission: to help kids enjoy maths</h1>
      </div>
    </div>

    <div className = 'container' style = {{}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'block', justifyContent: 'center'}}>Tuition</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '30px', marginTop: '20px'}}>{'View Details '}
      <i class={'bi bi-text-left'} style={{ fontSize: 30 }}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '25px', color: ''}}>Hourly rates for math contest, CCC, and private lessons</h1>
    </div>

    <div className = 'container' style = {{}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'block', justifyContent: 'center'}}>Career</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '30px', marginTop: '20px'}}>{'View Opportunities '}
      <i class={'bi bi-clipboard-check'} style={{ fontSize: 30 }}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '25px', color: ''}}>Opportunities for full-time, part-time, co-op, and volunteering</h1>
    </div>

    <div className = 'container' style = {{}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'block', justifyContent: 'center'}}>Our Team</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '30px', marginTop: '20px'}}>{'View '}
      <i class={'bi bi-person-circle'} style={{ fontSize: 30 }}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '25px', color: ''}}>Our trusted employees and their experience</h1>
    </div>

    <Copyright/>

    </>
  );
}

export default App;
