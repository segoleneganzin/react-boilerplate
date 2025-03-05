import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
import { selectLogin } from '../features/authSlice';
import { selectProfile } from '../features/profileSlice';

interface I_RedirectIfLoggedInProps {
  children: React.ReactNode;
}

const RedirectIfLoggedIn: React.FC<I_RedirectIfLoggedInProps> = ({
  children,
}) => {
  const login = useAppSelector(selectLogin);
  const profile = useAppSelector(selectProfile);
  //TODO manage redirection depend of role (normal or admin)
  if (login && profile) {
    return <Navigate to='/profile' replace />;
  }

  return children;
};

export default RedirectIfLoggedIn;
