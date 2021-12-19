import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../context/github/GithubContext';

function UserResults() {
  const { users, isLoading } = useContext(GithubContext);
  if (!isLoading) {
    return (
      <div
        className='grid grid-cols-1 gap-8 xl:grid-cols-4 
      l:grid-cols-3 md:grid-cols-2 mt-8'
      >
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
