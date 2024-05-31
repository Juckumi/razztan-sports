import styled from "styled-components";
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookBoxLine,
} from "react-icons/ri";

const StyledFooter = styled.footer`
    background-color: var(--color-grey-100);
    height: 17vh;
    color: var(--color-brand-bone-300);
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px) {
        font-size: 0.5rem;
    }
`;
const SocialIconsContainer = styled.footer`
    color: var(--color-brand-bone-300);
    font-size: 2.5rem;
    align-self: flex-end;
    @media (max-width: 800px) {
        font-size: 2rem;
    }

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;
const Copyright = styled.div`
    font-size: 0.8rem;
    align-self: flex-end;
    @media (max-width: 700px) {
        font-size: 0.5rem;
    }
`;
const InfoFooter = styled.div`
    /* align-self: flex-end; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    && > div > div {
        margin: 0.2rem;
    }
    h2 {
        text-align: center;
    }
    * {
        text-align: justify;
    }
`;
const Title = styled.div`
    display: flex;

    justify-content: space-between;

    flex-direction: column;
`;

function Footer() {
    return (
        <StyledFooter>
            <Title>
                <h1>Razztan Sports</h1>

                <Copyright>
                    &copy; 2024 Razztan Sports. Todos los derechos reservados.
                </Copyright>
            </Title>

            <InfoFooter>
                <div>
                    <h2>Contact</h2>
                    <div>Telefono: 672 34 56 78</div>
                    <div>Email: info-client@razztansports.com</div>
                </div>
            </InfoFooter>

            <SocialIconsContainer>
                <InfoFooter>
                    <h2 style={{ fontSize: "1.5rem" }}>Social</h2>
                </InfoFooter>
                <RiYoutubeLine /> <RiInstagramLine /> <RiFacebookBoxLine />
            </SocialIconsContainer>
        </StyledFooter>
    );
}

export default Footer;
