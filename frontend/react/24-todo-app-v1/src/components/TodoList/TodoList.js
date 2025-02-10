import TodoItem from './TodoItem';
import styles from './TodoList.component.css';

const TodoList = ({ todoList, deleteTodoItem }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todoList.length && <h2>Todo list is empty</h2>}
      {todoList.map(
        (todoItem, index) =>
          todoList.length > 0 && <TodoItem key={index} index={index} todoItem={todoItem} deleteTodoItem={deleteTodoItem} />
      )}
    </div>
  );
};

export default TodoList;
