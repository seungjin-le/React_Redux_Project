import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import ReduxContext from './contexts/reduxContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </BrowserRouter>
);
