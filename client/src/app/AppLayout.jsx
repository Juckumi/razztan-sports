import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { Outlet } from 'react-router';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
       <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;