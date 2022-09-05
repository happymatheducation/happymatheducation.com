import React from 'react'

import Xu from '../portraits/xu.jpg';
import Hook from '../portraits/hook.jpg';
import Zhou from '../portraits/zhou.jpg';

const Team = () => {

  return (
    <>

    <div className='home'>

        <div style = {{marginTop: '20px'}}>

            <div className = 'textblock'>
              <h1>Dr. Di Xu</h1>
              <p>
                Principal<br></br><br></br>
                Dr. Xu is the founder and principal of Happy Math Education. He has a PhD at the University of Waterloo. 
                <br></br>Pictured holding his PhD diploma.
              </p>
            </div>

            <img className='homeimg team' src = {Xu} alt = 'xu' style = {{marginTop: '30px'}}></img>

        </div>

        <div style = {{marginTop: '20vh'}}>

          <div className = 'textblock'>
            <h1>Dr. Sherry P.-Y Zhou</h1>
            <p>
              Vice Principal<br></br><br></br>
              Dr. Zhou graduated from The Hong Kong Polytechnic University with a PhD in Computer Science. She also has a Master's degree in Computer Science at the University of Waterloo, PostDoc. She is the second class award winner of Contemporary Undergraduate Mathematical Contest in Modelling.
            </p>
          </div>

          <img className='homeimg team' src = {Zhou} alt = 'zhou'></img>

        </div>

        <div style = {{marginTop: '20vh'}}>

          <div className = 'textblock'>
            <h1>Dr. Michael Hook</h1>
            <p>
              Professor<br></br><br></br>
              Dr. Hook is a UWaterloo Engineering Ph.D., Science Master, and Mathematics Bachelor. He is an Euclid Gold Medalist and a teaching assistant for 10 undergraduate courses in math, physics, and engineering at the UWaterloo.
            </p>
          </div>

          <img className='homeimg team' src = {Hook} alt = 'hook'></img>

          </div>

      </div>

    </>
  )
}

export default Team