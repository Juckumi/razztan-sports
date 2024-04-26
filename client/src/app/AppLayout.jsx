import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { Outlet } from 'react-router';
import NavBar from '../ui/NavBar';

const AppLayout = () => {
  return (
    <>
      <div style={{position:'fixed',width:'100vw'}}>
      <Header />
      <NavBar />
      </div>
       <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;