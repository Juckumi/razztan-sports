import styled from "styled-components"
import Calendar from "../features/dashboard/Calendar"

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;



`

const StyledArticle = styled.article`
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;


`
function UserDashboard() {
    return (
       <StyledSection style={{height:'67vh',zIndex:'10'}}>
          <StyledArticle>
            info
          </StyledArticle>
          <StyledArticle>
            <Calendar />
          </StyledArticle>
       </StyledSection>
    )
}

export default UserDashboard
