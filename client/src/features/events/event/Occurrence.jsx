import styled from "styled-components"
import { useGetOccurrencesById } from "./useGetOccurrencesById";

const EventOccurences = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: fit-content;
  color: var(--color-brand-bone-300);
  *{
    margin: 0.5rem;
  }

`

function Occurrence({eventId}) {
    const {occurrences,isLoading:isLoadingOcccur,error:errorOccur} = useGetOccurrencesById(eventId) ;

    return (
        <EventOccurences>
                {occurrences?.length > 0 && occurrences?.map((occurr) =>

                        <div key={occurr?.id}>{occurr?.title}</div>

                        )}
        </EventOccurences>
    )
}

export default Occurrence
