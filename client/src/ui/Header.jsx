import styled from "styled-components";
import Logo from "./Logo";
import Button from "../ui/Button";
import UserProfilePic from "../ui/UserProfilePic";

import { useNavigate } from "react-router";
import { useHeaderAnimation } from "../hooks/useHeaderAnimation";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ $thememode }) =>
        $thememode === "event"
            ? "rgba(0,0,0,0)"
            : "var(--gardient-brand-green)"};
    color: ${({ $thememode }) =>
        $thememode === "event"
            ? "var(--color-black)"
            : "var(--color-brand-bone-300)"};
    height: fit-content;
    padding: 0 2rem;
    z-index: 30;
    transition: background 3s;
    * {
        flex: 1;
        text-align: right;
    }
    width: 100%;
`;
const ButtonGroup = styled.div`
    * {
        margin: 1rem;
        padding: 0.7rem;
    }
`;

const Hamburguesa = styled.div`
    display: none;
    position: relative;
    top: 1rem;
    left: 1rem;
    width: 3em;
    height: 5em;
    * {
        transition: transform 1s;
        background-color: var(--color-brand-bone-300);
        margin: 12%;
        height: 5%;
        border-radius: 1rem;
    }
    @media (max-width: 610px) {
        display: block;
        /* ${(props) => props.$isOpen === "true" && "max-width: 20rem ;"} */
    }
`;

function Header({ isAuth = true, themeMode, setIsOpen, isOpen }) {
    const navigate = useNavigate();
    const { ref } = useHeaderAnimation();

    const handleLink = (link) => {
        navigate(link);
    };

    return (
        <StyledHeader $thememode={themeMode} ref={ref}>
            <div>
                <Hamburguesa onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Hamburguesa>
            </div>
            <Logo themeMode={themeMode} />
            <div>
                {!isAuth ? (
                    <ButtonGroup>
                        <Button onClick={() => handleLink("/auth/registrarse")}>
                            registrarse
                        </Button>
                        <Button
                            onClick={() => handleLink("/auth/iniciar-sesion")}
                        >
                            iniciar sesion
                        </Button>
                    </ButtonGroup>
                ) : (
                    <UserProfilePic />
                )}
            </div>
        </StyledHeader>
    );
}

export default Header;
