import {useState} from 'react';
import { useAuth } from './Auth';

export const Login = () => {
  const [user, setUser] = useState ('');

  const auth = useAuth();
  return (
    <div>
      Enter username
      {' '}
      <input type="text" onChange={e => setUser (e.target.value)} />
      <button onClick={() => auth.login(user)}>Login</button>
    </div>
  );
};
