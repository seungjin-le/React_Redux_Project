import React from 'react';
import TodoFormContainer from './todoFormContainer';
import TodoListContainer from './todoListContainer';

const TodosContainer = () => {
  return (
    <div>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
};

export default TodosContainer;
