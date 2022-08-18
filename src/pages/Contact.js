import {React} from 'react'
import { useNavigate } from 'react-router-dom'

import teacher from '../assets/teacher.svg' 

const Contact = () => {
  let navigate = useNavigate();

  return (
    <div className = 'home'>

      <div style = {{textAlign: 'center', display: 'block', marginTop: '0px'}}>
        <h1>Apply</h1>
        <p>
          To apply to any of our <a onClick = {
            () => {
              navigate('/classes')
            }
          }>courses</a>, please contact Dr. Xu using one of the following methods:
          <br></br>
          <br></br>
          <p style = {{fontWeight: 'bold', fontSize: 'max(2.5vw, 25px)'}}>Phone: 519-729-5631</p>
          <p style = {{fontWeight: 'bold', fontSize: 'max(2.5vw, 25px)'}}>Email: xudiwaterloo@gmail.com</p>
          <br></br>and include your name, age, and the course you will like to take.
        </p>
        <img src = {teacher} alt = 'teacherimg' style = {{marginTop: '5%'}}></img>
      </div>

    </div>
  )
}

export default Contact