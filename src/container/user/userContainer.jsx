import React, { useCallback } from 'react';
import UserList from '../../components/users/userList';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { getUsersPromise } from '../../redux/actions';
=======
import { getUsersThunk } from '../../redux/actions';
>>>>>>> master

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();
  const getUsers = useCallback(() => {
<<<<<<< HEAD
    dispatch(getUsersPromise());
=======
    dispatch(getUsersThunk());
>>>>>>> master
  }, [dispatch]);
  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
