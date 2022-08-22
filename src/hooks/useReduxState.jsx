import { useContext, useEffect, useState } from 'react';
import ReduxContext from '../contexts/reduxContext';

export default function unsReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState());
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
