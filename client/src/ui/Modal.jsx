import { Outlet, useNavigate } from "react-router";
import { useClickOutside } from "../hooks/useClickOutside"
import {  useInsertionEffect } from "react";
import styled from 'styled-components';


const homePath = '/'

const Blur = styled.div`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items:center;

`


const StyledModal = styled.div`
                background: var(--color-brand-green-500);
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

function Modal() {
    const handleNavBack = () => {
        navigate(homePath)
    }
    const ref = useClickOutside(handleNavBack);
    const navigate = useNavigate();


    
    useInsertionEffect(() => {
        const handleStopScroll = () => {
            document.body.style.overflow = 'hidden';
        };
        handleStopScroll();
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);


    return (
        <Blur>
            <StyledModal ref={ref} >
                    <Outlet />
            </StyledModal>
        </Blur>
    )
}

export default Modal
