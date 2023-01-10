import React from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import homeimg from '../assets/home.png'
import teaching from '../assets/teaching.svg'
import learning from '../assets/learning.svg'
import math2 from '../assets/math2.svg'
import appreciation from '../assets/appreciation.svg'

const Home = () => {

    let navigate = useNavigate();
    AOS.init({
        duration: 800
    });

    return (
        <>
            <div className='home'>

                <div style={{ animationName: 'fadeInLeft', animationDuration: '1.5s', animationTimingFunction: 'ease', marginTop: '-3%' }}>

                    <div className='textblock' style={{ lineHeight: 'max(5.5vw, 50px)' }}>
                        <h1>
                            Our mission:
                            <br/>
                            To help kids <span className='gradient' style={{ display: 'inline', fontWeight: 900, fontSize: 'inherit' }}>enjoy</span> maths
                        </h1>
                        <button className='btn' onClick={
                            () => {
                                navigate('/apply')
                            }
                        }>
                            <i className='bi bi-person-fill'></i>
                            {' Apply'}
                        </button>
                    </div>

                    <img src={homeimg} alt='homeimg'></img>
                </div>

                <div data-aos='fade-up'>

                    <div className='textblock'>
                        <h1>About Us</h1>
                        <p>
                            Online Math tutoring services for grades 8 to 12 students.
                        </p>
                    </div>

                    <img src={teaching} alt='teaching' ></img>

                </div>

                <div data-aos='fade-up'>
                    <div className='textblock'>
                        <h1>Classes</h1>
                        <p>
                            Tuition and Policy
                        </p>
                        <button className='btn' onClick={
                            () => {
                                navigate('/classes')
                            }
                        }>
                            <i className='bi bi-search'></i>
                            {' Explore'}
                        </button>
                    </div>
                    <img src={learning} alt='teaching' ></img>
                </div>

                <div data-aos='fade-right' style={{ display: 'block' }}>
                    <div className='textblock'>
                        <h1>Student Testimonials</h1>
                    </div>
                    <div style={{ marginTop: '0%' }}>

                        <div className='textblock'>
                            <h1 style={{ fontSize: 'max(2vw, 14px)' }}>Charles Zhang, Grade 12</h1>
                            <p>Before I started at Happy Math, I was much less interested in math as a whole. After starting, not only did I improve in writing contests, but I also became more passionate for learning math.</p>
                        </div>

                        <img src={appreciation} alt='yes'></img>

                    </div>

                    <div style={{ marginTop: '0%' }}>
                        <div className='textblock'>
                            <h1 style={{ fontSize: 'max(2vw, 14px)', textAlign: 'center' }}>Jeffrey Zang, Grade 10</h1>
                            <p>Not only did Happy Math help me feel more confident in my math skills, it allowed me to understand math in a different way than before. I started to approach problems with a different mindset. Taking classes at Happy Math helped me score higher in contests overall.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '0%' }}>
                        <img src={math2} alt='math2'></img>
                        <div className='textblock'>
                            <h1 style={{ fontSize: 'max(2vw, 14px)', textAlign: 'center' }}>Jay Ren, Grade 12</h1>
                            <p> Happy Math is a great resource for learning contest math! It's really hard to prepare for contests by yourself, so I'm glad that I decided to take lessons here. It's a really efficient way to improve my skills.</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home