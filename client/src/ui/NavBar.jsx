import styled from "styled-components"
import NavBarOption from "./NavBarOption"

const StyledNav  = styled.div`
display: flex;
box-shadow: 0 10px 10px -10px var(--color-brand-green-100) ;
justify-content: center;
background: ${(props)=> props.color} ;
width: 100vw;


`



function NavBar({navLinks,color}) {
    return (
        <StyledNav color={color} >
            {navLinks?.map((navLink,index) => 
                    <NavBarOption 
                    key={index} 
                    navLink={navLink}
                    />

            )}
        </StyledNav>
    )
}

export default NavBar
