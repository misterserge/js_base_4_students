import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './TodoItem.module.css';

export default function TodoItem({ todoItem, deleteTodoItem, toggleTodoHandler }) {
  return (
    <div className={styles.todoItem}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoItemText}>{todoItem.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodoItem(todoItem.id)}
      />
      <FaCheck className={styles.checkIcon} onClick={toggleTodoHandler} />
    </div>
  );
}
