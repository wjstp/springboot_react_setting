import dogimg from './dog5.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img alt='' src={dogimg} width={300} border="1"/>
      <br/><br/>
      <h2>Docker 성공 기원!!!</h2>
    </div>
  );
}

export default App;
