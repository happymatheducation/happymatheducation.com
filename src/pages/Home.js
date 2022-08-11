import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import homeimg from '../assets/home.png'
import teaching from '../assets/teaching.svg'
import learning from '../assets/learning.svg'

import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();
  AOS.init({
    duration:800
  });

  return (
    <>
    <div className = 'homediv' style = {{animationName: 'fadeInLeft', animationDuration: '2s', animationTimingFunction: 'ease'}}>
      <div style = {{marginTop: '10vh'}}>
      <h1 style = {{color: '#000', whiteSpace: 'nowrap', fontSize: 'max(4.5vw, 40px)'}}>
        Happy Math Education
      </h1>
      <h1 style = {{width: '100%', fontWeight: 'lighter', animationDuration: '2s', color: '#000', wordWrap: 'auto', whiteSpace: 'nowrap', fontSize: 'max(2.5vw, 25px)'}}>
        Our mission: to help kids <h1 className = 'gradient' style = {{display: 'inline', fontWeight: 900, fontSize: 'inherit'}}>enjoy</h1> maths
      </h1>
      <button className = 'btn'>
        <i class = 'bi bi-person-fill'></i>
        {' Get Started'}
      </button>
      </div>
      <img className = 'homeimg' src = {homeimg} alt = 'homeimg'></img>
    </div>
    
    <div data-aos = 'fade-up' className = 'homediv' style = {{marginTop: '20%', textAlign: 'right'}}>
      <img src = {teaching} alt = 'teaching' className = 'homeimg'></img>
      <div>
      <h1 style = {{ color: '#000', fontSize: '4vw', display: 'block', justifyContent: 'center'}}>About Us</h1>
      <h1 style = {{width: '100%', fontWeight: 'lighter', animationDuration: '2s', color: '#000', wordWrap: 'normal', fontSize: 'max(2.5vw, 25px)', lineHeight: '105%'}}>
        Happy Math Education is a tutoring service specializing in math and coding contests
      </h1>
      </div>
    </div>
      
    <div data-aos = 'fade-up' className = 'homediv' style = {{marginTop: '20%'}}>
      <div>
      <h1 style = {{color: '#000', fontSize: '4vw', display: 'block', justifyContent: 'center'}}>Tuition</h1>
      <h1 style = {{width: '100%', fontWeight: 'lighter', animationDuration: '2s', color: '#000', wordWrap: 'normal', fontSize: 'max(2.5vw, 25px)', lineHeight: '105%'}}>
        Cost options for math, coding, and private lessons
      </h1>
      <button className = 'btn' onClick = {
        () => {
          navigate('/tuition')
        }
      }>
        <i class = 'bi bi-search'></i>
        {' Explore'}
      </button>
      </div>
      <img src = {learning} alt = 'teaching' className = 'homeimg'></img>
    </div>

    <div data-aos = 'fade-up' className = 'homediv' style = {{marginTop: '20%', textAlign: 'right'}}>
      <img src = {teaching} alt = 'teaching' className = 'homeimg'></img>
      <div>
      <h1 style = {{ color: '#000', fontSize: '4vw', display: 'block', justifyContent: 'center'}}>Our Team</h1>
      <h1 style = {{width: '100%', fontWeight: 'lighter', animationDuration: '2s', color: '#000', wordWrap: 'normal', fontSize: 'max(2.5vw, 25px)', lineHeight: '105%'}}>
        Our trusted professors and their experience
      </h1>
      <button className = 'btn' onClick = {
        () => {
          navigate('/team')
        }
      }>
        <i class = 'bi bi-people-fill'></i>
        {' View'}
      </button>
      </div>
    </div>

    </>
  )
}

export default Home