import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext ();

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState (null);

  const navigate = useNavigate();
  

  const login = username => {
    setUser (username);
    navigate('profile');
  };

  const logout = () => {
    setUser (null);
    navigate('login');
  };
  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext);
}
