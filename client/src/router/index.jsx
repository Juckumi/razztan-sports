import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "../pages/UserDashboard";
import LandingPage from "../pages/LandingPage";

import AppLayout from "../app/AppLayout";
import UserLayout from "../app/UserLayout";
import Modal from "../ui/Modal";
import LogInForm from "../features/identify/LogInForm";
import RegisterForm from "../features/identify/RegisterForm";
import Events from "../pages/Events";
import ChatDashboard from "../pages/ChatDashboard";
import UserEvents from "../features/events/UserEvents";
import AllEvents from "../features/events/AllEvents";


const router = createBrowserRouter([
  {
    // path: "/",
    element: (<AppLayout />),
    children: [
      {
        path: "/",
        element: (<LandingPage />),
        children:[
          {
            path: "auth",
            element: (  <Modal />
            ),
            children: [
              {
                path:'iniciar-sesion',
                element:(<LogInForm />)
              },
              {
                path:'registrarse',
                element:(<RegisterForm />)
              }
            ]
          }
        ]
      },
    ],
  },
  {
    element: (<UserLayout />),
    children: [
        {
        path: "user/dashboard",
        element: (<UserDashboard />)
        },
        {
        element: (<Events />),
        children:[
          {
            path:"user/events/jair",
            element: (<UserEvents />)
          },
          {
            path:"user/events/all",
            element: (<AllEvents />)
          },
        ]
        },
        {
          path: "user/fields",
        element: (<UserDashboard />)
        },
        {
          path: "user/chat",
        element: (<ChatDashboard />)
        },
    ],
  },
  {
    path: "*",
    element: (<p>Erroorrr pagina no esncontrada</p>),
  },
]);
export default router;