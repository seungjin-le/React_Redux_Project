import { useContext, useEffect, useState } from 'react';
import store from '../store';
import { addTodo } from '../redux/actions';
import ReduxContext from '../contexts/reduxContext';

const ReduxPages = () => {
  const [reduxData, setReduxData] = useState({});
  const [text, setText] = useState('');
  useEffect(() => {
    setReduxData(store.getState());
  }, []);
  store.subscribe(() => setReduxData(store.getState()));
  const onClick = () => {
    store.dispatch(addTodo(text));
    setText('');
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <div>
          <input type="text" onChange={onChange} value={text} />
          <button onClick={onClick}>추가</button>
          {JSON.stringify(reduxData)}
        </div>
        {reduxData.todos?.map((value, index) => (
          <div key={index}>{value.text}</div>
        ))}
      </div>
    </>
  );
};

export default ReduxPages;
