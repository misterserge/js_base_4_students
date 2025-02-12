import { useState } from 'react';
import { v4 as uuIdv4 } from 'uuid';
import TodoForm from './components/TodoList/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodoItemHandler = (text) => {
    const newTodoItem = {
      text,
      isCompleted: false,
      id: uuIdv4(),
    }
    setTodoList([...todoList, newTodoItem])
  }
  const deleteTodoItemHandler = (id) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id))
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
