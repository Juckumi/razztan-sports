import styled from 'styled-components'
import Logo from "./Logo";
import UserProfilePic from "./UserProfilePic"
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

function Header() {
    return (
        <StyledHeader>
            <div></div>
            <Logo  isWhite={true} />
            <UserProfilePic />
        </StyledHeader>
    )
}

export default Header
