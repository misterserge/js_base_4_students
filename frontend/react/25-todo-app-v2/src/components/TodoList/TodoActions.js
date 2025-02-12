import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodoActions.module.css'
import Button from '../ui/Button';

function TodoActions({
  resetTodosMethods,
  resetCompletedTodos,
  completedTodos,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="reset todos" onClick={resetTodosMethods}>
        <RiRefreshLine />
      </Button>
      <Button
        title="clear completed todos"
        onClick={resetCompletedTodos}
        disabled={!completedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodoActions;
