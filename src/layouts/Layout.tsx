import { Outlet } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';

const Layout = () => {
  return(
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}

export default Layout;