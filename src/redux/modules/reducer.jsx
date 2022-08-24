import { combineReducers } from 'redux';
import todos from './todoModul';
import filter from './filterModul';
import users from './usersModul';
import { connectRouter } from 'connected-react-router';
import history from '../../history';

const reducer = combineReducers({
  todos,
  filter,
  users,
  router: connectRouter(history),
});

export default reducer;
