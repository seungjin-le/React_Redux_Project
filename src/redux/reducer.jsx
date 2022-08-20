import {
  ADD_TODO,
  COMPLETE_TODO,
  DEL_TODO,
  EDIT_TODO,
  SHOW_ALL,
  SHOW_COMPLETE,
} from './actions';
import { combineReducers } from 'redux';

const initialState = { todos: [], filter: 'ALL' };

const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;

function todosReducer(prevState = todosInitialState, action) {
  if (action.type === ADD_TODO) {
    return [...prevState, { text: action.text, done: false }];
  }
  if (action.type === EDIT_TODO) {
  }
  if (action.type === DEL_TODO) {
  }
  if (action.type === COMPLETE_TODO) {
    return prevState.map((value, index) => {
      if (index === action.index) {
        return { ...value, done: true };
      }
      return value;
    });
  }
  return prevState;
}

function filterReducer(prevState = filterInitialState, action) {
  if (action.type === SHOW_ALL) {
    return 'ALL';
  }
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }
  return prevState;
}

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default reducer;
