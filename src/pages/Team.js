import React from 'react'

import Xu from '../portraits/xu.jpg';
import Hook from '../portraits/hook.jpg';
import Zhou from '../portraits/zhou.jpg';

const Team = () => {

  return (
    <>

    <h1 style = {{textAlign: 'center', fontSize: 'max(5vw, 40px)', }}>Our Team</h1>
    <h1 style = {{marginBottom: '30px', width: '100%', fontWeight: 'lighter', wordWrap: 'normal', fontSize: 'max(2.5vw, 25px)', textAlign: 'center'}}>
        Our trusted professors and their experience
    </h1>

    <img alt = 'xu' src={Xu} style = {{width: '35%', border: '10px #6271e2 solid', borderRadius: '140px', marginLeft: '32.5%'}}></img>

    <h1 style = {{textAlign: 'center', fontSize: 'max(5vw, 40px)'}}>Dr. Di Xu</h1>
    <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 30px)',  textAlign: 'center'}}>Principal</h1>
    <h1 style = {{fontSize: '2vw', textAlign: 'center', marginTop: '10px'}}>
        {'- UWaterloo PhD, PostDoc\n'}
        <br></br>
        - Holding two meritorious awards of The Math Contest in Modelling
        <br></br>
        <br></br>
        <a href = 'https://www.linkedin.com/in/di-xu-ph-d-052b3b96/'>
            <i class = 'bi bi-linkedin'></i>
            {' LinkedIn'}
        </a>
    </h1>


    <div style = {{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>

    <div style = {{width: '50vw'}}>
        <img alt = 'xu' src={Zhou} style = {{width: '60%', border: '10px #6271e2 solid', borderRadius: '140px', marginLeft: '20%'}}></img>

        <h1 style = {{textAlign: 'center', fontSize: 'max(5vw, 40px)'}}>Dr. Sherry P.-Y Zhou</h1>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 30px)',  textAlign: 'center'}}>Vice Principal</h1>
        <h1 style = {{fontSize: '2vw', textAlign: 'center', marginTop: '10px'}}>
            The Hong Kong Polytechnic University Computer Science PhD, Master
            UWaterloo Computer Science Master, PostDoc
            Second class award winner of Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM)
        </h1>
    </div>

    <div style = {{width: '50vw'}}>
        <img alt = 'xu' src={Hook} style = {{width: '60%', border: '10px #6271e2 solid', borderRadius: '140px', marginLeft: '20%'}}></img>

        <h1 style = {{textAlign: 'center', fontSize: 'max(5vw, 40px)'}}>Dr. Di Xu</h1>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 30px)',  textAlign: 'center'}}>Principal</h1>
        <h1 style = {{fontSize: '2vw', textAlign: 'center', marginTop: '10px'}}>
            {'- UWaterloo PhD, PostDoc\n'}
            <br></br>
            - Holding two meritorious awards of The Math Contest in Modelling
            <br></br>
            <br></br>
            <a href = 'https://www.linkedin.com/in/di-xu-ph-d-052b3b96/'>
                <i class = 'bi bi-linkedin'></i>
                {' LinkedIn'}
            </a>
        </h1>
    </div>

    </div>

    </>
  )
}

export default Team