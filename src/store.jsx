import { applyMiddleware, createStore } from 'redux';
import todoApp from './redux/modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import history from './history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
// noinspection JSDeprecatedSymbols
const store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(
        { history },
        promise,
        routerMiddleware(history),
        sagaMiddleware
      )
    )
  )
);

export default store;
