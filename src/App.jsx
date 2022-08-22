import React, { useContext, useEffect, useState } from 'react';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import ReduxPages from './pages/reduxPage';
import ReduxContext from './contexts/reduxContext';

function unReduxState() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const store = useContext(ReduxContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState(store.getState());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
      console.log(state);
    });
    return () => {
      unsubscribe();
    };
  }, [store]);
  return state;
}

function App() {
  const state = unReduxState();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/redux" element={<ReduxPages />} />
    </Routes>
  );
}

export default App;
