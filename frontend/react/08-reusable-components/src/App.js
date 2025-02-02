import './App.css';
import ReusableComponent from './components/ReusableComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <ReusableComponent />
      <SecondComponent />
      <ReusableComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
