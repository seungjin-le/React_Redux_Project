import TodoFormContainer from '../container/todoFormContainer';
import TodoListContainer from '../container/todoListContainer';

const ReduxPages = () => {
  return (
    <div style={{ padding: '40px' }}>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
};

export default ReduxPages;
