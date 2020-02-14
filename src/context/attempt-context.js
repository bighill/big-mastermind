import React, { useState } from "react";
import Engine from "../lib/game-engine";

const AttemptContext = React.createContext([{}, () => {}]);

const num = {
  attempts: 4,
  pegsPerGuess: 4
};

const AttemptProvider = props => {
  const defaultGuess = function(attemptI) {
    // one guess is several pegs
    let result = [];
    for (let i = 0; i < num.pegsPerGuess; i++) {
      result.push({ i: i, id: `${attemptI}_${i}`, color_i: 0 });
    }
    return result;
  };

  const defaultAttempts = () => {
    let result = [];
    for (let i = 0; i < num.attempts; i++) {
      result.push({ i: i, guess: defaultGuess(i), state: "disabled" });
    }
    result[0].state = "ready";
    return result;
  };

  const [attempts, setAttempts] = useState(defaultAttempts);

  const App = {
    attempts: attempts,
    setAttempts: setAttempts,
    answer: Engine.answer()
  };

  return (
    <AttemptContext.Provider value={App}>
      {props.children}
    </AttemptContext.Provider>
  );
};

export { AttemptContext, AttemptProvider };
