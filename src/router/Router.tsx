import { createBrowserRouter } from 'react-router-dom';
import Start from '../pages/Start/Start';
import Layout from '../layouts/Layout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      { 
        path: '/', 
        element: <Start />, 
      },
    ],
  },
]);

export default router;