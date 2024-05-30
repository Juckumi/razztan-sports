import Header from "../ui/Header";
import { Outlet } from "react-router";
import NavBar from "../ui/NavBar";
import { FiSettings, FiCalendar, FiMessageSquare } from "react-icons/fi";
import { TbSoccerField } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";

const navLinks = [
    {
        label: "Tablero",
        link: "/user/dashboard",
        icon: <RxDashboard />,
        right: "false",
        list: [],
    },
    {
        label: "Eventos",
        link: "/user/events/jair",
        icon: <FiCalendar />,
        right: "false",
        list: [],
    },
    {
        label: "Pistas",
        link: "/user/fields?page=1",
        icon: <TbSoccerField />,
        right: "false",
        list: [],
    },
    // {label:'About' ,link:'sa',icon:<FiInfo />},
    {
        label: "Chat",
        link: "/user/chat",
        right: "false",
        icon: <FiMessageSquare />,
        list: [],
    },
    {
        label: "Ajustes",
        link: "",
        icon: <FiSettings />,
        right: "true",
        list: [
            { label: "Perfil", link: "/baloncesto", right: "true", list: [] },
            { label: "Eventos", link: "/futbol", right: "true", list: [] },
            { label: "Pistas", link: "/futbol", right: "true", list: [] },
        ],
    },
];
const UserLayout = () => {
    const { themeMode } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                style={{
                    position: themeMode === "event" ? "fixed" : "initial",
                    zIndex: "30",
                    width: "100vw",
                }}
            >
                <Header
                    themeMode={themeMode}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <NavBar
                    navLinks={navLinks}
                    themeMode={themeMode}
                    isOpen={isOpen}
                />
            </div>

            <Outlet />
        </>
    );
};

export default UserLayout;
