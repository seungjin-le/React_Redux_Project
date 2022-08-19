import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { addTodo } from './redux/actions';

store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo('qwrq'));
store.dispatch(addTodo('qwrq'));
store.dispatch(addTodo('qwrq'));
store.dispatch(addTodo('qwrq'));
store.dispatch(addTodo('qwrq'));
store.dispatch(addTodo('qwrq'));
console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
