//import Classes from '../assets/classes'
import timeTable from '../HappyMath 2023Jan-Jun Timetable.png';


function Classes() {

    //var ClassList = []

    //for (let item in Classes) {
    //  let itemname = Classes[item].name
    //  let itemdesc = Classes[item].description

    //  ClassList.push(
    //    <>
    //    <button className="collapsible" id = {itemname} onClick = {
    //      () => {
    //        var me = document.getElementById(itemname)
    //        me.classList.toggle('cactive')
    //        var content = me.nextElementSibling;
    //        if (content.style.maxHeight){
    //          content.style.maxHeight = null;
    //        } else {
    //          content.style.maxHeight = content.scrollHeight + "px";
    //        }
    //      }
    //    }>{itemname}</button>
    //    <div className="content">
    //      {itemdesc}
    //    </div>
    //    </>
    //  )
    //}
    let imgNotLoading = 'Oops, the image cannot load somehow. Please contact Dr. Xu for a timeTable. His email address is xudiwaterloo@gmail.com';

    return (
        <>
            {/*<h1 style={{ textAlign: 'center', fontSize: 'max(3vw, 20px)' }}>Classes</h1>*/}
            <h1>
                All classes are held online &nbsp;
                <i className="bi bi-person-workspace"></i>
            </h1>

            <br />

            {/*ClassList*/}

            <img src={timeTable} alt={imgNotLoading} style={{ width: '80%', margin: 'auto', display: 'block' }}></img>

            <button className="collapsible" id='tuitionpart' onClick={
                () => {
                    var me = document.getElementById('tuitionpart')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Tuition</button>
            <div className='content' style={{ width: '100%', padding: '0vw 8vw 0vw 8vw' }}>
                    <br />COMC/AMC12/CSMC/Euclid/AIME: $45/hour/student
                    <br /><br />CIMC/AMC10/Cayley/Pascal/Galois/Fryer: $40/hour/student
                    <br /><br />CMGC/AMC8/Gauss8: $35/hour/student
                    <br /><br />CMO/USAMO/IMO: $100/hour/student
                    <br /><br />Python/CCC Junior: $45/hour/student
                    <br /><br />CCC Senior: $100/hour/student
                    <br /><br />One on one tutoring:
                    <br />1. Scheduled (fixed time every week) : $120 / hour, paid 7 days before the first class of each month. If the student fails to attend the scheduled class, half of the fees for the missed class will be refunded. If the teacher cancels a class, full refund for that class will be issued.
                    <br />2. Casual (Booked at least 3 days ahead): $150 / hour, can be paid right before each class.
                    <br /><br />
            </div>

            <button className="collapsible" id='policypart' onClick={
                () => {
                    var me = document.getElementById('policypart')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Policy</button>
            <div className='content' style={{ width: '100%', padding: '0vw 8vw 0vw 8vw'}}>
                    <br />1. Tuitions are paid before each term starts. If the student quits before the end of the term, no refund will be issued.
                    <br/><br/>2. Each student joining the zoom class should use the same name as during registration. If the instructor sees a name that is not on the class list, the student will be removed from the zoom meeting.
                    <br/><br/>3. If the student cannot attend a lesson, the student should inform the instructor at least 72 hours before the lesson starts, in order to get the recording of the lesson. Once the recording is sent to the student, the student should view the recording as soon as possible. The recording will only be available for a short period of time. The recording should never be shared with others without consent from Happy Math Education. Sharing the class recording without consent from Happy Math Education could result in a fine of up to $5000. If the student fails to inform the instructor at least 72 hours before the lesson starts, then the student may not get a recording for the missed lesson.
                    <br/><br/>4. Lessons cancelled due to the instructor's absence will be made up. The make-up lessons could be on a different day of the week, or on the same day of the week after the last week of the term. If make-up lessons can not be arranged, a full refund for the cancelled lesson will be issued.
                    <br/><br/>5. The instructor will encourage the students to be on time, take notes during the lesson, and submit homework. However, the instructor takes no responsibility if a student comes late, doesn't take notes, or doesn't submit homework.
                    <br /><br />
            </div>
        </>
    );
}

export default Classes;
