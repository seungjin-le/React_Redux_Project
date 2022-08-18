import { createStore } from 'redux';
import { todoApp } from './redux/reducer';

const store = createStore(todoApp);

export default store;
