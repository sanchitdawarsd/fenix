import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '../../App.css';

const Layout = () => {
  return (
    <>
      <div id="main">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
