import logo from './logo.png';
import background from './homebackground.jpg';
import './App.css';

function App() {
  return (
    <>
    <img src = {logo} alt = 'logo' style = {{display: 'block', marginLeft: 'auto', marginTop: '5px', marginRight: 'auto'}}></img>

    <div className="container" style = {{display: 'flex', justifyContent: 'space-between', backgroundColor: '', width: 'max-content', marginTop: '5px', padding: '10px', marginBottom: '5px', borderWidth: '5px', borderColor: '#51557E', borderStyle: 'solid'}}>
      <button className='btn' style = {{padding: '', display: 'inline', justifySelf: 'center', marginRight: '50px'}}>HOME</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginRight: '50px'}}>TUITION & POLICY</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginRight: '50px'}}>ULTIMATE PRACTICE</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginRight: '50px'}}>CAREER</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginRight: '50px'}}>CONTACT</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginLeft: '', marginBottom: '0px'}}>OUR TEAM</button>
    </div>

    <div style = {{position: 'relative', textAlign: 'center'}}>
      <img src = {background} alt = 'background' style = {{height: '500px', border: '10px solid #51557E', borderRadius: '20px', width: '60%', display: 'block', marginLeft: 'auto', marginTop: '70px', marginRight: 'auto'}}></img>
      <div class='centered' style = {{textAlign: 'center'}}>
        <h1 style = {{marginTop: '150px', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: '70px'}}>Happy Math Education</h1>
        <h1 style = {{color: '#fff', whiteSpace: 'nowrap', textAlign: 'center', fontSize: '30px'}}>Our mission: to help kids enjoy maths</h1>
      </div>
    </div>

    <div className = 'container' style = {{marginTop: '70px', display: 'flex', justifyContent: 'space-between', width: '100%', borderRadius: '0px', backgroundColor: '#51557E', marginBottom: '0px'}}>
      <h1 style = {{display: 'inline', color: 'azure', fontSize: '30px', justifyContent: 'left'}}>
        Copyright © 2022: Jeffrey Zang
      </h1>
      <button className = 'btn' style = {{borderWidth: '5px', borderColor: '#fff'}} onClick = {
        () => {window.open('https://github.com/jeffrey-zang/happy-math-education')}
      }>
        Source
        <i class={'bi bi-github'} style={{ fontSize: 20 }}></i>
      </button>
    </div>
    </>
  );
}

export default App;
