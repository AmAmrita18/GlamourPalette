import Copyright from './components/Copyright';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Outlet />
        <Footer />
       <Copyright/>
    </>
  )
}

export default Layout;