import TodoForm from '../components/todos/todoForm';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { useCallback } from 'react';

const TodoFormContainer = () => {
  //const filter = useSelector((filter)
  const dispatch = useDispatch();
  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  return <TodoForm add={add} />;
};

export default TodoFormContainer;
