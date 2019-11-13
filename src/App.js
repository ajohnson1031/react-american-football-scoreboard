//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import ScoreBoard from "./ScoreBoard";
import BottomRow from "./BottomRow";

function App() {
  let [lionTD, setLionTD] = useState(0);
  let [tigerTD, setTigerTD] = useState(0);

  let [lionFG, setLionFG] = useState(0);
  let [tigerFG, setTigerFG] = useState(0);

  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard
          lionTD={lionTD}
          lionFG={lionFG}
          tigerTD={tigerTD}
          tigerFG={tigerFG}
        />
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => {
              setLionTD((lionTD += 6));
            }}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setLionFG(lionFG + 1)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setTigerTD(tigerTD + 6)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setTigerFG(tigerFG + 1)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
