import UserContainer from '../container/user/userContainer';
import TodosContainer from '../container/todo/todosContainer';

const ReduxPages = () => {
  return (
    <div style={{ padding: '40px' }}>
      <TodosContainer />
      <UserContainer />
    </div>
  );
};

export default ReduxPages;
