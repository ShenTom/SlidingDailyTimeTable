import React from 'react';
import WokeupButton from '../wokeupButton'
import Timetable from '../timetable'
import dateFormat from 'dateformat';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wakeupTime: new Date()
    }
  }
  
  buttonClick = () => {
    let d = new Date(Date())
    this.setState({
      wakeupTime: d
    })
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
