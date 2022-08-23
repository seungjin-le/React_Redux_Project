import { applyMiddleware, createStore } from 'redux';
import todoApp from './redux/reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// noinspection JSDeprecatedSymbols
const store = createStore(todoApp, composeWithDevTools(applyMiddleware()));

export default store;
