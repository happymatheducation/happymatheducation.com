import logo from './logo.png';
import background from './homebackground.jpg';
import './App.css';

function App() {
  return (
    <>
    <img src = {logo} alt = 'logo' style = {{display: 'block', marginLeft: 'auto', marginTop: '5px', marginRight: 'auto'}}></img>
    <hr style = {{marginTop: '10px', height: '5px', width: '80%', backgroundColor: '#51557E', marginLeft: '10%', marginRight: '10%'}}></hr>

    <div className="container" style = {{display: 'flex', justifyContent: 'space-between', backgroundColor: '', width: 'max-content', marginTop: '5px', padding: '5px', marginBottom: '5px'}}>
      <button className='btn' style = {{padding: '', display: 'inline', justifySelf: 'center', marginRight: '50px'}}>HOME</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginRight: '50px'}}>TUITION & POLICY</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginRight: '50px'}}>ULTIMATE PRACTICE</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginRight: '50px'}}>CAREER</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginRight: '50px'}}>CONTACT</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center', marginLeft: '', marginBottom: '0px'}}>OUR TEAM</button>
    </div>
    <hr style = {{marginTop: '0px', height: '5px', width: '80%', backgroundColor: '#51557E', marginLeft: '10%', marginRight: '10%'}}></hr>

    <div style = {{position: 'relative', textAlign: 'center'}}>
      <img src = {background} alt = 'background' style = {{border: '10px solid #51557E', borderRadius: '20px', width: '60%', display: 'block', marginLeft: 'auto', marginTop: '70px', marginRight: 'auto'}}></img>
      <div class='centered' style = {{textAlign: 'center'}}>
        <h1 style = {{position: 'absolute', color: '#fff', whiteSpace: 'nowrap', textAlign: 'center'}}>Happy Math Education</h1>
      </div>
    </div>
    </>
  );
}

export default App;
