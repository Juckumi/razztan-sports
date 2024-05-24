import styled from "styled-components";
import NavBarOption from "./NavBarOption";
import { useHeaderAnimation } from "../hooks/useHeaderAnimation";
import { useEffect, useLayoutEffect } from "react";

const StyledNav = styled.div`
    display: flex;
    box-shadow: ${({ $thememode }) =>
        $thememode === "event"
            ? "none"
            : " 0 10px 10px -10px var(--color-brand-green-100)"};
    justify-content: center;
    background: ${({ $thememode }) =>
        $thememode === "event"
            ? "rgba(0,0,0,0)"
            : "var(--gardient-brand-green)"};
    color: ${({ $thememode }) =>
        $thememode === "event"
            ? "var(--color-black)"
            : "var(--color-brand-bone-300)"};
    width: 100vw;
`;

function NavBar({ navLinks, themeMode }) {
    const { ref } = useHeaderAnimation();

    return (
        <StyledNav $thememode={themeMode} ref={ref}>
            {navLinks?.map((navLink, index) => (
                <NavBarOption key={index} navLink={navLink} />
            ))}
        </StyledNav>
    );
}

export default NavBar;
