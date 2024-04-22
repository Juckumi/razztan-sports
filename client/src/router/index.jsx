import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "../pages/UserDashboard";
import LandingPage from "../pages/LandingPage";

import AppLayout from "../app/AppLayout";
import UserLayout from "../app/UserLayout";
import Modal from "../ui/Modal";


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
            path: "iniciar-sesion",
            element: (<Modal />),
          },
          {
            path: "registrarse",
            element: (<Modal />),
          },
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