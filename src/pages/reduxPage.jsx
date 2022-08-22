import TodoFormContainer from '../container/todo/todoFormContainer';
import TodoListContainer from '../container/todo/todoListContainer';

const ReduxPages = () => {
  return (
    <div style={{ padding: '40px' }}>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
};

export default ReduxPages;
