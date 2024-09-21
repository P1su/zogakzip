import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../layouts/Layout';
import CreateGroup from '../pages/CreateGroup/CreateGroup';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      { 
        path: '/', 
        element: <Main />, 
      },
      {
        path: '/create-group',
        element: <CreateGroup />,
      }
    ],
  },
]);

export default router;