import { applyMiddleware, createStore } from 'redux';
import todoApp from './redux/reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// noinspection JSDeprecatedSymbols
const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;
