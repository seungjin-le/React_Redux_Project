import React from 'react';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import ReduxPages from './pages/reduxPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/redux" element={<ReduxPages />} />
    </Routes>
  );
}

export default App;
