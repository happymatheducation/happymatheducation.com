import logo from './logo.png';
import background2 from './background2.png';

import {React} from "react";
import root from './index.js';

import Tuition from './pages/Tuition';
import Practice from './pages/Practice';
import Contests from './pages/Contests';
import Career from './pages/Career'
import Contact from './pages/Contact';

export const NavBar = () => {

  return(
  <>
  <img src = {logo} alt = 'logo' style = {{display: 'block', marginLeft: 'auto', marginTop: '5px', marginRight: 'auto'}}></img>
  <div className="topnav" style = {{zIndex: '6969', position: 'sticky', top: -1, backgroundColor: '#51557E', marginTop: '5px', padding: '5px 10px', marginBottom: '5px', borderWidth: '3px', borderColor: '#51557E', borderStyle: 'solid', borderRadius: '0px'}}>
  
    <button className='btnnavbar' style = {{padding: '', justifySelf: 'center', marginRight: '30px'}} onClick = {
      () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera        
        root.render(
          <App/>
        )
      }
    }>{'HOME '}
      {/* <i class="bi bi-house-fill"></i> */}
    </button>
    
    <button className='btnnavbar' style = {{marginRight: '30px'}} onClick = {
      () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera        
        root.render (
          <Tuition/>
        )          
      }    
    }>TUITION & POLICY</button>
   
    <button className='btnnavbar' style = {{marginRight: '30px'}} onClick = {
      () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera        
        root.render(
          <Practice/>
        )
      }
    }>ULTIMATE PRACTICE</button>

    <button className='btnnavbar' style = {{marginRight: '30px'}} onClick = {
      () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera        
        root.render(
          <Contests/>
        )
      }
    }>MATH CONTESTS</button>
    <button className='btnnavbar' style = {{marginRight: '30px'}} onClick = {
      () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera        
        root.render(
          <Career/>
        )
      }
    }>CAREERS</button>
    <button className='btnnavbar' style = {{marginRight: '30px'}} onClick = {
      () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera        
        root.render(
          <Contact/>
        )
      }
    }>CONTACT</button>
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
  return (
    <>    
    <NavBar/>

    <div style = {{position: 'relative', textAlign: 'center'}}>
      <img src = {background2} alt = 'background' style = {{ border: '0px solid #51557E', borderRadius: '0px', width: '100%', display: 'block', marginLeft: 'auto', marginTop: '-10px', marginRight: 'auto'}}></img>
      <div class='centered' style = {{textAlign: 'center'}}>
        <h1 style = {{animationName: 'fadeIn', animationDuration: '3s', marginTop: '150px', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: '700%'}}>Happy Math Education</h1>
        <h1 style = {{fontWeight: 'lighter', animationName: 'slideUp', animationDuration: '2s', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: '80px', lineHeight: '80px'}}>
          Our mission: to help<br></br>kids <h1 className = 'gradient' style = {{display: 'inline', fontWeight: 900, fontSize: '80px'}}>enjoy</h1> maths
        </h1>
      </div>
    </div>

    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

    <div className = 'container' style = {{}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{ color: '#51557E', fontSize: '60px', display: 'block', justifyContent: 'center'}}>Tuition</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '30px', marginTop: '20px'}} onClick = {
        () => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera        
          root.render (
            <Tuition/>
          )
        }}>{'View Details '}
      <i class={'bi bi-text-left'} style={{ fontSize: 30 }}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '25px', color: ''}}>Hourly rates for math contest, CCC, and private lessons</h1>
    </div>

    <div className = 'container' style = {{}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'block', justifyContent: 'center'}}>Career</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '30px', marginTop: '20px'}} onClick = {
        () => {
          root.render (
            <Career/>
          )
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera        
        }
      }>{'View Opportunities '}
      <i class={'bi bi-clipboard-check'} style={{ fontSize: 30 }}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '25px', color: ''}}>Opportunities for full-time, part-time, co-op, and volunteering</h1>
    </div>

    <div className = 'container' style = {{}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'block', justifyContent: 'center'}}>Our Team</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '30px', marginTop: '20px'}}>{'Meet the Team '}
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
