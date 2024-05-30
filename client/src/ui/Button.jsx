import styled, { keyframes } from "styled-components";
const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1080deg);
  }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--b-radius-lg);
    background-color: var(--color-grey-100);
    color: var(--color-brand-bone-200);
    padding: ${(props) =>
        props.$size === "small"
            ? "0.5rem 1rem"
            : props.$size === "large"
            ? "2rem 4rem"
            : "1rem 2rem"};
    font-size: 1rem;
    transition: transform 1s;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    ${({ $rounded }) =>
        $rounded
            ? "padding:1rem; width: 2.5rem; height:2.5rem;   border-radius : 50%;"
            : ""}

    &&:hover {
        background-color: var(--color-grey-200);
    }
    &&:disabled {
        cursor: not-allowed;
        background-color: grey;
    }
`;

const ButtonAnimated = styled(Button)`
    animation: ${SpinAnimation} 4s ease-in-out infinite;
    font-size: 2rem;
`;

Button.Animated = ButtonAnimated;

export default Button;
