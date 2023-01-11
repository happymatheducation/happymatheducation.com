
function Contests() {

    return (
        <>

            <h1 >Math Contests Timeline</h1>
            {/*<h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: 'max(1vw, 14px)' }}>Click below to view</h1>*/}

            <button className="collapsible" id='seven' onClick={
                () => {
                    var me = document.getElementById('seven')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Grade 7</button>
            <div className="content">

                <div className='container'>
                    <h3>
                        <span><i class="bi bi-thermometer-half"></i>September: </span>
                        Start of G7<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 7/8</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://cms.math.ca/competitions/cjmc/'>CJMC</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i class="bi bi-thermometer-snow"></i>January: </span>
                        <a href='https://www.maa.org/math-competitions/amc-8'>AMC 8</a><br />

                        <span><i class="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a><br />

                        <span><i class="bi bi-thermometer-sun"></i>May: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/gauss.html'>Gauss 7</a><br />

                        <span><i class="bi bi-thermometer-sun"></i>June: </span>
                        End of G7
                    </h3>
                </div>


            </div>

            <button className="collapsible" id='eight' onClick={
                () => {
                    var me = document.getElementById('eight')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Grade 8</button>
            <div className="content">

                <div className='container'>
                    <h3>
                        <span><i class="bi bi-thermometer-half"></i>September: </span>
                        Start of G8<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 7/8</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://cms.math.ca/competitions/cjmc/'>CJMC</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i class="bi bi-thermometer-snow"></i>January: </span>
                        <a href='https://www.maa.org/math-competitions/amc-8'>AMC 8</a><br />

                        <span><i class="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a><br />

                        <span><i class="bi bi-thermometer-sun"></i>May: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/gauss.html'>Gauss 8</a><br />

                        <span><i class="bi bi-thermometer-sun"></i>June: </span>
                        End of G8
                    </h3>
                </div>
            </div>

            <button className="collapsible" id='nine' onClick={
                () => {
                    var me = document.getElementById('nine')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Grade 9</button>
            <div className="content">

                <div className='container'>
                    <h3>
                        <span><i class="bi bi-thermometer-half"></i>September: </span>
                        Start of G9<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 9/10</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 10</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CIMC</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i class="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Pascal</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a><br />

                        <span><i class="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a><br />

                        <span><i class="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Fryer</a><br />

                        <span><i class="bi bi-thermometer-sun"></i>June: </span>
                        End of G9
                    </h3>
                </div>

            </div>

            <button className="collapsible" id='ten' onClick={
                () => {
                    var me = document.getElementById('ten')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Grade 10</button>
            <div className="content">

                <div className='container'>
                    <h3>
                        <span><i class="bi bi-thermometer-half"></i>September: </span>
                        Start of G10<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 9/10</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 10</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CIMC</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i class="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Cayley</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a><br />

                        <span><i class="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a><br />

                        <span><i class="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Galois</a><br />

                        <span><i class="bi bi-thermometer-sun"></i>June: </span>
                        End of G10
                    </h3>
                </div>
            </div>

            <button className="collapsible" id='e' onClick={
                () => {
                    var me = document.getElementById('e')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Grade 11</button>
            <div className="content">

                <div className='container'>
                    <h3>
                        <span><i class="bi bi-thermometer-half"></i>September: </span>
                        Start of G11<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i class="bi bi-thermometer-low"></i>October: </span>
                        <a href='https://cms.math.ca/competitions/comc/'>COMC</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 12</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CSMC</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i class="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Fermat</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a><br />

                        <span><i class="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a><br />

                        <span><i class="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html'>Euclid</a><br />

                        <span><i class="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Hypatia</a><br />

                        <span><i class="bi bi-thermometer-sun"></i>June: </span>
                        End of G11
                    </h3>
                </div>
            </div>

            <button className="collapsible" id='tw' onClick={
                () => {
                    var me = document.getElementById('tw')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            }>Grade 12</button>
            <div className="content">

                <div className='container'>
                    <h3>
                        <span><i class="bi bi-thermometer-half"></i>September: </span>
                        Start of G12<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i class="bi bi-thermometer-low"></i>October: </span>
                        <a href='https://cms.math.ca/competitions/comc/'>COMC</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 12</a><br />

                        <span><i class="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CSMC</a><br />

                        <span><i class="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i class="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a><br />

                        <span><i class="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a><br />

                        <span><i class="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html'>Euclid</a><br />

                        <span><i class="bi bi-thermometer-sun"></i>June: </span>
                        End of G12
                    </h3>
                </div>
            </div>

        </>
    );
}

export default Contests;
