import { useNavigate } from "react-router";
import { useClickOutside } from "../hooks/useClickOutside";
import { useInsertionEffect } from "react";
import styled from "styled-components";

const Blur = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const StyledModal = styled.div`
    position: relative;

    background: var(--color-brand-green-500);
    padding: 20px;
    border-radius: var(--b-radius-md);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
`;
const Close = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.3rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    top: 0.5rem;
    right: 0.5rem;
    color: var(--color-brand-bone-300);
    background-color: var(--color-brand-green-700);
    cursor: pointer;
    z-index: 100;
    &:hover {
        background-color: var(--color-warning);
    }
`;

function Modal({ children }) {
    const handleNavBack = () => {
        navigate(-1);
    };
    const ref = useClickOutside(handleNavBack);
    const navigate = useNavigate();

    useInsertionEffect(() => {
        const handleStopScroll = () => {
            document.body.style.overflow = "hidden";
        };
        handleStopScroll();
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <Blur>
            <StyledModal ref={ref}>
                <Close onClick={handleNavBack}>&times;</Close>
                {children}
            </StyledModal>
        </Blur>
    );
}

export default Modal;
