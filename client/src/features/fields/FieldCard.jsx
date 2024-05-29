import styled from "styled-components";
import { Icon } from "../events/EventsCard";
import { TbSoccerField } from "react-icons/tb";
import { MdOutlinePlace } from "react-icons/md";

const StyledEventCard = styled.div`
    height: 12rem;
    background-color: var(--color-brand-bone-300);
    border-radius: var(--b-radius-lg);
    overflow: hidden;
    display: flex;
    cursor: pointer;
    position: relative;
`;
const FieldInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.5rem 0;
`;
const StyledGrid = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`;
const EventName = styled.h2`
    display: flex;
    align-items: center;

    /* border : 5px solid ${(prop) => prop.color}; */

    background: var(--color-grey-200);
    color: var(--color-white);
    text-align: left;
    padding: 0.7rem 1rem;
    gap: 1rem;
    padding: 1rem;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1s transform;
    &&:hover {
        transform: scale(1.2);
    }
`;

const StyledDivImg = styled.div`
    position: relative;
    overflow: hidden;

    width: 12rem;
    height: 100%;
    border-radius: var(--b-radius-lg) 0 0 var(--b-radius-lg);
`;
const StyledSportsContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 620px) {
        * {
            font-size: 1rem;
        }
        /* align-items: flex-start;

        flex-direction: column; */
    }
`;

function FieldCard({ field }) {
    return (
        <StyledEventCard>
            <StyledDivImg>
                <picture>
                    <source srcSet={field?.fieldPhotosUrl} />
                    <Img src={"/EVENT.png"} alt="EVENT.jpg" />
                </picture>
            </StyledDivImg>
            <div style={{ flex: "2", display: "flex", flexFlow: "column" }}>
                <EventName>{field?.name}</EventName>
                <StyledGrid>
                    <StyledSportsContainer>
                        {field?.sports?.map((sport) => (
                            <span key={Math.random()}>
                                <Icon sportName={sport?.name} withText={true} />
                            </span>
                        ))}
                    </StyledSportsContainer>
                    <FieldInfo>
                        <FieldInfo>
                            <MdOutlinePlace />
                            {field.place}
                        </FieldInfo>
                        <FieldInfo>
                            <TbSoccerField /> {field.m2} m<sup>2</sup>
                        </FieldInfo>
                    </FieldInfo>
                </StyledGrid>
            </div>
        </StyledEventCard>
    );
}

export default FieldCard;
