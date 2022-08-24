import { combineReducers } from 'redux';
import todos from '../modules/todoModul';
import filter from '../modules/filterModul';
import users from '../modules/usersModul';

const reducer = combineReducers({
  todos,
  filter,
  users,
});

export default reducer;
