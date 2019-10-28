import React from 'react';

const WokeupButton = (props) => {
    return (
        <div className="WokeupButton">
          <button onClick={props.onClick}>
            I Woke up now!
          </button>
        </div>
      );
}

export default WokeupButton;