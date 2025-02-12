import { useState } from 'react';
import Button from '../ui/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodoItem }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodoItem(text);
    setText('');
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add the new item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
