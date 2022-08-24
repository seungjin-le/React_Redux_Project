import axios from 'axios';

// Action Type

// original-redux
export const GET_USERS_STATE = 'redux/users/GET_USERS_STATE';
export const GET_USERS_SUCCESS = 'redux/users/GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'redux/users/GET_USERS_FAIL';

// redux-promise
export const GET_USERS = 'redux/users/GET_USERS';
export const GET_USERS_PENDING = 'redux/users/GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'redux/users/GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'redux/users/GET_USERS_REJECTED';

// Create Action Function
export const getUsersState = () => {
  // API 호출 시작 (로딩을 시작)
  return { type: GET_USERS_STATE };
};
export const getUsersSuccess = (data) => {
  // API 호출 성공(로딩을 끝내고 데이터 출력)
  return { type: GET_USERS_SUCCESS, data };
};
export const getUsersFail = (error) => {
  // API 호출 실패(로딩을 끝내고 에러 출력
  return { type: GET_USERS_FAIL, error };
};

// redux-thunk
export const getUsersThunk = () => {
  return async (dispatch) => {
    dispatch(getUsersState());
    await axios
      .get('https://api.github.com/users')
      .then((res) => {
        return dispatch(getUsersSuccess(res.data));
      })
      .catch((e) => dispatch(getUsersFail(e)));
  };
};

// redux-promise-middleware
export const getUsersPromise = () => {
  return {
    type: GET_USERS,
    payload: async () => {
      const { data } = await axios.get('https://api.github.com/users');
      return data;
    },
  };
};

// Initial Value
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// Reducer
const Users = (state = initialState, action) => {
  if (action.type === GET_USERS_STATE || action.type === GET_USERS_PENDING) {
    return { ...state, loading: true, error: null };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return { ...state, loading: false, data: action.data };
  }
  if (action.type === GET_USERS_FULFILLED) {
    return { ...state, loading: false, data: action.payload };
  }
  if (action.type === GET_USERS_FAIL) {
    return { ...state, loading: false, error: action.error };
  }
  if (action.type === GET_USERS_REJECTED) {
    return { ...state, loading: false, data: action.payload };
  }

  return state;
};

export default Users;
