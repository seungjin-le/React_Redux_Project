import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DEL_TODO = 'DEL_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';
export const GET_USERS_STATE = 'GET_USERS_STATE';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const completeTodo = (index) => {
  return {
    type: COMPLETE_TODO,
  };
};
export const editTodo = (text) => {
  return {
    type: EDIT_TODO,
    text,
  };
};
export const delTodo = (text) => {
  return {
    type: DEL_TODO,
    text,
  };
};
export const showAll = () => {
  return { type: SHOW_ALL };
};
export const showComplete = () => {
  return { type: SHOW_COMPLETE };
};

//users

// redux-promise
export const GET_USERS = 'GET_USERS';
export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

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

export const getUsersPromise = () => {
  return {
    type: GET_USERS,
    payload: async () => {
      const { data } = await axios.get('https://api.github.com/users');
      return data;
    },
  };
};
