import { createStore } from 'redux';
import todoApp from './redux/reducers/reducer';

const store = createStore(todoApp);

export default store;
