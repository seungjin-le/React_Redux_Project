import { applyMiddleware, createStore } from 'redux';
import todoApp from './redux/reducers/reducer';

// 미들웨어
const middleware = (store) => {
  return (next) => {
    console.log('middleware', 1);
    return (action) => {
      console.log('middleware', 2);
      return next(action);
    };
  };
};

const store = createStore(todoApp, applyMiddleware(middleware));

export default store;
