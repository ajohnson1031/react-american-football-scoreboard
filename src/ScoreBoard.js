import React from "react";
import "./App.css";

class ScoreBoard extends React.Component {
  render() {
    let totalHome = this.props.lionTD + this.props.lionFG,
      totalAway = this.props.tigerTD + this.props.tigerFG;
    return (
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{totalHome}</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{totalAway}</div>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
