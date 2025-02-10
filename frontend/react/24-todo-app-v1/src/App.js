import { useState } from 'react';
import TodoForm from './components/TodoList/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodoItemHandler = (text) => {
    setTodoList([...todoList, text])
  }
  const deleteTodoItemHandler = (index) => {
    setTodoList(todoList.filter((_, id) => id !== index))
  }
  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoForm addTodoItem={addTodoItemHandler} />
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItemHandler} />
    </div>
  );
}

export default App;
