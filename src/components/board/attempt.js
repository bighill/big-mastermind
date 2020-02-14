import React from "react";

import Guess from "./guess";
import Result from "./result";

export default props => {
  return (
    <div className="attempt">
      <Guess guess={props.attempt.guess} />
      <Result />
    </div>
  );
};
