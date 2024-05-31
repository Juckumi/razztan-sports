import { Outlet } from "react-router";
import styled from "styled-components";
import LandingArticle from "../features/landing/LandingArticle";

const HeaderImg = styled.div`
    position: relative;
    width: 100vw;
    height: 30rem;
    overflow: hidden;

    display: flex;

    align-items: center;
    & > :not(img) {
        margin: 4rem;
    }
    z-index: -1;
`;

const FirstSection = styled.div`
    width: 100vw;
    height: 60rem;
    background-image: url("/razztan-sports-assets-3.svg");
    background-repeat: no-repeat;
    background-size: cover;
`;

// const SecondSection = styled.div`
//     width: 100vw;
//     height: 30rem;
//     background-image: url("/razztan-sports-assets.svg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: 0 100%;
// `;

function LandingPage() {
    return (
        <>
            <HeaderImg>
                <img
                    src="https://www.tangol.com/blog/Fotos/Galeria/polo_0_202004020913310.JPG"
                    alt=""
                    style={{
                        width: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        zIndex: "-1",
                        height: "100%",
                    }}
                />
                <LandingArticle header="mi cabezerita" text="mi textito" />
            </HeaderImg>
            <FirstSection></FirstSection>

            <Outlet />
        </>
    );
}

export default LandingPage;
