import styled from "styled-components";
import { formatDate } from "../../utils/dateFormatter";

const StyledRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    padding: 0.5rem;
    box-shadow: 1px 1px 10px 1px var(--color-black);
    background-color: var(--color-brand-green-500);
    color: var(--color-brand-bone-300);
    transition: 1s transform;
    cursor: pointer;
`;
const Img = styled.img`
    position: absolute;
    width: auto;
    bottom: 0;
    top: 0;
    right: 0rem;

    height: 100%;
    object-fit: cover;
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

const TitleColumn = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 1.1rem;
`;
const TextColumn = styled.div`
    font-size: 0.9rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    margin: 0 4rem;
    max-width: 20rem;
`;
const Point = styled.div`
    width: 0.7rem;
    height: 0.7rem;
    margin: 0 1rem;
    border-radius: 50%;
    background-color: ${(props) =>
        props.$status === "pendiente"
            ? "yellow"
            : props.$status === "aceptada"
            ? "green"
            : "var(--color-warning)"};
`;
function InvitesRow({ invites }) {
    return (
        <StyledRow>
            <TitleColumn>
                <Point $status={invites.status} />
                {invites.title}
            </TitleColumn>
            {/* <div>{formatDate(new Date(invites.end))}</div> */}
            <div></div>
            <div> </div>
            <Img src={invites.event.bannerPhotoUrl} />
            <TextColumn>{invites.text}</TextColumn>
        </StyledRow>
    );
}

export default InvitesRow;
