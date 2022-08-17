import React from 'react'
import img from '../assets/404.svg'

const Notfound = () => {
  return (
    <div className = 'home'>
        <div style = {{display: 'block', marginTop: '0px', textAlign: 'center'}}>
        <h1>
            404
        </h1>
        <p>
            Page not found
            <br></br>
            <a href = '/'>Back to Home</a>
        </p>
        <img src = {img} alt = 'img'></img>
        </div>
    </div>
  )
}

export default Notfound