import { applyMiddleware, createStore } from 'redux';
import todoApp from './redux/modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from './history';
import promise from 'redux-promise-midleware';
import thunk from 'redux-thunk';

// noinspection JSDeprecatedSymbols
const store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ history }, promise))
  )
);

export default store;
