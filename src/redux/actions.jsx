export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DEL_TODO = 'DEL_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const completeTodo = (index) => {
  return {
    type: COMPLETE_TODO,
  };
};
export const editTodo = (text) => {
  return {
    type: EDIT_TODO,
    text,
  };
};
export const delTodo = (text) => {
  return {
    type: DEL_TODO,
    text,
  };
};
