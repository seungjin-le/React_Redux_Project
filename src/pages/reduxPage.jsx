import TodoList from '../components/todos/todoList';
import TodoForm from '../components/todos/todoForm';

const ReduxPages = () => {
  return (
    <>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
};

export default ReduxPages;
