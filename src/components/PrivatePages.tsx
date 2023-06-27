// React and React Router
import { Navigate, Route } from 'react-router-dom';

// Constants

// Components
import RoutesWithNotFound from './RoutesWithNotFound';
import { PrivRoutes } from '@/const/routes.const';

// Pages
import TestsPage from '@/pages/private/TestsPage/TestsPage';
import DashboardPage from '@/pages/private/Dashboard/DashboardPage';
import AuthLayout from './AuthLayout';


DashboardPage

const PrivatePages = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<AuthLayout />} >
        <Route path="/" element={<Navigate to={PrivRoutes.DASHBOARD} />} />
        <Route path={PrivRoutes.DASHBOARD} element={<DashboardPage />} />

        <Route path={PrivRoutes.TESTS} element={<TestsPage />} />

      </Route>
    </RoutesWithNotFound>

  )
}

export default PrivatePages;