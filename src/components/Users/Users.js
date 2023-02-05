import {Outlet, Link, useSearchParams} from 'react-router-dom';

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams ();
  const showActiveUsers = searchParams.get ('filter') === 'active';
  return (
    <>
      <div><Link to="1">User 1</Link></div>
      <div><Link to="2">User 2</Link></div>
      <div><Link to="3">User 3</Link></div>
      <Outlet />
      <div className='searchfilterContainer'>
        <button onClick={() => setSearchParams ({filter: 'active'})}>
          Showing active users
        </button>
        <button onClick={() => setSearchParams ({})}>Reset Filter</button>
        {showActiveUsers
          ? <h2>Showing active users</h2>
          : <h2>Showing all users</h2>}
      </div>
    </>
  );
};
