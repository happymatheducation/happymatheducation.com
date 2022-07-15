import {NavBar, Copyright} from '../App';
import {useState} from 'react';

function Contests() {

  const setButtonText = useState('Click');

  return (
    <>    
    <NavBar/>

    <h1 style = {{marginTop: '20px', color: '#898AA6', display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '120px', textAlign: 'center'}}>Math Contests</h1>
    <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center', marginTop: '-20px'}}>
      {'Select your\u00A0'}
      <div class="dropdown">
        <button class="dropbtn">grade</button>
        <div class="dropdown-content">
          <a onClick = {
            () => {console.log('fart')}
          }>eight</a>
        </div>
      </div>
      {' :'}
    </h1> 

    <div className='container' style = {{display: 'none'}}></div>

    <Copyright/>
    </>
  );
}

export default Contests;
