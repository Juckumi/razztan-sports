import styled from 'styled-components'
import Logo from "./Logo";
import Button    from "../ui/Button"
import { useNavigate } from 'react-router';
const StyledHeader = styled.header`
    display: flex;
    justify-content:space-between;
    align-items: center;
    background:  var(--gardient-brand-green);
    color: var(--color-brand-bone-300);
    height: fit-content;
    padding: 0 2rem;

        *{
            flex:1;
            text-align: right;
        }


`
const ButtonGroup = styled.div`
    *{
        margin: 1rem;
        padding: 0.7rem;
    }

`

function Header() {
    const navigate = useNavigate();


    const handleLink = (link) => {
        navigate(link)
    }
    return (
        <StyledHeader>
            <div></div>
            <Logo  isWhite={true} />
            <div>
                <ButtonGroup>
                    <Button onClick={() => handleLink('/auth/registrarse')}>registrarse</Button>
                    <Button onClick={() => handleLink('/auth/iniciar-sesion')}>iniciar sesion</Button>
                </ButtonGroup>
            </div>
        </StyledHeader>
    )
}

export default Header
