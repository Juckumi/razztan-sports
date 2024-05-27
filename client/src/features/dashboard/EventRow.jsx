import styled from "styled-components";
import { formatDate } from "../../utils/dateFormatter";

const StyledRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0.5rem;
    box-shadow: 1px 1px 10px 1px var(--color-black);
    background-color: var(--color-brand-green-500);
    color: var(--color-brand-bone-300);
    transition: 1s transform;
    cursor: pointer;
`;
const Img = styled.img`
    width: 5rem;
    height: auto;
    margin: -0.5rem;
    -webkit-mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 1)
    ); /* Degradado de transparente a negro */
    mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 1)
    ); /* Degradado de transparente a negro */
`;
function InvitesRow({ invites }) {
    return (
        <StyledRow>
            <div>{invites.title}</div>
            <div>{formatDate(new Date(invites.end))}</div>
            <div></div>
            <div style={{ display: "flex", justifyContent: "right" }}>
                <Img src={`https://picsum.photos/200?random=${invites.slug}`} />
            </div>
        </StyledRow>
    );
}

export default InvitesRow;
