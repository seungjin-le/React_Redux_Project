import { useEffect } from 'react';

const UserList = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (users.length === 0) {
    return <p>user Not Data</p>;
  }
  return (
    <ul>
      {users.map((value, index) => {
        return <li key={index}>LoginId : {value.login}</li>;
      })}
    </ul>
  );
};

export default UserList;
