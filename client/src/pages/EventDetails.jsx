import { useGetEventBySlug } from "../features/events/event/useGetEventBySlug";
import styled from "styled-components";
import { useContext, useLayoutEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Icon } from "../features/events/EventsCard";
import Spinner from "../ui/Spinner";
import Occurrence from "../features/events/event/Occurrence";
import {
    LuCalendarClock,
    LuCalendar,
    LuCalendarPlus,
    LuCalendarCheck2,
} from "react-icons/lu";
import StyledIcon from "../ui/StyledIcon";
import { formatDate } from "../utils/dateFormatter";
import DateSpan from "../ui/DateSpan";
import Button from "../ui/Button";
import Switch from "../ui/Switch";
import { Outlet, useNavigate } from "react-router";

const Badge = styled(StyledIcon)`
    background-color: var(--color-grey-100);
    width: fit-content;
    border-radius: 1rem;
    color: var(--color-white);
    * {
        color: var(--color-white);
        white-space: nowrap;
    }
    margin: 0.2rem;
    padding: 3px;
`;

const Img = styled.img`
    width: 100%;
    height: 18rem;
    object-fit: cover;
`;
const DivImg = styled.div`
    position: relative;
    width: 100vw;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 18rem;
    h1 {
        position: absolute;
        font-size: 5rem;
        margin: 1rem 0;
    }
`;

const EventBody = styled.div`
    display: flex;
    margin: 2rem 1rem;
`;

const SideBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (max-width: 650px) {
        display: none;
    }
`;
const Description = styled.div`
    flex: 3;
    word-break: break-all;
    hyphens: manual;
`;
const SignUpEventContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem;
`;
const EventInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 650px) {
        flex-wrap: nowrap;
        overflow: auto;
    }
`;
const SportsContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 4rem;
    align-items: center;
    background-color: var(--color-brand-green-500);
    color: var(--color-brand-bone-300);
    * {
        font-size: 1.5rem;
        margin: 0.5rem;
    }
    && > * {
        cursor: pointer;
        &:hover:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 5px;
            bottom: 5px;
            left: 0;
            transform: scaleX(1);
            background: var(--color-brand-bone-300);
            transform-origin: bottom left;
            transition: transform 0.5s ease-out;
        }

        position: relative;
        transition: transform 0.5s ease-out;

        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 5px;
            bottom: -15px;
            left: 0;
            transform: scaleX(0);
            background: var(--color-brand-bone-300);
            transform-origin: bottom right;
        }
    }

    @media (max-width: 480px) {
        flex-wrap: wrap;
        height: fit-content;

        span {
            font-size: 0.9rem;
        }
    }
`;

const OccurenceButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    background-color: var(--color-brand-green-500);
    cursor: pointer;
    padding: 0.2rem 1rem;
    color: var(--color-white);
    border-radius: 3rem;
    align-self: flex-start;
    * {
        background-color: var(--color-brand-green-500);
    }

    &&:hover {
        background-color: var(--color-grey-200);
    }
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    overflow: auto;
    transition: 1s translate;
    img {
        border-radius: 1rem;
    }
`;

function EventDetails() {
    var variable = true;
    const { setThemeMode } = useContext(AppContext);
    const navigate = useNavigate();
    useLayoutEffect(() => {
        setThemeMode("event");

        return () => {
            setThemeMode("");
        };
    }, [setThemeMode]);

    const { event, isLoading, error } = useGetEventBySlug();

    const eventId = event?.id;

    if (isLoading) return <Spinner />;
    return (
        <>
            <DivImg>
                <Img src={event.bannerPhotoUrl} />
                <h1>{event.title}</h1>
            </DivImg>
            <SportsContainer>
                {event?.sports?.map((sport, index) => (
                    <StyledIcon
                        key={index}
                        onClick={() =>
                            navigate(
                                `/user/events/all?page=1&sport-filter=${sport.name}`
                            )
                        }
                    >
                        <Icon sportName={sport.name}></Icon>
                    </StyledIcon>
                ))}
            </SportsContainer>
            <EventInfo>
                <Badge>
                    <DateSpan>Empieza</DateSpan>
                    <LuCalendar />
                    <DateSpan>
                        {formatDate(new Date(event.start), true)}
                    </DateSpan>
                </Badge>
                <Badge>
                    <DateSpan>Acaba</DateSpan>
                    <LuCalendarClock />
                    <DateSpan>{formatDate(new Date(event.end), true)}</DateSpan>
                </Badge>
                <Badge>
                    <DateSpan>Status</DateSpan>
                    <Icon sportName={event.status} withText={false} />
                    <DateSpan>{event.status}</DateSpan>
                </Badge>
                <Badge>
                    <DateSpan>Catering</DateSpan>
                    <Icon sportName={event.catering} withText={false} />
                    <DateSpan>{event.catering == 1 ? "si" : "no"}</DateSpan>
                </Badge>
            </EventInfo>
            <SignUpEventContainer>
                {variable ? (
                    <OccurenceButton onClick={() => navigate("invite")}>
                        Invita
                        <Button.Animated $rounded>+</Button.Animated>
                    </OccurenceButton>
                ) : (
                    <Switch
                        icon={<LuCalendarPlus />}
                        checkedIcon={<LuCalendarCheck2 />}
                        checked={false}
                        message={"¡Apuntate!"}
                        checkedMessage={"Ya estas apuntado"}
                    />
                )}
            </SignUpEventContainer>
            <EventBody>
                <SideBody></SideBody>
                <Description>{event.description}</Description>

                <SideBody></SideBody>
            </EventBody>
            <ImgContainer>
                {event?.eventPhotosUrls?.map((url, index) => (
                    <img
                        style={{
                            width: "16rem",
                            height: "16rem",
                            objectFit: "cover",
                        }}
                        key={index}
                        src={`${url}`}
                        alt="hola"
                    />
                ))}
            </ImgContainer>
            <Occurrence eventId={event?.id} />
            <Outlet context={[eventId]} />
        </>
    );
}

export default EventDetails;
