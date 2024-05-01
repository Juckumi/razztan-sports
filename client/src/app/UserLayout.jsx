import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { Outlet } from 'react-router';
import NavBar from '../ui/NavBar';
import { FiSettings,FiCalendar, FiInfo ,FiMessageSquare } from "react-icons/fi";
import { TbSoccerField } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";




const navLinks = [
  {label:'Tablero' ,link:'/user/dashboard',icon:<RxDashboard />,right:'false',list:[]},
  {label:'Eventos' ,link:'/user/events/jair',icon:<FiCalendar />,right:'false',list:[]},
  {label:'Pistas',link:'/user/fields',icon:<TbSoccerField />,right:'false',list:[]},
  // {label:'About' ,link:'sa',icon:<FiInfo />},
  {label:'Chat',link:'/user/chat',right:'false',icon:<FiMessageSquare />,list:[]},
  {label:'Ajustes' ,link:'',icon:<FiSettings />,right:'true',
  list:[
    {label:'Perfil',link:'/baloncesto',right:'true',list:[]},
    {label:'Eventos',link:'/futbol',right:'true',list:[]},
    {label:'Pistas',link:'/futbol',right:'true',list:[]},

  ]},

];
const UserLayout = () => {
  return (
    <>
      <Header />
      <NavBar navLinks={navLinks} color={'var(--gardient-brand-green)'} />
            <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;