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
  // redux 에 router 연결
  router: connectRouter(history),
});

export default reducer;
