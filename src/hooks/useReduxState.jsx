import { useContext, useEffect, useState } from 'react';
import ReduxContext from '../contexts/reduxContext';

export default function useReduxState() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const store = useContext(ReduxContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState(store.getState());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
}
