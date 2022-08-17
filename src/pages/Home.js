import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import homeimg from '../assets/home.png'
import teaching from '../assets/teaching.svg'
import learning from '../assets/learning.svg'
import math from '../assets/math.svg'

import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();
  AOS.init({
    duration:800
  });

  return (
    <>
    <div className = 'home'>

    <div style = {{animationName: 'fadeInLeft', animationDuration: '1.5s', animationTimingFunction: 'ease', marginTop: '-3%'}}>

      <div className = 'textblock'>
      <h1>
        Happy Math Education
      </h1>
      <p>
        Our mission: to help kids <h1 className = 'gradient' style = {{display: 'inline', fontWeight: 900, fontSize: 'inherit'}}>enjoy</h1> maths
      </p>
      <button className = 'btn' onClick = {
        () => {
          navigate('/getstarted')
        }
      }>
        <i class = 'bi bi-person-fill'></i>
        {' Apply'}
      </button>
      </div>

      <img src = {homeimg} alt = 'homeimg'></img>
    </div>
    
    <div data-aos = 'fade-up'>

      <div className = 'textblock'>
      <h1>About Us</h1>
      <p>
        Happy Math Education is a tutoring service specializing in math and coding contests. We offer classes from grades 8 to 12, taught online.
      </p>
      </div>

      <img src = {teaching} alt = 'teaching' ></img>

    </div>
      
    <div data-aos = 'fade-up'>
      <div className = 'textblock'>
      <h1>Classes</h1>
      <p>
        Tuition and information for math, coding, and private lessons
      </p>
      <button className = 'btn' onClick = {
        () => {
          navigate('/tuition')
        }
      }>
        <i class = 'bi bi-search'></i>
        {' Explore'}
      </button>
      </div>
      <img src = {learning} alt = 'teaching' ></img>
    </div>

    <div data-aos = 'fade-up'>
      <div className = 'textblock'>
      <h1>Our Team</h1>
      <p>
        Our trusted professors and their experience
      </p>
      <button className = 'btn' onClick = {
        () => {
          navigate('/team')
        }
      }>
        <i class = 'bi bi-people-fill'></i>
        {' View'}
      </button>
      </div>
      <img src = {teaching} alt = 'teaching' ></img>
    </div>

    <div data-aos = 'fade-up' style = {{textAlign: 'center', display: 'block'}}>
      <img src = {math} alt = 'teaching'></img>

      <h1 style = {{ fontSize: 'max(3vw, 20px)', display: 'block', textAlign: 'center'}}>Propel your math to the next level</h1>
      <button className = 'btn' onClick = {
        () => {
          navigate('/apply')
        }
      }>
        {'Apply '}
        <i class = 'bi bi-arrow-right'></i>
      </button>
      </div>

    </div>

    </>
  )
}

export default Home