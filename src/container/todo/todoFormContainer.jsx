import TodoForm from '../../components/todos/todoForm';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTodo } from '../../redux/modules/todoModul';

const TodoFormContainer = () => {
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
