import styled from "styled-components";
import Calendar from "../features/dashboard/Calendar";
import Dashboard from "../features/dashboard/Dashboard";

const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    background-image: url("/razztan-sports-assets-2.svg");
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    overflow-y: auto;
    height: 77vh;
    @media (max-width: 970px) {
        grid-template-columns: 1fr;
    }
`;

const StyledACalendarArticle = styled.article`
    padding: 1rem;
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
`;

function UserDashboard() {
    return (
        <StyledSection>
            <StyledACalendarArticle>
                <Calendar />
            </StyledACalendarArticle>
            <Dashboard />
        </StyledSection>
    );
}

export default UserDashboard;
