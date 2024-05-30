import styled from "styled-components";
import NavBarOption from "./NavBarOption";
import { useHeaderAnimation } from "../hooks/useHeaderAnimation";
import { useEffect } from "react";

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
    /* width: 100%; */
    transition: 0.5s ease-in-out;
    @media (max-width: 610px) {
        ${(props) =>
            props.$responsive &&
            " position: fixed; z-index: 10; flex-direction: column;  align-items: flex-start;  justify-content: flex-start;  width: 0rem;  overflow: hidden;  height: 100vh;   "}
        ${(props) => props.$isOpen === "true" && "width: 15rem ;"}
    }
`;

function NavBar({ navLinks, themeMode, isOpen, reponsive = true }) {
    const { ref } = useHeaderAnimation();

    return (
        <>
            <StyledNav
                $thememode={themeMode}
                ref={ref}
                $isOpen={isOpen ? "true" : "false"}
                $responsive={reponsive}
            >
                {navLinks?.map((navLink, index) => (
                    <NavBarOption key={index} navLink={navLink} />
                ))}
            </StyledNav>
        </>
    );
}

export default NavBar;
