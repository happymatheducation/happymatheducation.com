import {NavBar, Copyright} from '../App';
import {useRef} from 'react';

function Tuition() {

  const ref = useRef(null);

  function scroll(page) {
    document.getElementById(page).scrollIntoView({
      behavior: "smooth"
    });  
  };

  return (
    <>    
    <NavBar/>

    <button className = 'btn' onClick={
      () => {scroll('policypart')}
    } style = {{fontSize: '40px', display: 'block', marginTop: '30px', marginLeft: 'auto', marginRight: 'auto', width: ''}}>
      View Policy
    </button>

    <h1 style = {{marginTop: '20px', color: '#898AA6', display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '120px', textAlign: 'center'}}>Tuition</h1>
    <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center', marginTop: '-20px'}}>
      {'All classes are held online\u00A0'}
      <i class="bi bi-person-workspace"></i>    
    </h1>

    <div className = 'container'>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center'}}>Grade 11-12 Contest Classes</h1>
      <div style = {{justifyContent: 'space-between'}}>
      <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center'}}>
          {'\u00A045$/hour/student\u00A0'}
          <i class="bi bi-people-fill"></i>    
      </h1>
      <h1 style = {{display: 'inline', fontSize: '25px', color: ''}}>
        {'This class will study the following contests: '}
        <a href='https://www2.cms.math.ca/Competitions/COMC/2021/' rel = 'noreferrer' target = '_blank'>COMC</a>{', '}
        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions' rel = 'noreferrer' target = '_blank'>AMC12</a>{', '}
        <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html' rel = 'noreferrer' target = '_blank'>Euclid</a>{', '}
        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html' rel = 'noreferrer' target = '_blank'>CSMC</a>{', and '}
        <a href='https://www.maa.org/math-competitions/american-invitational-mathematics-examination-aime' rel = 'noreferrer' target = '_blank'>AIME</a>
      </h1>
      </div>
    </div>

    <div className = 'container'>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center'}}>Grade 9-10 Contest Classes</h1>
      <div style = {{justifyContent: 'space-between'}}>
      <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center'}}>
          {'\u00A040$/hour/student\u00A0'}
          <i class="bi bi-people-fill"></i>    
      </h1>
      <h1 style = {{display: 'inline', fontSize: '25px', color: ''}}>
        {'This class will study the following contests: '}
        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions' rel = 'noreferrer' target = '_blank'>AMC10</a>{', '}
        <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html' rel = 'noreferrer' target = '_blank'>Pascal/CayLey</a>{', '}
        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html' rel = 'noreferrer' target = '_blank'>CIMC</a>{', and '}
        <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html' rel = 'noreferrer' target = '_blank'>Fermat/Galois</a>
      </h1>
      </div>
    </div>

    <div className = 'container'>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center'}}>Grade 7-8 Contest Classes</h1>
      <div style = {{justifyContent: 'space-between'}}>
      <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center'}}>
          {'\u00A035$/hour/student\u00A0'}
          <i class="bi bi-people-fill"></i>    
      </h1>
      <h1 style = {{display: 'inline', fontSize: '25px', color: ''}}>
        {'This class will study the following contests: '}
        <a href='https://cms.math.ca/competitions/canada-jay-mathematical-competition-cjmc/' rel = 'noreferrer' target = '_blank'>CJMC</a>{', '}
        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions' rel = 'noreferrer' target = '_blank'>AMC8</a>{', and '}
        <a href='https://www.cemc.uwaterloo.ca/contests/gauss.html' rel = 'noreferrer' target = '_blank'>Gauss</a>{''}
      </h1>
      </div>
    </div>

    <div className = 'container'>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center'}}>Olympiad Contest Classes</h1>
      <div style = {{justifyContent: 'space-between'}}>
      <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center'}}>
          {'\u00A0100$/hour/student\u00A0'}
          <i class="bi bi-people-fill"></i>    
      </h1>
      <h1 style = {{display: 'inline', fontSize: '25px', color: ''}}>
        {'This class will study the following contests: CMO, USAMO, IMO'}
      </h1>
      </div>
    </div>

    <div className = 'container'>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center'}}>Python/CCC Junior Classes</h1>
      <div style = {{justifyContent: 'space-between'}}>
      <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center'}}>
          {'\u00A045$/hour/student\u00A0'}
          <i class="bi bi-code-slash"></i>    
      </h1>
      <h1 style = {{display: 'inline', fontSize: '25px', color: ''}}>
        {'This class will study the basic Python and CCC Junior practice questions'}
      </h1>
      </div>
    </div>

    <div className = 'container'>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center'}}>CCC Senior Classes</h1>
      <div style = {{justifyContent: 'space-between'}}>
      <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center'}}>
          {'\u00A0100$/hour/student\u00A0'}
          <i class="bi bi-code-slash"></i>    
      </h1>
      <h1 style = {{display: 'inline', fontSize: '25px', color: ''}}>
        {'This class will study advanced programming and CCC Senior practice questions'}
      </h1>
      </div>
    </div>

    <div className = 'container'>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center'}}>One-on-one private tutoring</h1>
      <div style = {{justifyContent: 'space-between'}}>
      <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center'}}>
          {'\u00A0120$/$150/hour/student\u00A0'}
          <i class="bi bi-person-fill"></i>    
      </h1>
      <h1  style = {{display: 'inline', fontSize: '25px', color: ''}}>
        1. Scheduled (fixed time every week) : $120 / hour, paid 7 days before the first class of each month. If the student fails to attend the scheduled class, half of the fees for the missed class will be refunded. If the teacher cancels a class, full refund for that class will be issued.
        <br></br>2. Casual (Booked at least 3 days ahead): $150 / hour, can be paid right before each class.
      </h1>
      </div>
    </div>
    
    <h1 id = 'policypart' style = {{marginTop: '0px', color: '#898AA6', display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '120px', textAlign: 'center'}}>Policy</h1>
    <div className = 'container'style = {{width: '80%'}}><h1 style = {{fontSize: '25px'}}>
    
    1. Tuitions are paid before each term starts. If the student quits before the end of the term, no refund will be issued.
    <br></br><br></br>2. Each student joining the zoom class should use the same name as during registration. If the instructor sees a name that is not on the class list, the student will be removed from the zoom meeting. 
    <br></br><br></br>3. If the student cannot attend a lesson, the student should inform the instructor at least 72 hours before the lesson starts, in order to get the recording of the lesson. Once the recording is sent to the student, the student should view the recording as soon as possible. The recording will only be available for a short period of time. The recording should never be shared with others without consent from Happy Math Education. Sharing the class recording without consent from Happy Math Education could result in a fine of up to $5000. If the student fails to inform the instructor at least 72 hours before the lesson starts, then the student may not get a recording for the missed lesson.
    <br></br><br></br>4. Lessons cancelled due to the instructor's absence will be made up. The make-up lessons could be on a different day of the week, or on the same day of the week after the last week of the term. If make-up lessons can not be arranged, a full refund for the cancelled lesson will be issued. 
    <br></br><br></br>5. The instructor will encourage the students to be on time, take notes during the lesson, and submit homework. However, the instructor takes no responsibility if a student comes late, doesn't take notes, or doesn't submit homework. 
    
    </h1></div>

    <Copyright/>
    </>
  );
}

export default Tuition;
