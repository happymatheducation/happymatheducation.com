import React from 'react'
import {NavBar, Copyright, backToTop, BackToTopButton} from '../App'

const Career = () => {

  window.onscroll = function() {backToTop(document.getElementById('backtotop'))};

  return (
    <>
    <NavBar/>

    <h1 style = {{color: '#748DA6', fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        {'To apply to any position, please send your resume to xudiwaterloo@gmail.com.\u00A0'}
    </h1>

    <h1 style = {{color: '#898AA6', display: 'flex', justifyContent: 'center', fontSize: '8vw'}}>Career Opportunities</h1>
    
    <div className = 'container' style = {{backgroundColor: '#D6EFED',width: '800px',}}>
      <h1 style = {{color: '#51557E', fontSize: '80px', display: 'flex', justifyContent: 'center'}}>Teacher</h1>
      <h1 style = {{color: '#748DA6', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        {'Part-time opportunity\u00A0'}
        <i class="bi bi-clock-history"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '30px', display: 'flex', justifyContent: 'center', display: 'inline'}}>
          {'\u00A0Starts at $50/hour\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {'To deliver classes. Training will be provided.\u00A0'}
      </h1>
    </div>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '800px'}}>
      <h1 style = {{color: '#51557E', fontSize: '80px',  display: 'flex', justifyContent: 'center'}}>Software Enginner</h1>
      <h1 style = {{color: '#748DA6', fontSize: '30px',  display: 'flex', justifyContent: 'center'}}>
        {'Part-time opportunity\u00A0'}
        <i class="bi bi-clock-history"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '30px',  display: 'flex', justifyContent: 'center', display: 'inline'}}>
          {'\u00A01 opening\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {'Website development. Training will be provided. \u00A0'}
      </h1>
    </div>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '800px'}}>
      <h1 style = {{color: '#51557E', fontSize: '80px',  display: 'flex', justifyContent: 'center'}}>Secretary</h1>
      <h1 style = {{color: '#748DA6', fontSize: '30px',  display: 'flex', justifyContent: 'center'}}>
        {'Full-time opportunity\u00A0'}
        <i class="bi bi-clock-fill"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '30px',  display: 'flex', justifyContent: 'center', display: 'inline'}}>
          {'\u00A01 opening\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {"To work closely with the director. Tasks include marketing, coordinating, documenting, answering parents' questions, sending notifications, maintaining social media pages and book stores, write various documents, helping run events, organizing math contests, etc. Training will be provided.  \u00A0"}
      </h1>
    </div>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '800px'}}>
      <h1 style = {{color: '#51557E', fontSize: '70px',  display: 'flex', justifyContent: 'center'}}>Teaching Assistance</h1>
      <h1 style = {{color: '#748DA6', fontSize: '30px',  display: 'flex', justifyContent: 'center'}}>
        {'Temporary co-op opportunity\u00A0'}
        <i class="bi bi-clock-history"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '30px',  display: 'flex', justifyContent: 'center',}}>
          {'\u00A01 opening\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {"To prepare and to mark homework, quizzes, and mock contests. Need to know how to use Latex. Training will be provided.   \u00A0"}
      </h1>
    </div>    

    <h1 style = {{color: '#898AA6', display: 'flex', justifyContent: 'center', fontSize: '7vw'}}>Volunteering Opportunities</h1>
    <div className = 'container' style = {{backgroundColor: '#D6EFED', width: '800px'}}>
    <h1 style = {{color: '#51557E', fontSize: '80px',  display: 'flex', justifyContent: 'center'}}>Problem Designer</h1>
      <h1 style = {{color: '#748DA6', fontSize: '30px',  display: 'flex', justifyContent: 'center'}}>
        {'Part-time opportunity\u00A0'}
        <i class="bi bi-clock-history"></i>      
        <h1 style = {{color: '#748DA6', fontSize: '30px',  display: 'flex', justifyContent: 'center',}}>
          {'\u00A01 opening\u00A0'}
        </h1>
      </h1>
      <h1 style = {{color: '', fontSize: '20px', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {'To prepare "The ultimate practice" sets of problems. Need to know how to use Latex. Training will be provided.\u00A0'}
      </h1>
    </div>  

    <BackToTopButton/>

    <Copyright/>
    </>
  )
}

export default Career