import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../ui/Button';

function TodoActions({ resetTodosMethods, resetCompletedTodos }) {
  return (
    <>
      <Button title="reset todos" onClick={resetTodosMethods}>
        <RiRefreshLine />
      </Button>
      <Button title="clear completed todos" onClick={resetCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodoActions;
