import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Outlet } from "react-router";
import NavBar from "../ui/NavBar";
import { FiCalendar, FiInfo } from "react-icons/fi";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { useContext, useLayoutEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

const navLinks = [
    {
        label: "Eventos",
        link: "sa",
        icon: <FiCalendar />,
        right: "true",
        list: [
            {
                label: "nuevos eventos",
                link: "/nuevos-eventos",
                right: "true",
                list: [],
            },
            {
                label: "eventos activos",
                link: "/eventos-activos",
                right: "true",
                list: [],
            },
            {
                label: "eventos activos",
                link: "/eventos-activos",
                right: "true",
                list: [],
            },
        ],
    },

    {
        label: "Sport",
        link: "/user",
        icon: <MdOutlineSportsBasketball />,
        right: "true",
        list: [
            {
                label: "Baloncesto",
                link: "/baloncesto",
                right: "true",
                list: [],
            },
            { label: "Futbol", link: "/futbol", right: "true", list: [] },
            { label: "Tenis", link: "/tenis", right: "true", list: [] },
            { label: "Polo", link: "/polo", right: "true", list: [] },
        ],
    },
    {
        label: "About",
        link: "sa",
        icon: <FiInfo />,
        right: "true",
        list: [
            {
                label: "Sobre nosotros",
                link: "/baloncesto",
                right: "true",
                list: [],
            },
            {
                label: "Preguntas Frecuentes",
                link: "/futbol",
                right: "true",
                list: [],
            },
        ],
    },
];
const AppLayout = () => {
    const { themeMode, setThemeMode } = useContext(AppContext);
    const navbarRef = useRef();

    useLayoutEffect(() => {
        setThemeMode("event");

        return () => {
            setThemeMode("");
        };
    }, []);
    return (
        <>
            <div style={{ position: "fixed", width: "100vw" }}>
                <Header themeMode={themeMode} navbarRef={navbarRef} />
                <NavBar
                    navLinks={navLinks}
                    themeMode={themeMode}
                    navbarRef={navbarRef}
                />
            </div>
            <Outlet />
            <Footer />
        </>
    );
};

export default AppLayout;
