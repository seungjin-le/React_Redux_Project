import React, { useCallback } from 'react';
import UserList from '../../components/users/userList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsersPromise,
  getUsersSagaStart,
  getUsersThunk,
} from '../../redux/modules/usersModul';

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();
  const getUsers = useCallback(() => {
    // redux-promise
    //dispatch(getUsersPromise());

    // redux-thunk
    //dispatch(getUsersThunk());

    // redux-saga
    dispatch(getUsersSagaStart());
  }, [dispatch]);
  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
