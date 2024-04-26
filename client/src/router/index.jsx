import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "../pages/UserDashboard";
import LandingPage from "../pages/LandingPage";

import AppLayout from "../app/AppLayout";
import UserLayout from "../app/UserLayout";
import Modal from "../ui/Modal";
import LogInForm from "../features/identify/LogInForm";
import RegisterForm from "../features/identify/RegisterForm";


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
            path: "indentify",
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
    path: "user",
    element: (<UserLayout />),
    children: [
      {
        path: "dashboard",
        element: (<UserDashboard />),
      },
    ],
  },
  {
    path: "*",
    element: (<p>Erroorrr pagina no esncontrada</p>),
  },
]);
export default router;