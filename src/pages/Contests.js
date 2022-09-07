
function Contests() {

  let things = []

  return (
    <>    

    <h1 style = {{textAlign: 'center', marginBottom: '10px', fontSize: 'max(3vw, 20px)', textAlign: 'center'}}>Math Contests</h1>
    
    <button className="collapsible" id = 'seven' onClick = {
      () => {
        var me = document.getElementById('seven')
        me.classList.toggle('cactive')
        var content = me.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    }>Grade 7</button>
    <div className="content">

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}>
        <i class="bi bi-thermometer-half"></i>September</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of the school year<br></br><a href='https://cariboutests.com/'>Caribou Math Contests (year-round)</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 7/8</a><br></br>
          
          <a href='https://cms.math.ca/competitions/cjmc/'>CJMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-snow"></i>January</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>{'Start of new year\n'}
          <a href='https://www.maa.org/math-competitions/amc-8'>AMC 8</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>March</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://mathkangaroo.ca/en'>Kangaroo Math Contests</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-sun"></i>May</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/gauss.html'>Gauss 7/8</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-sun"></i>June</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>{'End of school year\n'}
        </h1>
      </div>

    </div>

    <button className="collapsible" id = 'eight' onClick = {
      () => {
        var me = document.getElementById('eight')
        me.classList.toggle('cactive')
        var content = me.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    }>Grade 8</button>
    <div className="content">

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}>
        <i class="bi bi-thermometer-half"></i>September</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of the school year<br></br><a href='https://cariboutests.com/'>Caribou Math Contests (year-round)</a></h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 7/8</a><br></br>
          <a href='https://cms.math.ca/competitions/cjmc/'>CJMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-snow"></i>January</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>{'Start of new year\n'}
          <a href='https://www.maa.org/math-competitions/amc-8'>AMC 8</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>March</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://mathkangaroo.ca/en'>Kangaroo Math Contests</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-sun"></i>May</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/gauss.html'>Gauss 7/8</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-sun"></i>June</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    <button className="collapsible" id = 'nine' onClick = {
      () => {
        var me = document.getElementById('nine')
        me.classList.toggle('cactive')
        var content = me.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    }>Grade 9</button>
    <div className="content">

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}>
        <i class="bi bi-thermometer-half"></i>September</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of the school year<br></br><a href='https://cariboutests.com/'>Caribou Math Contests (year-round)</a></h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>Beaver Computing - Challenge 9/10</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 10</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CIMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-snow"></i>January</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of new year</h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-snow"></i>February</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Pascal</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>March</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://mathkangaroo.ca/en'>Kangaroo Math Contests</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>April</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Fryer</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-sun"></i>June</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    <button className="collapsible" id = 'ten' onClick = {
      () => {
        var me = document.getElementById('ten')
        me.classList.toggle('cactive')
        var content = me.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    }>Grade 10</button>
    <div className="content">

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}>
        <i class="bi bi-thermometer-half"></i>
          September
        </h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of the school year<br></br><a href='https://cariboutests.com/'>Caribou Math Contests (year-round)</a></h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}>
          <i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 9/10</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 10</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CIMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-snow"></i>January</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of new year</h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-snow"></i>February</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Cayley</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>March</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://mathkangaroo.ca/en'>Kangaroo Math Contests</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>April</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Galois</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-sun"></i>June</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    <button className="collapsible" id = 'e' onClick = {
      () => {
        var me = document.getElementById('e')
        me.classList.toggle('cactive')
        var content = me.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    }>Grade 11</button>
    <div className="content">

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}>
        <i class="bi bi-thermometer-half"></i>September</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of the school year<br></br><a href='https://cariboutests.com/'>Caribou Math Contests (year-round)</a></h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-low"></i>October</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www2.cms.math.ca/Competitions/COMC/2021/'>Canadian Open Mathematics Challenge</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 12</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CSMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-snow"></i>January</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of new year</h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>March</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://mathkangaroo.ca/en'>Kangaroo Math Contests</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-snow"></i>February</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Fermat</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>April</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Hypatia</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html'>Euclid</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-sun"></i>June</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    <button className="collapsible" id = 'tw' onClick = {
      () => {
        var me = document.getElementById('tw')
        me.classList.toggle('cactive')
        var content = me.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    }>Grade 12</button>
    <div className="content">

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}>
        <i class="bi bi-thermometer-half"></i>September</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of the school year<br></br><a href='https://cariboutests.com/'>Caribou Math Contests (year-round)</a></h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-low"></i>October</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www2.cms.math.ca/Competitions/COMC/2021/'>Canadian Open Mathematics Challenge</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 12</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CSMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-snow"></i>January</h1>
        <h1 style = {{fontSize: 'max(1.5vw, 15px)'}}>Start of new year</h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-snow"></i>February</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>March</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://mathkangaroo.ca/en'>Kangaroo Math Contests</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}><i class="bi bi-thermometer-half"></i>April</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html'>Euclid</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(2.5vw, 25px)', textAlign: 'left'}}> <i class="bi bi-thermometer-sun"></i>June</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(1.5vw, 15px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    </>
  );
}

export default Contests;
