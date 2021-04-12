import React, { Component } from "react";
import { connect } from "react-redux";

class GameInfo extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          You pick:
          <span className="ml-2 text-danger">
            {this.props.highLow ? "High" : "Low"}
          </span>
        </div>
        <div className="display-4">
          Total Win Game:
          <span className="ml-2 text-success">{this.props.totalWinGame}</span>
        </div>
        <div className="display-4">
          Total Game Play:
          <span className="ml-2 text-primary">{this.props.totalGamePlay}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    highLow: state.HighLowGameReducer.highLow,
    totalWinGame: state.HighLowGameReducer.totalWinGame,
    totalGamePlay: state.HighLowGameReducer.totalGamePlay,
  };
};

export default connect(mapStateToProps)(GameInfo);
