import { useAuth } from './Auth';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({childrencomp}) => {
    const auth = useAuth();
    //const navigate = useNavigate();
    if (!auth.user) {
        <Navigate to='login'/>
    }
  return childrencomp;
}
