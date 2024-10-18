// Layouts
import MainLayout from '../layouts/MainLayout';
import PublicLayout from '../layouts/PublicLayout';

// Pages
import Home from '../components/Home';
import { About } from '../components/About';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../components/Login/Login';
import TenantManagement from '../components/TenantManagement/TenantManagement';
import UserManagement from '../components/UserManagement/Users/UserManagement';
import { AddEditViewTenant } from '../components/TenantManagement/AddEditViewTenant';
import RolesPermissions from '../components/UserManagement/RolesPermissions/RolesPermissions';
import UserGroups from '../components/UserManagement/UserGroups/UserGroups';
import { UnAuthorized } from '../layouts/UnAuthorized';

export function AppRoutes({ isAuthenticated }: any) {
  // TODO: isAuthorized to be set from permissions of current user...
  const isAuthorized = true;
  return (
    <ReactRoutes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route element={<Login />} path={'/'} />
        <Route element={<Login />} path={'/login'} />
        <Route element={<About />} path={'/about'} />
      </Route>

      {/* Protected/Private Routes */}
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route element={<Home />} path={'/'} />
          <Route element={<Home />} path={'/home'} />
          <Route
            element={isAuthorized ? <TenantManagement /> : <UnAuthorized />}
            path={'/tenants'}
          />
          <Route
            element={isAuthorized ? <AddEditViewTenant /> : <UnAuthorized />}
            path={'/tenants/create'}
          />
          <Route element={isAuthorized ? <UserManagement /> : <UnAuthorized />} path={'/users'} />
          <Route element={isAuthorized ? <UserGroups /> : <UnAuthorized />} path={'/usergroups'} />
          <Route element={isAuthorized ? <RolesPermissions /> : <UnAuthorized />} path={'/roles'} />
        </Route>
      </Route>
    </ReactRoutes>
  );
}
