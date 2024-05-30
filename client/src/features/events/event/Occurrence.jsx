import styled from "styled-components";
import { useGetOccurrencesById } from "./useGetOccurrencesById";
import Button from "../../../ui/Button";
import DateSpan from "../../../ui/DateSpan";
import { useNavigate } from "react-router";
import { formatDate } from "../../../utils/dateFormatter";
import { useRef } from "react";

const Container = styled.div`
    width: 100%;
    overflow-x: auto;
    position: relative;
`;

const EventOccurences = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 20rem;
    flex-wrap: nowrap;
    && > * {
        margin: 0.5rem;
    }
`;

const OccurenceNode = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.75rem;
    cursor: pointer;
    align-self: ${(props) =>
        props.$index % 2 === 0 ? "flex-start" : "flex-end"};
    color: var(--color-brand-green-300);
    font-weight: bold;
    min-width: 25rem;
    border-radius: 1rem;
    overflow: hidden;

    background-color: var(--color-brand-bone-300);
    && > div:first-child {
        position: absolute;
        border-radius: 1rem;
        right: 0;
        left: 0;

        min-width: 20rem;
        height: 100%;
        background-color: ${(props) =>
            new Date(props.$date) < new Date()
                ? "rgba(50, 50, 50, 0.5)"
                : "none"};
    }

    picture {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        outline: 2px solid var(--color-brand-green-300);
        min-width: 7rem;
        max-width: 7rem;
        height: 7rem;
        object-fit: cover;
    }
`;

const DivFlex = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const OccurenceInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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

const TimeLine = styled.hr`
    position: absolute;
    border: none;
    top: calc(50% - 0.1rem);
    left: 0;
    right: 0;
    height: 5px;
    background-color: var(--color-grey-200);
`;

const Description = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 16rem;
`;

function Occurrence({ eventId }) {
    const {
        occurrences,
        isLoading: isLoadingOccur,
        error: errorOccur,
    } = useGetOccurrencesById(eventId);
    const navigate = useNavigate();

    return (
        <DivFlex>
            <OccurenceButton onClick={() => navigate("crear-occurencia")}>
                Ocurrencia
                <Button.Animated $rounded>+</Button.Animated>
            </OccurenceButton>
            <Container>
                {/* <TimeLine /> */}

                <EventOccurences>
                    {occurrences?.length > 0 &&
                        occurrences.map((occurr, index) => (
                            <OccurenceNode
                                id={occurr.slug}
                                key={occurr?.id}
                                $index={index}
                                $date={occurr?.start}
                            >
                                <div></div>
                                <picture>
                                    <source
                                        srcSet={occurr?.occurencePhotoUrl}
                                    />
                                    <img src="/EVENT.png" />
                                </picture>
                                <OccurenceInfo>
                                    <span>{occurr?.title}</span>
                                    <DateSpan>
                                        {formatDate(
                                            new Date(occurr?.start),
                                            true
                                        )}
                                    </DateSpan>
                                    <Description>
                                        {occurr.description}
                                    </Description>
                                </OccurenceInfo>
                            </OccurenceNode>
                        ))}
                </EventOccurences>
            </Container>
        </DivFlex>
    );
}

export default Occurrence;
