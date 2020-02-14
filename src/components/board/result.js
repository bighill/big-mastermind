import React from "react";

import Pin from "./pin";

export default props => {
  return (
    <div className="result">
      <div className="result-row">
        <Pin i="0" color="hole" />
        <Pin i="1" color="hole" />
      </div>
      <div className="result-row">
        <Pin i="2" color="hole" />
        <Pin i="4" color="hole" />
      </div>
    </div>
  );
};
