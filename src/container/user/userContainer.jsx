import React, { useCallback } from 'react';
import UserList from '../../components/users/userList';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk } from '../../redux/actions';

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();
  const getUsers = useCallback(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);
  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
