import { Outlet } from 'react-router-dom';
import StaticLandingPage from '../components/StaticLandingPage/StaticLandingPage';

const PublicLayout = () => {
  return (
    <>
      <StaticLandingPage />
      <Outlet />
    </>
  );
};

export default PublicLayout;
