import React, { Component } from "react";

class GameInfo extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          You pick:
          <span className="ml-2 text-danger">High</span>
        </div>
        <div className="display-4">
          Total Win Game:
          <span className="ml-2 text-success">1</span>
        </div>
        <div className="display-4">
          Total Game Play:
          <span className="ml-2 text-primary">3</span>
        </div>
      </div>
    );
  }
}

export default GameInfo;
