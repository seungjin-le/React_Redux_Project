import React from 'react';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
