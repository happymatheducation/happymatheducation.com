import React from 'react'
import background2 from '../background2.png';
import root from '../index.js';
import Career from './Career'
import Team from './Team';

import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();
  return (
    <>
    <div style = {{position: 'relative', textAlign: 'center'}}>
      <img src = {background2} alt = 'background' style = {{ buserSelect: 'none', WebkitUserSelect: 'none', border: '0px solid #7e94c4', borderRadius: '0px', width: '100%', display: 'block', marginLeft: 'auto', marginTop: '-10px', marginRight: 'auto'}}></img>
      <div class='centered' style = {{textAlign: 'center'}}>
        <h1 style = {{animationName: 'fadeIn', animationDuration: '3s', marginTop: '10%', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: '8vw'}}>
          Happy Math Education
        </h1>
        <h1 style = {{fontWeight: 'lighter', animationName: 'slideUp', animationDuration: '2s', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: '5vw', lineHeight: '110%'}}>
          Our mission: to help<br></br>kids <h1 className = 'gradient' style = {{display: 'inline', fontWeight: 900, fontSize: '5vw'}}>enjoy</h1> maths
        </h1>
      </div>
    </div>

    <div className = 'container' style = {{width: '100%'}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
        <h1 style = {{ color: '#000', fontSize: '4vw', display: 'block', justifyContent: 'center'}}>Tuition</h1>
        <button className = 'btn' style = {{height: '0%', fontSize: '2vw', marginTop: '1.5vw'}} onClick = {
          () => {
            navigate('/tuition')
          }}>{'View Details '}
          <i class={'bi bi-text-left'} style={{ fontSize: '2vw' }}></i>
        </button>
      </div>
      <h1 style = {{fontSize: '2vw', width: '100%'}}>Hourly rates for math contest, CCC, and private lessons</h1>
    </div>

    <div className = 'container' style = {{width: '100%'}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#7e94c4', fontSize: '4vw', display: 'block', justifyContent: 'center'}}>Careers</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '2vw', marginTop: '1.5vw'}} onClick = {
        () => {
          navigate('/careers')
        }
      }>{'View Opportunities '}
      <i class={'bi bi-clipboard-check'} style={{ fontSize: '2vw' }}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '2vw', color: ''}}>Opportunities for full-time, part-time, co-op, and volunteering</h1>
    </div>

    <div className = 'container' style = {{width: '100%'}}>
      <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
      <h1 style = {{color: '#7e94c4', fontSize: '4vw', display: 'block', justifyContent: 'center'}}>Our Team</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '2vw', marginTop: '1.5vw'}} onClick = {
        () => {
          navigate('/team')
        }
      }>{'Meet the Team '}
      <i class={'bi bi-person-circle'} style= {{}}></i>
      </button>
      </div>
      <h1 style = {{fontSize: '2vw', color: ''}}>Our trusted employees and their experience</h1>
    </div>

    </>
  )
}

export default Home