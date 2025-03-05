import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
import { selectLogin } from '../features/authSlice';
import { selectProfile } from '../features/profileSlice';
interface I_ProtectedRouteProps {
  authorizedStatus: 'normal' | 'admin' | 'all';
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<I_ProtectedRouteProps> = ({
  authorizedStatus,
  children,
}) => {
  const login = useAppSelector(selectLogin);
  const profile = useAppSelector(selectProfile);

  const { id } = useParams<{ id: string }>();

  const hasAccess = () => {
    if (!login || !profile) {
      sessionStorage.clear();
      return false;
    }
    if (
      authorizedStatus === 'all' ||
      profile?.statut === authorizedStatus ||
      profile?.id === id
    )
      return true;
  };

  if (!hasAccess()) {
    return <Navigate to='/' replace />; // Prevents page from being added to history
  }

  return children;
};

export default ProtectedRoute;
