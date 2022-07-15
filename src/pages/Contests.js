import {NavBar, Copyright} from '../App';

function Contests() {

  return (
    <>    
    <NavBar/>

    <h1 style = {{marginTop: '20px', color: '#898AA6', display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '120px', textAlign: 'center'}}>Math Contests</h1>
    <h1 style = {{color: '#748DA6', fontSize: '30px', textAlign: 'center', marginTop: '-20px'}}>
      {'Select your grade: \u00A0'}
    </h1> 

    <Copyright/>
    </>
  );
}

export default Contests;
