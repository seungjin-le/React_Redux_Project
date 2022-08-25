import { createActions, handleActions } from 'redux-actions';

export const { addTodo, completeTodo, editTodo, delTodo } = createActions(
  'ADD_TODO',
  'COMPLETE_TODO',
  'EDIT_TODO',
  'DEL_TODO',
  {
    prefix: 'redux/todos',
  }
);

const initialState = [];

const reducer = handleActions(
  {
    ADD_TODO: (state, action) => {
      console.log(state, action);
      return [...state, { text: action.payload, done: false }];
    },
    COMPLETE_TODO: (state, action) => {
      return state.map((value, index) => {
        if (index === action.index) {
          return { ...value, done: true };
        }
        return value;
      });
    },
    EDIT_TODO: (state, action) => 'COMPLETE',
    DEL_TODO: (state, action) => 'COMPLETE',
  },
  initialState,
  { prefix: 'redux/todos' }
);
export default reducer;
