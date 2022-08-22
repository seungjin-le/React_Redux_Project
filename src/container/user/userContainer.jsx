import React, { useCallback } from 'react';
import UserList from '../../components/users/userList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsersFail,
  getUsersState,
  getUsersSuccess,
} from '../../redux/actions';
import axios from 'axios';

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    dispatch(getUsersState());
    await axios
      .get('https://api.github.com/users')
      .then((res) => dispatch(getUsersSuccess(res.data)))
      .catch((e) => dispatch(getUsersFail(e)));
    console.log(users);
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
