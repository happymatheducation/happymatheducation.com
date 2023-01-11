import { React } from 'react'
import teacher from '../assets/teacher.svg'

const Contact = () => {

    return (
        <div className='home'>
            <div style={{ animationName: 'fadeInLeft', animationDuration: '1.5s', animationTimingFunction: 'ease', marginTop: '-3%' }}>
                <div className='textblock'>
                    <h2>Contact</h2>
                    <p> To apply to any of our <a href='/Classes'>course</a>, please email Dr. Xu directly:<br />
                        <h2>xudiwaterloo@gmail.com</h2>
                        including your name, grade level, and the course you would like to take. Please also list all the past math contest awards if any.
                    </p>
                </div>
                <img src={teacher} alt='teacherimg'></img>
            </div>
        </div>
    )
}

export default Contact