import NavBar from "../ui/NavBar";

import styled from "styled-components";
import { Outlet } from "react-router";

const Section = styled.section`
    text-align: center;
    background-image: url("/razztan-sports-assets-3.svg");
    height: 77vh;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: auto;
    overflow-x: hidden;
`;

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
        <Section>
            <NavBar navLinks={navLinks} color={"var(--color-grey-100)"} />

            <Outlet />
        </Section>
    );
}

export default Events;
