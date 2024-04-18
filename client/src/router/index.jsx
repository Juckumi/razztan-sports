import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import UserDashboard from "../pages/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <LandingPage />
    ),
  },
  {
    path: "user",
    element: (
        <UserDashboard />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);