import {React} from 'react'

import teacher from '../assets/teacher.svg' 

const Contact = () => {
  return (
    <>

      <div className = 'homediv' style = {{textAlign: 'center', display: 'block'}}>
        <h1 style = {{fontSize: 'max(4.5vw, 40px)'}}>Apply</h1>
        <h1 style = {{width: '100%', fontWeight: 'lighter', wordWrap: 'auto', fontSize: 'max(2.5vw, 25px)', lineHeight: '50px'}}>
          To apply to any of our <a href = '/tuition'>courses</a>, please contact Dr. Xu using one of the following methods:
          <br></br>
          <br></br>
          <h1 style = {{width: '100%', fontWeight: 'bold', wordWrap: 'auto', fontSize: 'max(2.5vw, 25px)'}}>Phone: 519-729-5631</h1>
          <h1 style = {{width: '100%', fontWeight: 'bold', wordWrap: 'auto', fontSize: 'max(2.5vw, 25px)'}}>Email: xudiwaterloo@gmail.com</h1>
          <br></br>and include your name, age, and the course you will like to take.
        </h1>
        <img src = {teacher} alt = 'teacherimg' className = 'homeimg' style = {{marginTop: '5%'}}></img>
      </div>

    </>
  )
}

export default Contact