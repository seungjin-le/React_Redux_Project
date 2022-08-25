import { createActions, handleActions } from 'redux-actions';

//export const ADD_TODO = 'redux/todos/ADD_TODO';
// export const EDIT_TODO = 'redux/todos/EDIT_TODO';
// export const DEL_TODO = 'redux/todos/DEL_TODO';
// export const COMPLETE_TODO = 'redux/todos/COMPLETE_TODO';
// const initialState = [];
//export const addTodo = (text) => {
//   return {
//     type: ADD_TODO,
//     text,
//   };
// };
//
// export const completeTodo = (index) => {
//   return {
//     type: COMPLETE_TODO,
//   };
// };
// export const editTodo = (text) => {
//   return {
//     type: EDIT_TODO,
//     text,
//   };
// };
// export const delTodo = (text) => {
//   return {
//     type: DEL_TODO,
//     text,
//   };
// };

//export default function todos(prevState = initialState, action) {
//   if (action.type === ADD_TODO) {
//     return [...prevState, { text: action.text, done: false }];
//   }
//   if (action.type === EDIT_TODO) {
//   }
//   if (action.type === DEL_TODO) {
//   }
//   if (action.type === COMPLETE_TODO) {
//     return prevState.map((value, index) => {
//       if (index === action.index) {
//         return { ...value, done: true };
//       }
//       return value;
//     });
//   }
//   return prevState;
// }

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
