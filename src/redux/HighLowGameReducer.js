const stateDefault = {
  highLow: true, // true = high (>11) false = low (3-11),
  diceArray: [
    { id: 1, img: "./img/1.png" },
    { id: 1, img: "./img/1.png" },
    { id: 1, img: "./img/1.png" },
  ],
  totalWinGame: 1,
  totalGamePlay: 1,
};

const HighLowGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BET": {
      state.highLow = action.highLow;

      return { ...state };
    }
    case "PLAY_GAME": {
      // Step 1: get randomDiceArray
      let randomDiceArray = [];
      for (let i = 0; i < 3; i++) {
        // Each loop, random number from 1 -> 6
        let randomNum = Math.floor(Math.random() * 6) + 1;
        // Create 1 dice from randomNum
        let randomDice = { id: randomNum, img: `./img/${randomNum}.png` };
        // Push randomDice into randomDiceArray
        randomDiceArray.push(randomDice);
      }

      // Handle increase number game play
      state.totalGamePlay += 1;

      // Handle number win game
      let totalDicePoint = randomDiceArray.reduce((totalPoint, dice, index) => {
        return (totalPoint += dice.id);
      }, 0);

      // Conditional if to see if the player win or lose game
      if (
        (totalDicePoint > 11 && state.highLow === true) ||
        (totalDicePoint <= 11 && state.highLow === false)
      ) {
        state.totalWinGame += 1;
      }

      state.diceArray = randomDiceArray;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default HighLowGameReducer;
