import TodoFormContainer from '../container/todo/todoFormContainer';
import TodoListContainer from '../container/todo/todoListContainer';
import UserContainer from '../container/user/userContainer';

const ReduxPages = () => {
  return (
    <div style={{ padding: '40px' }}>
      <TodoFormContainer />
      <TodoListContainer />
      <UserContainer />
    </div>
  );
};

export default ReduxPages;
