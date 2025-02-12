import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../ui/Button';

function TodoActions() {
  return (
    <>
      <Button>
        <RiRefreshLine />
      </Button>
      <Button>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodoActions;
