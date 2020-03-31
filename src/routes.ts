import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
