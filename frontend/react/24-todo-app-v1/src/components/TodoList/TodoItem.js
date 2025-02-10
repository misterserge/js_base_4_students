import { RiTodoFill } from 'react-icons/ri';
import styles from './TodoItem.module.css';

export default function TodoItem({ todoItem, deleteTodoItem, index }) {
  return (
    <div
      onDoubleClick={() => deleteTodoItem(index)}
      className={styles.todoItem}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoItemText}>{todoItem}</div>
    </div>
  );
}
