import React, { useContext } from "react";
import { PegContext } from "../context/peg-context";
import { AttemptContext } from "../context/attempt-context";
import Engine from "../lib/game-engine";

export default props => {
  const PegState = useContext(PegContext);
  const AttemptState = useContext(AttemptContext);

  const analyzeAttempt = data => {
    const result = Engine(data);
    console.log(result);
  };

  const insertPeg = (attemptI, guessPegI) => {
    let attempts = [...AttemptState.attempts];
    attempts[attemptI].guess[guessPegI].color_i = PegState.selected;
    AttemptState.setAttempts(attempts);
    analyzeAttempt(attempts);
  };

  const removePeg = (attemptI, guessPegI) => {
    let attempts = [...AttemptState.attempts];
    attempts[attemptI].guess[guessPegI].color_i = 0;
    AttemptState.setAttempts(attempts);
  };

  const handleAvailablePegClick = colorI => PegState.setSelected(colorI);

  const handleGuessPegClick = (id, color_i) => {
    if (typeof PegState.selected !== "number") {
      return;
    }
    const idArr = id.split("_");
    const attemptI = Number(idArr[0]);
    const guessPegI = Number(idArr[1]);
    if (color_i > 0) {
      removePeg(attemptI, guessPegI);
    } else {
      insertPeg(attemptI, guessPegI);
    }
  };

  const handlePegClick = ev => {
    if (props.available) {
      handleAvailablePegClick(Number(ev.target.dataset.color_i));
    } else {
      handleGuessPegClick(ev.target.id, Number(ev.target.dataset.color_i));
    }
  };

  const selected = () => {
    if (props.available && PegState.selected === props.peg.i) {
      return "selected";
    }
    return "";
  };

  return (
    <div
      id={props.peg.id}
      className={`peg peg-${props.peg.color_i} ${selected()}`}
      data-i={props.peg.i}
      data-color_i={props.peg.color_i}
      onClick={handlePegClick}
    ></div>
  );
};
