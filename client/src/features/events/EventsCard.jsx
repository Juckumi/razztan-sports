import styled from "styled-components";
import {
    MdOutlineSportsBaseball,
    MdOutlineSportsBasketball,
    MdOutlineSportsCricket,
    MdOutlineSportsFootball,
    MdOutlineFastfood,
    MdOutlineNoFood,
} from "react-icons/md";

import { useNavigate } from "react-router";
import { formatDate } from "../../utils/dateFormatter";
import { LuCalendarClock } from "react-icons/lu";
import StyledIcon from "../../ui/StyledIcon";
import DateSpan from "../../ui/DateSpan";
import { BiWorld } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";

const StyledEventCard = styled.div`
    height: 12rem;
    background-color: var(--color-brand-bone-300);
    border-radius: var(--b-radius-lg);
    overflow: hidden;
    display: flex;
    cursor: pointer;
    position: relative;
    box-shadow: 5px 5px 10px var(--color-brand-bone-400);
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

    background: var(--color-brand-green-500);
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

export const Icon = ({ sportName, withText = true }) => {
    let icon = <p></p>;
    switch (sportName) {
        case "Futbol":
            icon = (
                <StyledIcon>
                    <MdOutlineSportsFootball /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case "Baloncesto":
            icon = (
                <StyledIcon>
                    <MdOutlineSportsBasketball /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case "Polo":
            icon = (
                <StyledIcon>
                    <MdOutlineSportsBaseball /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case "Tenis":
            icon = (
                <StyledIcon>
                    <MdOutlineSportsBaseball /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case "Cricket":
            icon = (
                <StyledIcon>
                    <MdOutlineSportsCricket /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case "publico":
            icon = (
                <StyledIcon>
                    <BiWorld /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case "privado":
            icon = (
                <StyledIcon>
                    <FaLock /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case "revisado":
            icon = (
                <StyledIcon>
                    <MdOutlinePendingActions /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case 1:
            icon = (
                <StyledIcon>
                    <MdOutlineFastfood /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
        case 0:
            icon = (
                <StyledIcon>
                    <MdOutlineNoFood /> {withText && sportName}{" "}
                </StyledIcon>
            );
            break;
    }

    return icon;
};

function EventsCard({ event }) {
    const navigate = useNavigate();

    return (
        <StyledEventCard onClick={() => navigate(`/event/${event.slug}`)}>
            <StyledDivImg>
                <picture>
                    <source srcSet={event.bannerPhotoUrl} />
                    <Img src={"/EVENT.png"} alt="EVENT.jpg" />
                </picture>
            </StyledDivImg>
            <div style={{ flex: "2", display: "flex", flexFlow: "column" }}>
                <EventName color={event.backgroundColor}>
                    {event.title}
                    <div
                        style={{
                            width: "1rem",
                            height: "1rem",
                            backgroundColor: event.backgroundColor,
                            borderRadius: "1rem",
                        }}
                    ></div>
                    <Icon sportName={event.status} withText={false} />
                </EventName>
                <StyledGrid>
                    <StyledSportsContainer>
                        {event?.sports?.map((sport) => (
                            <span key={Math.random()}>
                                <Icon sportName={sport.name} withText={true} />
                            </span>
                        ))}
                    </StyledSportsContainer>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                        }}
                    >
                        <DateSpan>
                            <LuCalendarClock />
                            {formatDate(new Date(event.end))}
                        </DateSpan>
                    </div>
                </StyledGrid>
            </div>
        </StyledEventCard>
    );
}

export default EventsCard;
