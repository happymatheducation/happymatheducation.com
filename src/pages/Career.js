import React from 'react'

const Career = () => {

  var coll = document.getElementsByClassName("collapsible");
  var i;

  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var content = document.getElementById(this.id + 'content')
  //     console.log(content.style.display)
  //     if (content.style.display === "block") {
  //       content.style.display = "none";
  //     } else {
  //       content.style.display = "block";
  //     }
  //   });
  // }

  return (
    <>

    <h1 style = {{textAlign: 'center', marginTop: '20px', fontSize: 'max(5vw, 40px)'}}>Career Opportunities</h1>
    <h1 style = {{textAlign: 'center', fontSize: 'max(2vw, 25px)'}}>
        {'To apply to any position, please send your resume to xudiwaterloo@gmail.com.\u00A0'}
    </h1>
    
    <button className="collapsible" id = 'teachercollapsible'>Open Collapsible</button>
    <div className="collapsiblecontent" id = 'teachercollapsiblecontent'>
      <p>Lorem ipsum... AAAAAAAA</p>
    </div>
    </>
  )
}

export default Career