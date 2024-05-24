import NavBar from "../ui/NavBar";

import styled from "styled-components";
import { Outlet } from "react-router";

const navLinks = [
    {
        label: "Mis eventos",
        link: "/user/events/jair",
        right: "true",
        list: [],
    },
    {
        label: "Buscar Eventos",
        link: "/user/events/all?page=1",
        right: "true",
        list: [],
    },
];
function Events() {
    return (
        <section style={{ textAlign: "center" }}>
            <NavBar navLinks={navLinks} color={"var(--color-grey-100)"} />

            <Outlet />
        </section>
    );
}

export default Events;
