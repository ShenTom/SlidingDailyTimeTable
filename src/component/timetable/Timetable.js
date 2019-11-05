import React from 'react';
import dateFormat from 'dateformat';
import TimetableRow from './TimetableRow'
import './timetable.css';

const Timetable = (props) => {
    const schedule = {
        0: "eat breakfast",
        60: "do homework",
        240: "lunch",
        300: "leetcode",
        360: "personal projects",
        600: "dinner",
        660: "do homework",
        900: "watch",
        960: "sleep",
    }

    const get_next_time = (time) => {
        let keys = Object.keys(schedule)
        let next_time = 24*60
        keys.forEach( (key) => {
            if (key > time && key < next_time) {
                next_time = key
            }
        })
        return next_time
    }

    const getPrevTime = (time) => {
        let keys = Object.keys(schedule)
        let next_time = 0
        keys.forEach( (key) => {
            let _key = parseInt(key)
            if (_key <= time && _key > next_time) {
                next_time = _key
            }
        })
        return next_time
    }


    const createBoilerplateSchedule = (start) => {
        const _sched = {}
        for (let i = 0; i < 24; i++) {
            const minutes = i*60
            let currTime = new Date(start.getTime() + i*60*1000*60)
            const prevTime = getPrevTime(minutes)
            const task = schedule[prevTime]
            _sched[currTime] = task
        }
        return _sched
    }

    const _schedule = createBoilerplateSchedule(props.start)
    
    return (
        <table className="time-table">
            <tbody>
                {Object.keys(_schedule).map( (key) => {
                    return <TimetableRow 
                        key = {key}
                        dateTime = {key}
                        value = {_schedule[key]}/>
                })}
            </tbody>
            
        </table>
      );
}

export default Timetable;