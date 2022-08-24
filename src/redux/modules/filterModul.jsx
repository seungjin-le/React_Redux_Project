export const SHOW_ALL = 'redux/filters/SHOW_ALL';
export const SHOW_COMPLETE = 'redux/filters/SHOW_COMPLETE';

export const showAll = () => {
  return { type: SHOW_ALL };
};
export const showComplete = () => {
  return { type: SHOW_COMPLETE };
};

const initialState = 'ALL';

export default function filter(prevState = initialState, action) {
  if (action.type === SHOW_ALL) {
    return 'ALL';
  }
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }
  return prevState;
}
