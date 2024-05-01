import styled from "styled-components"

const StyleCalendar = styled.div`
    height: 15rem;
    width: 25rem;
    outline: 1px red solid;


`
const StyleDays = styled.div`
    display:grid;
    grid-template-columns: repeat(7,1fr);
    grid-auto-rows: 2rem;
    outline: 1px red solid;
    align-items: center;


`
const dayIndexes = ['L','M','X','J','V','S','D'];
const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]


function Calendar() {
    return (
        <StyleCalendar>
            <StyleDays> MAYO </StyleDays>
            <StyleDays> 
                {dayIndexes.map((dayIndex,index)=>
                    <div key={index} >{dayIndex}</div>
            )}
            </StyleDays>
            <StyleDays>   
                {days.map((day)=>
                <div key={day}>{day}</div>
                )}

            </StyleDays>
        </StyleCalendar>
    )
}

export default Calendar
