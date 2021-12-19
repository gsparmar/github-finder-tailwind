import { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContext';
function UserSearch() {
  const { users, searchUsers, setUsers } = useContext(GithubContext);
  const { handleAlertMessage } = useContext(AlertContext);

  const [search, setSearch] = useState('');
  /*  const [message, setMessage] = useState('');

  const handleMessage = () => {
    setTimeout(() => {
      setMessage(`Please enter something`);
      console.log({ message });
    }, 3000);
  };
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      handleAlertMessage(`No input provided for search`);
    } else {
      searchUsers(search);

      setSearch('');
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    console.log(`cleared users from state`);
    setUsers([]);
  };

  return (
    <div
      className='grid grid-cols-1 xl:grid-cols-2 
    lg:grid-cols-2 md:grid-cols-2 gap-8'
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                value={search}
                onChange={handleChange}
                type='text'
                placeholder='Search'
                className='w-full pr-16 input input-primary 
            input-bordered'
              />
              <button
                type='submit'
                className='absolute top-0 
              right-0 rounded-l-none btn btn-primary'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost' onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
