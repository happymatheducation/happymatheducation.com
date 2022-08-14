import React from 'react'
import Careers from '../assets/careers.json'

const Career = () => {

  var CareerList = []

  for (let item in Careers) {
    let itemname = Careers[item].name
    let itemdesc = Careers[item].description

    CareerList.push(  
      <>
      <button className="collapsible" id = {itemname} onClick = {
        () => {
          var me = document.getElementById(itemname)
          me.classList.toggle('cactive')
          var content = me.nextElementSibling;
          if (content.style.display === 'none' || !content.style.display){
            content.style.display = 'block';
          } else {
            content.style.display = 'none';
          } 
        }
      }>{itemname}</button>
      <div className="content">
        <p>{itemdesc}</p>
      </div>  
      </>
    )
  }
  
  return (
    <>

    <h1 style = {{textAlign: 'center', marginTop: '20px', fontSize: 'max(5vw, 40px)'}}>Career Opportunities</h1>
    <h1 style = {{textAlign: 'center', fontSize: 'max(2vw, 25px)'}}>
        {'To apply to any position, please send your resume to xudiwaterloo@gmail.com.\u00A0'}
    </h1>
    
    <h1 style = {{marginTop: '25px'}}>Part time opportunities</h1>
    {CareerList}
    </>
  )
}

export default Career