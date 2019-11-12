import React, { useState } from 'react';
import WakeupButton from '../WakeupButton/WakeupButton'
import Timetable from '../Timetable/Timetable'
import * as Constants from '../../constants'
import './App.css';

const App = (props) => {

  const d = new Date()
  const [wakeupTime, setWakeupTime] = useState(new Date(d.getTime() - 60*1000*200))
  const [history, setHistory] = useState([new Date(d.getTime() - 60*1000*200)])

  const buttonClick = () => {
    let d = new Date(Date())
    const last_date = history[history.length - 1]
    const diff = (d - last_date)/(1000 * 60 * 60)
    if (diff < Constants.WAKEUPINTERVAL){
      console.log('Are you sure u woke up less than ' + Constants.WAKEUPINTERVAL + ' hours ago')
    } else {
      setWakeupTime(d)
      setHistory([...history, d])
    }  
  }

  return (
    <div className="App">
      <WakeupButton onClick={buttonClick} />
      <Timetable start={wakeupTime}/>
    </div>
  );
}

export default App;
