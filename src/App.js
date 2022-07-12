import logo from './logo.png';
import './App.css';

function App() {
  return (
    <>
    <img src = {logo} alt = 'logo' style = {{display: 'block', marginLeft: 'auto', marginTop: '30px', marginRight: 'auto'}}></img>
    <div className="container" style = {{backgroundColor: '#898AA6', width: 'max-content'}}>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center'}}>HOME</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center'}}>HOME</button>
      <button className='btn' style = {{display: 'inline', justifySelf: 'center'}}>HOME</button>
    </div>
    </>
  );
}

export default App;
