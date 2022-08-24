import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import ReduxPages from './pages/reduxPage';
import TodosContainer from './container/todo/todosContainer';
import UserContainer from './container/user/userContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/redux" element={<ReduxPages />} />
      <Route path="/todos" element={<TodosContainer />} />
      <Route path="/users" element={<UserContainer />} />
    </Routes>
  );
}

export default App;
