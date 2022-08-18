import { ADD_TODO, COMPLETE_TODO, DEL_TODO, EDIT_TODO } from './actions';

const initialState = [];

export function todoApp(prevState = initialState, action) {
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
}
