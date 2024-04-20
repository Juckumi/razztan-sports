import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { Outlet } from 'react-router';
import NavBar from '../ui/NavBar';

const AppLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
       <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;