import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { Outlet } from 'react-router';
import NavBar from '../ui/NavBar';
import { FiCalendar,FiInfo } from 'react-icons/fi';
import { MdOutlineSportsBasketball } from "react-icons/md";


const navLinks = [
  {label:'Eventos' ,link:'sa',icon:<FiCalendar />,right:'true',
  list:[
          {label:'nuevos eventos',link:'/nuevos-eventos',right:'true',list:[]},
          {label:'eventos activos',link:'/eventos-activos',right:'true',list:[]},
          {label:'eventos activos',link:'/eventos-activos',right:'true',list:[]}
        ]},

  {label:'Sport' ,link:'/user',icon:<MdOutlineSportsBasketball />,right:'true',
  list:[
          {label:'Baloncesto',link:'/baloncesto',right:'true',list:[]},
          {label:'Futbol',link:'/futbol',right:'true',list:[]},
          {label:'Tenis',link:'/tenis',right:'true',list:[]},
          {label:'Polo',link:'/polo',right:'true',list:[]}
      ]},
  {label:'About' ,link:'sa',icon:<FiInfo />,right:'true',
  list:[
          {label:'Sobre nosotros',link:'/baloncesto',right:'true',list:[]},
          {label:'Preguntas Frecuentes',link:'/futbol',right:'true',list:[]},
      ]
  }
];
const AppLayout = () => {
  return (
    <>
      <div style={{position:'fixed',width:'100vw'}}>
      <Header />
      <NavBar navLinks={navLinks} color={'var(--gardient-brand-green)'}/>
      </div>
       <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;