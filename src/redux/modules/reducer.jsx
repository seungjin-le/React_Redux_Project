import { combineReducers } from 'redux';
import todos from './todoModul';
import filter from './filterModul';
import users from './usersModul';

const reducer = combineReducers({
  todos,
  filter,
  users,
});

export default reducer;
