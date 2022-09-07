import React from 'react'
import Careers from '../assets/careers'

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
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        }
      }>{itemname}</button>
      <div className="content">
        {itemdesc}
      </div>  
      </>
    )
  }
  
  return (
    <>

    <h1 style = {{textAlign: 'center', fontSize: 'max(3vw, 30px)'}}>Career Opportunities</h1>
    <h1 style = {{textAlign: 'center', fontSize: 'max(1.5vw, 15px)', padding: '0vw 3vw 0vw 3vw'}}>
        To apply to any position, please send your resume to <a href = "mailto: xudiwaterloo@gmail.com">xudiwaterloo@gmail.com</a>.
    </h1>
    
    <div style = {{height: '25px'}}></div>
    {CareerList}
    </>
  )
}

export default Career