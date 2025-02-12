import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../ui/Button';

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
        <Button type="submit" title='Submit'>Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
