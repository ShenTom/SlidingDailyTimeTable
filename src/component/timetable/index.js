import React from 'react';
import dateFormat from 'dateformat';
import './timetable.css';

const Timetable = (props) => {
    const schedule = {
        0: "eat breakfast",
        120: "do homework",
        300: "eat",
        900: "watch"
    }

    const get_next_time = (time) => {
        let keys = Object.keys(schedule)
        let next_time = 24*60
        keys.map( (key) => {
            if (key > time && key < next_time) {
                next_time = key
            }
        })
        return next_time
    }
    const createRow = (key) => {
        let value = schedule[key]
        let next = get_next_time(key)
        const _time = new Date(props.start.getTime() + (key * 60 * 1000))
        next = new Date(props.start.getTime() + next*60*1000)
        let isCurrentTime = false;
        const currentTime = new Date();
        if (currentTime < next && currentTime > _time) {
            isCurrentTime = true
        }
        return(
        <div id={key} className={isCurrentTime ? 'current-time-row': 'not-current-time-row'}>
            {dateFormat(_time, "h:MM TT")} - {dateFormat(next, "h:MM TT")} ------  {value}
        </div>)
    }
    return (
        <div className="Timetable">
            {Object.keys(schedule).map(createRow)}
        </div>
      );
}

export default Timetable;