import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [todo, setTodo] = useState(null);
  console.log("rendered");
  console.log(todo);

  const fetchTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => setTodo(json))
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="App">
      {todo && <h1>{todo.title}</h1>}
    </div>
  );
}

export default App;
