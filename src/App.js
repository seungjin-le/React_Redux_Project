import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <Home path='/' component={Home}/>
      <About path='/about' component={About}/>
    </div>

  );
}

export default App;
