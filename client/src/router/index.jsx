import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "../pages/UserDashboard.jsx";
import AppLayout from "../app/AppLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<AppLayout></AppLayout>),
    children: [
      {
        path: "user",
        element: (<UserDashboard />),
      },
    ],
  },
]);
export default router;