import styled from "styled-components";

const Header = styled.h1`
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledLanding = styled.div``;

const Body = styled.p`
    color: var(--color-white);
`;

function LandingArticle({ header, text }) {
    return (
        <StyledLanding>
            <Header>{header}</Header>
            <Body>{text}</Body>
        </StyledLanding>
    );
}

export default LandingArticle;
