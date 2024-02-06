import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import PatientProfile from 'pages/patientProfile';

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
      element: <SamplePage />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
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
      path: 'sample-page-new',
      element: <SamplePageNew />
    }
  ]
};

export default MainRoutes;
