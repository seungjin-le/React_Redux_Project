import { createActions, handleActions } from 'redux-actions';

export const { showAll, showComplete } = createActions(
  'SHOW_ALL',
  'SHOW_COMPLETE',
  {
    prefix: 'redux/filters',
  }
);

const initialState = 'ALL';

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => 'ALL',
    SHOW_COMPLETE: (state, action) => 'COMPLETE',
  },
  initialState,
  { prefix: 'redux/filters' }
);

export default reducer;
