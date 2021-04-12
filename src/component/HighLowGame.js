import React, { Component } from "react";
import "./HighLowGame.css";
import Dice from "./Dice";
import GameInfo from "./GameInfo";

class HighLowGame extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-title text-center display-4 mt-5">
          High Low Game
        </div>
        <div className="row text-center mt-5">
          <div className="col-5">
            <button className="btnGame btn-high">High</button>
          </div>
          <div className="col-2">
            <Dice />
          </div>
          <div className="col-5">
            <button className="btnGame btn-low">Low</button>
          </div>
        </div>
        <div className="game-info text-center">
          <GameInfo />

          <button className="btn btn-success p-4 display-4 mt-5">
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

export default HighLowGame;
