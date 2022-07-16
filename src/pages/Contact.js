import React from 'react'
import {NavBar, Copyright} from '../App'

const Contact = () => {
  return (
    <>
    <NavBar/>

    <h1 style = {{marginTop: '20px', color: '#898AA6', display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '120px', textAlign: 'center'}}>Contact</h1>
    <div className = 'container'><h1 style = {{color: '#000', fontSize: '40px', textAlign: 'center', marginTop: '-20px'}}>
        Dr. Di Xu
        <br></br>
        Phone: 519-729-5631
        <br></br>
        Email: xudiwaterloo@gmail.com
    </h1></div>

    <Copyright/>
    </>
  )
}

export default Contact