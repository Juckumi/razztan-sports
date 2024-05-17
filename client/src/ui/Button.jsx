import styled from "styled-components"

const Button = styled.button`
 border-radius: var(--b-radius-lg);
 background-color: var(--color-brand-beige-500);
 color: var(--color-brand-bone-200);
 padding: 1rem 2rem;
 font-size: 1.3rem;
 transition: transform 1s;
 border: none;
 cursor: pointer;

 &&:hover{
    transform: scale(1.1);
 }

`


export default Button
