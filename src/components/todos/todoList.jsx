import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((value, index) => {
        return <li key={index}>{value?.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
