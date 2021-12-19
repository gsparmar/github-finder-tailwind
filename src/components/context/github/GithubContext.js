import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });

  // get search result
  const searchUsers = async (text) => {
    console.log('promise');
    const params = new URLSearchParams({
      q: text,
    });

    const res = await github.get(`/search/users?${params}`);
    console.log('promise fulfilled');
    return setUsers(res.data.items);
  };

  const getUser = async (login) => {
    console.log('promise');
    const res = await github.get(`/users/${login}`);
    console.log('promise fulfilled');
    if (res.status !== 404) {
      setUser(res.data);
    } else window.location('/notfound');
  };

  const getUserRepos = async (login) => {
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    });
    console.log('repos promise');
    const res = await github.get(`/users/${login}/repos?${params}`);
    console.log('promise fulfilled');
    setRepos(res.data);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        isLoading,
        user,
        repos,
        searchUsers,
        setUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
