import { createStore } from 'redux';
import todosReducer from './redux/reducer';

const store = createStore(todosReducer);

export default store;
