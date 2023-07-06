// React and React Router
import { Navigate, Route } from 'react-router-dom';

// Constants

// Components
import RoutesWithNotFound from './RoutesWithNotFound';
import { PrivRoutes } from '@/const/routes.const';

// Pages
import TestsPage from '@/pages/private/Tests/TestsPage';
import DashboardPage from '@/pages/private/Dashboard/DashboardPage';
import AuthLayout from './AuthLayout';
import StudentsPage from '@/pages/private/Students/StudentsPage';
import TeachersPage from '@/pages/private/Teachers/TeachersPage';
import SubjectsPage from '@/pages/private/Subjects/SubjectsPage';
import AttendancePage from '@/pages/private/Attendance/AttendancePage';
import GradesPage from '@/pages/private/Grades/GradesPage';
import NotificationsPage from '@/pages/private/Notifications/NotificationsPage';
import SettingsPage from '@/pages/private/Settings/SettingsPage';


DashboardPage

const PrivatePages = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<AuthLayout />} >
        <Route path="/" element={<Navigate to={PrivRoutes.DASHBOARD} />} />
        <Route path={PrivRoutes.DASHBOARD} element={<DashboardPage />} />
        <Route path={PrivRoutes.STUDENTS} element={<StudentsPage />} />
        <Route path={PrivRoutes.TEACHERS} element={<TeachersPage />} />
        <Route path={PrivRoutes.SUBJECTS} element={<SubjectsPage />} />
        <Route path={PrivRoutes.ATTENDANCES} element={<AttendancePage />} />
        <Route path={PrivRoutes.GRADES} element={<GradesPage />} />
        <Route path={PrivRoutes.NOTIFICATIONS} element={<NotificationsPage />} />
        <Route path={PrivRoutes.SETTINGS} element={<SettingsPage />} />

        <Route path={PrivRoutes.TESTS} element={<TestsPage />} />

      </Route>
    </RoutesWithNotFound>

  )
}

export default PrivatePages;