import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function ProtectedRoute({ isPublic }: any) {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  const location = useLocation();

  return isPublic || isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}

export default ProtectedRoute;
