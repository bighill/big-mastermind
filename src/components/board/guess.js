import React from "react";
import Peg from "../peg";

export default props => {
  return (
    <div className="guess">
      {props.guess.map(p => (
        <Peg key={p.i} peg={p} available={false} />
      ))}
    </div>
  );
};
