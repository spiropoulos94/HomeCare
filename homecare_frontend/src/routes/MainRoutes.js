import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/SamplePage')));
const SamplePageNew = Loadable(lazy(() => import('pages/SamplePageNew')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'sample-page-new',
      element: <SamplePageNew />
    }
  ]
};

export default MainRoutes;
