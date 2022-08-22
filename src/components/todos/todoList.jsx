import React from 'react';
import useReduxState from '../../hooks/useReduxState';
import { connect } from 'react-redux';

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
