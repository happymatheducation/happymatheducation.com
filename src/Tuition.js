import logo from './logo.png';
import background from './homebackground.jpg';
import background2 from './background2.png';
import NavBar from './App';
import Copyright from './App';

function Tuition() {
  
  return (
    <>    
    <NavBar/>

    <div className = 'container' style = {{}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'block', justifyContent: 'center'}}>bruh</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '30px', marginTop: '20px'}}>{'View Details '}
      <i class={'bi bi-text-left'} style={{ fontSize: 30 }}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '25px', color: ''}}>Hourly rates for math contest, CCC, and private lessons</h1>
    </div>

    {/* <Copyright/> */}
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
    </>
  );
}

export default Tuition;
