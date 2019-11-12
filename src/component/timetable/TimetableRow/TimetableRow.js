import React from 'react'
import './TimetableRow.css'
import dateFormat from 'dateformat';

const TimetableRow = (props) => {
    const dateTime = props.dateTime
    const value = props.value
    let isCurrentTime = false;
    const currentTime = new Date();
    const start = new Date(dateTime)
    const end = new Date(start.getTime() + 1000*60*60)
    if (currentTime < end && currentTime > start) {
        isCurrentTime = true
    }
    return(
        <tr > 
            <td className='time-cell'>
                <div className='time-label'>
                    {dateFormat(dateTime, "h:MM TT")}
                </div>
                
            </td>
            <td className={ isCurrentTime ? 'timeslot-cell-current timeslot-cell' : 'timeslot-cell'}>{value}</td>
        </tr>
    )
};

export default TimetableRow;