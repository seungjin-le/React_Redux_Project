import {
  ADD_TODO,
  COMPLETE_TODO,
  DEL_TODO,
  EDIT_TODO,
  SHOW_ALL,
  SHOW_COMPLETE,
} from './actions';

const initialState = { todos: [], filter: 'ALL' };

export function todoApp(prevState = initialState, action) {
  if (action.type === ADD_TODO) {
    return {
      ...prevState,
      todos: [...prevState.todos, { text: action.text, done: false }],
    };
  }
  if (action.type === EDIT_TODO) {
  }
  if (action.type === DEL_TODO) {
  }
  if (action.type === COMPLETE_TODO) {
    return {
      ...prevState,
      todos: prevState.todos.map((value, index) => {
        if (index === action.index) {
          return { ...value, done: true };
        }
      }),
    };
  }
  if (action.type === SHOW_ALL) {
    return {
      ...prevState,
      filter: 'ALL',
    };
  }
  if (action.type === SHOW_COMPLETE) {
    return {
      ...prevState,
      filter: 'COMPLETE',
    };
  }
  return prevState;
}
