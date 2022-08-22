import React, { useState } from 'react';
import store from '../../store';
import { addTodo } from '../../redux/actions';

const TodoForm = () => {
  const [text, setText] = useState('');
  const onClick = () => {
    store.dispatch(addTodo(text));
    setText('');
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChange} value={text} />
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoForm;
