import React from 'react'
import background2 from '../background2.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();
  AOS.init({
    duration:800
  });

  return (
    <>
    <div style = {{position: 'relative', textAlign: 'center'}}>
      <img src = {background2} alt = 'background' style = {{ buserSelect: 'none', WebkitUserSelect: 'none', border: '0px solid #7e94c4', borderRadius: '0px', width: '100%', display: 'block', marginLeft: 'auto', marginTop: '-10px', marginRight: 'auto'}}></img>
      <div class='centered' style = {{textAlign: 'center'}}>
        <h1 style = {{animationDuration: '2s', marginTop: '10%', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: 'max(8vw, 30px)'}}>
          Happy Math Education
        </h1>
        <h1 style = {{fontWeight: 'lighter', animationDuration: '2s', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: 'max(5vw, 30px)', lineHeight: '110%'}}>
          Our mission: to help<br></br>kids <h1 className = 'gradient' style = {{display: 'inline', fontWeight: 900, fontSize: '5vw'}}>enjoy</h1> maths
        </h1>
      </div>
    </div>
    
    <div data-aos = 'fade-up' style = {{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '30px'}}>
      <h1 style = {{ color: '#000', fontSize: '4vw', display: 'block', justifyContent: 'center'}}>Tuition</h1>
      <button className = 'btn' style = {{height: '0%', fontSize: '2vw', marginTop: '1.5vw'}} onClick = {
        () => {
          navigate('/tuition')
        }}>{'View Details '}
        <i class={'bi bi-text-left'} style={{ fontSize: '2vw' }}></i>
      </button>
    </div>
    <h1 style = {{fontSize: '2vw', width: '100%'}}>Hourly rates for math contest, CCC, and private lessons</h1>
      
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