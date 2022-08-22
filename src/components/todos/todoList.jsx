import React from 'react';
import useReduxState from '../../hooks/useReduxState';

const TodoList = () => {
  const state = useReduxState();
  return (
    <ul>
      {state?.todos.map((value, index) => {
        return <li key={index}>{value?.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
