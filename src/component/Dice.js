import React, { Component } from "react";
import { connect } from "react-redux";

class Dice extends Component {
  renderDiceArray = () => {
    // get props from redux
    return this.props.diceArray.map((dice, index) => {
      return (
        <img
          kye={index}
          style={{ width: "80px", height: "80px" }}
          className="ml-2"
          src={dice.img}
          alt={dice.img}
        />
      );
    });
  };
  render() {
    return <div>{this.renderDiceArray()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    diceArray: state.HighLowGameReducer.diceArray,
  };
};

export default connect(mapStateToProps)(Dice);
