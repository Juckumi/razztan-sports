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
import EventDetails from "../pages/EventDetails";
import CreateEventForm from "../features/events/CreateEventForm";
import CreateOccurenceForm from "../features/events/event/CreateOccurrenceForm";
import EventInvite from "../features/events/event/EventInvite";

const router = createBrowserRouter([
    {
        // path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
                children: [
                    {
                        path: "iniciar-sesion",
                        element: (
                            <Modal>
                                <LogInForm />
                            </Modal>
                        ),
                    },
                    {
                        path: "registrarse",
                        element: (
                            <Modal>
                                <RegisterForm />
                            </Modal>
                        ),
                    },
                ],
            },
        ],
    },
    {
        element: <UserLayout />,
        children: [
            {
                path: "user/dashboard",
                element: <UserDashboard />,
            },
            {
                element: <Events />,
                children: [
                    {
                        path: "user/events/jair",
                        element: <UserEvents />,
                        children: [
                            {
                                path: "crear-evento",
                                element: (
                                    <Modal>
                                        <CreateEventForm />
                                    </Modal>
                                ),
                            },
                        ],
                    },
                    {
                        path: "user/events/all",
                        element: <AllEvents />,
                    },
                ],
            },
            {
                path: "event/:eventSlug",
                element: <EventDetails />,
                children: [
                    {
                        path: "crear-occurencia",
                        element: (
                            <Modal>
                                <CreateOccurenceForm />
                            </Modal>
                        ),
                    },
                    {
                        path: "invite",
                        element: (
                            <Modal>
                                <EventInvite />
                            </Modal>
                        ),
                    },
                    {
                        path: "occurencia/:occurenciaSlug",
                        element: (
                            <Modal>
                                <CreateOccurenceForm />
                            </Modal>
                        ),
                    },
                ],
            },
            {
                path: "user/fields",
                element: <UserDashboard />,
            },
            {
                path: "user/chat",
                element: <ChatDashboard />,
            },
        ],
    },
    {
        path: "*",
        element: <p>Erroorrr pagina no esncontrada</p>,
    },
]);
export default router;
