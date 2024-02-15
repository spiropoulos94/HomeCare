import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import PatientProfile from 'pages/patients/PatientProfile';
import AdminUserCreate from 'pages/AdminUserCreate';
import Reports from 'pages/reports';
import ReportSingle from 'pages/reports/ReportSingle';

// render - dashboard
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/SamplePage')));
const SamplePageNew = Loadable(lazy(() => import('pages/SamplePageNew')));
const PatientsPage = Loadable(lazy(() => import('pages/patients')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Reports />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    },
    {
      path: '/reports',
      element: <Reports />
    },
    {
      path: '/reports/:id',
      element: <ReportSingle />
    },
    {
      path: '/reports/new',
      element: <ReportSingle />
    },
    {
      path: '/patients',
      element: <PatientsPage />
    },
    {
      path: '/patients/:id',
      element: <PatientProfile />
    },
    {
      path: '/create_user',
      element: <AdminUserCreate />
    },
    {
      path: 'sample-page-new',
      element: <SamplePageNew />
    }
  ]
};

export default MainRoutes;
