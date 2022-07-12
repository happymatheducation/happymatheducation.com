import logo from './logo.png';
import './App.css';

function App() {
  return (
    <>
    <img src = {logo} alt = 'logo' style = {{display: 'block', marginLeft: 'auto', marginTop: '50px', marginRight: 'auto'}}></img>
    <div className="container" style = {{backgroundColor: '#898AA6', width: '300px'}}>
      <h1>hello</h1>
    </div>
    </>
  );
}

export default App;
