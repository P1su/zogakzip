import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../layouts/Layout';
import CreateGroup from '../pages/CreateGroup/CreateGroup';
import Group from '../pages/Group/Group';
import Memory from '../pages/Memory/Memory';

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
      },
      {
        path: '/group/:groupId',
        element: <Group />,
      },
      {
        path: '/group/:groupId/memory/:postId',
        element: <Memory />,
      },
    ],
  },
]);

export default router;