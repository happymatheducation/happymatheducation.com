import Classes from '../assets/classes'

function Tuition() {

  var ClassList = []

  for (let item in Classes) {
    let itemname = Classes[item].name
    let itemdesc = Classes[item].description

    ClassList.push(  
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

    <h1 style = {{textAlign: 'center'}}>Classes</h1>
    <h1 style = {{fontSize: 'max(2vw, 20px)', textAlign: 'center'}}>
      {'All classes are held online\u00A0'}
      <i class="bi bi-person-workspace"></i>    
    </h1>
    
    {ClassList}
    
    <h1 id = 'policypart' style = {{textAlign: 'center'}}>Policy</h1>
    <div style = {{width: '100%', padding: '0vw 8vw 0vw 8vw'}}>

      <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>
      1. Tuitions are paid before each term starts. If the student quits before the end of the term, no refund will be issued.
      <br></br><br></br>2. Each student joining the zoom class should use the same name as during registration. If the instructor sees a name that is not on the class list, the student will be removed from the zoom meeting. 
      <br></br><br></br>3. If the student cannot attend a lesson, the student should inform the instructor at least 72 hours before the lesson starts, in order to get the recording of the lesson. Once the recording is sent to the student, the student should view the recording as soon as possible. The recording will only be available for a short period of time. The recording should never be shared with others without consent from Happy Math Education. Sharing the class recording without consent from Happy Math Education could result in a fine of up to $5000. If the student fails to inform the instructor at least 72 hours before the lesson starts, then the student may not get a recording for the missed lesson.
      <br></br><br></br>4. Lessons cancelled due to the instructor's absence will be made up. The make-up lessons could be on a different day of the week, or on the same day of the week after the last week of the term. If make-up lessons can not be arranged, a full refund for the cancelled lesson will be issued. 
      <br></br><br></br>5. The instructor will encourage the students to be on time, take notes during the lesson, and submit homework. However, the instructor takes no responsibility if a student comes late, doesn't take notes, or doesn't submit homework. 
      </h1>
      
    </div>

    </>
  );
}

export default Tuition;
