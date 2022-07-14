import logo from '../logo.png';
import {NavBar, Copyright} from '../App';

function Tuition() {
  console.log(window.location)
  return (
    <>    
    <NavBar/>

    <h1 style = {{marginTop: '50px', color: '#898AA6', display: 'flex', justifyContent: 'center', fontSize: '100px'}}>Career Opportunities</h1>

    <div className = 'container' style = {{}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', display: 'block', justifyContent: 'center'}}>bruh</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '30px', marginTop: '20px'}}>{'View Details '}
      <i class={'bi bi-text-left'} style={{ fontSize: 30 }}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '25px', color: ''}}>Hourly rates for math contest, CCC, and private lessons</h1>
    </div>

    <Copyright/>
    </>
  );
}

export default Tuition;
