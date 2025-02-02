import './App.css';
import persons from './data/persons'

function App() {
  return (
    <div className="App">
      {persons.map((person)=>{
        return <div key={person.id}>{person.firstName}</div>
      })}
    </div>
  );
}

export default App;
