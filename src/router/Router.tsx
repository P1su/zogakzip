import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Layout from '../layouts/Layout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      { 
        path: '/', 
        element: <Main />, 
      },
    ],
  },
]);

export default router;