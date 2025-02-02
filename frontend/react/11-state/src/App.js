import './App.css';
import RandomNumber from './components/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber max_value={100} />
    </div>
  );
}

export default App;
