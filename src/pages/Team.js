import React from 'react'
import { Copyright, backToTop, BackToTopButton} from '../App'
import NavBar from '../NavBar.js';

import Xu from '../portraits/xu.jpg';
import Hook from '../portraits/hook.jpg';
import Zhou from '../portraits/zhou.jpg';

const Team = () => {

  window.onscroll = function() {backToTop(document.getElementById('backtotop'))};

  return (
    <>
    <NavBar/>

    <h1 style = {{color: '#51557E', textAlign: 'center', fontSize: '6vw'}}>Dr. Di Xu</h1>
    <div style = {{display: 'flex'}}>
        <div className = 'container' style = {{width : '39%', marginLeft: '10%'}}>
            <img alt = 'xu' src={Xu} style = {{width: '100%', border: '10px #51557E solid', borderRadius: '5px'}}></img>
        </div>
        <div className = 'container' style = {{width : '39%', marginRight: '10%', float: 'right'}}>
            <h1 style = {{color: '#51557E', fontSize: '4vw',  display: 'flex', justifyContent: 'center'}}>Principal</h1>
            <h1 style = {{fontSize: '2vw'}}>
                {'- UWaterloo PhD, PostDoc\n'}
                <br></br>
                - Holding two meritorious awards of The Math Contest in Modelling
            </h1>
        </div>
    </div>

    <h1 style = {{color: '#51557E', textAlign: 'center', fontSize: '6vw'}}>Dr. Sherry P.-Y Zhou</h1>
    <div style = {{display: 'flex'}}>
        <div className = 'container' style = {{width : '39%', marginLeft: '10%'}}>
            <img alt = 'zhou' src={Zhou} style = {{width: '100%', border: '10px #51557E solid', borderRadius: '5px'}}></img>
        </div>
        <div className = 'container' style = {{width : '39%', marginRight: '10%', float: 'right'}}>
            <h1 style = {{color: '#51557E', fontSize: '4vw',  display: 'flex', justifyContent: 'center'}}>Vice Principal</h1>
            <h1 style = {{fontSize: '2vw'}}>
                {'- The Hong Kong Polytechnic University Computer Science PhD, Master\n'}
                <br></br>
                - UWaterloo Computer Science Master, PostDoc<br></br>
                - Second class award winner of Contemporary Undergraduate Mathematical Contest in Modeling<br></br>
            </h1>
        </div>
    </div>

    <h1 style = {{color: '#51557E', textAlign: 'center', fontSize: '6vw'}}>Dr. Michael Hook</h1>
    <div style = {{display: 'flex'}}>
        <div className = 'container' style = {{width : '39%', marginLeft: '10%'}}>
            <img alt = 'hook' src={Hook} style = {{width: '100%', border: '10px #51557E solid', borderRadius: '5px'}}></img>
        </div>
        <div className = 'container' style = {{width : '39%', marginRight: '10%', float: 'right'}}>
            <h1 style = {{color: '#51557E', fontSize: '4vw',  display: 'flex', justifyContent: 'center'}}>Teacher</h1>
            <h1 style = {{fontSize: '2vw'}}>
                {'- UWaterloo Engineering Ph.D., Science Master, Mathematics Bachelor\n'}
                <br></br>
                - Euclid Gold Medalist<br></br>
                - Teaching assistant for 10 undergraduate courses in math, physics, and engineering at the UWaterloo<br></br>
            </h1>
        </div>
    </div>

    <BackToTopButton/>

    <Copyright/>
    </>
  )
}

export default Team