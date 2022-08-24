import { applyMiddleware, createStore } from 'redux';
import todoApp from './redux/modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// noinspection JSDeprecatedSymbols
const store = createStore(
  todoApp,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default store;
