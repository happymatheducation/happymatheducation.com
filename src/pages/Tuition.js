import {NavBar, Copyright} from '../App';

function Tuition() {
  console.log(window.location)
  return (
    <>    
    <NavBar/>

    <h1 style = {{marginTop: '40px', color: '#898AA6', display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '100px'}}>Tuition</h1>
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

    <Copyright/>
    </>
  );
}

export default Tuition;
