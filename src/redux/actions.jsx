export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DEL_TODO = 'DEL_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

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
export const showAll = () => {
  return { type: SHOW_ALL };
};
export const showComplete = () => {
  return { type: SHOW_COMPLETE };
};
