import { applyMiddleware, createStore } from 'redux';
import todoApp from './redux/reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import promise from 'redux-promise-middleware';
// noinspection JSDeprecatedSymbols
const store = createStore(
  todoApp,
  composeWithDevTools(applyMiddleware(thunk, promise))
);
=======
// noinspection JSDeprecatedSymbols
const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));
>>>>>>> master

export default store;
