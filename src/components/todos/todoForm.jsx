import React, { useRef } from 'react';

const TodoForm = ({ add }) => {
  const inputRef = useRef();
  const onClick = () => {
    add(inputRef?.current.value);
    inputRef.current.value = '';
  };
  const onKeyPress = ({ key }) => {
    if (key === 'Enter') {
      add(inputRef?.current.value);
      inputRef.current.value = '';
    }
  };
  return (
    <div>
      <input type="text" ref={inputRef} onKeyPress={onKeyPress} />
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoForm;
