import React from 'react';
import WokeupButton from '../wokeupButton'
import Timetable from '../timetable'
import dateFormat from 'dateformat';
import * as Constants from '../../constants'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wakeupTime: new Date(),
      history: []
    }
  }
  
  buttonClick = () => {
    let d = new Date(Date())
    const last_date = this.state.history[this.state.history.length - 1]
    const diff = (d - last_date)/(1000 * 60 * 60)
    if (diff < Constants.WAKEUPINTERVAL){
      console.log('Are you sure u woke up less than ' + Constants.WAKEUPINTERVAL + ' hours ago')
    } else {
      this.setState({
        wakeupTime: d,
        history: [...this.state.history, d]
      })
    }  
  }
  render() {
    console.log(this.state.wakeupTime)
    return (
      <div className="App">
        <WokeupButton onClick={this.buttonClick} />
        <Timetable start={this.state.wakeupTime}/>
      </div>
    );
  }
}

export default App;
