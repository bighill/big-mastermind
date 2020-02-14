import React from "react";

export default props => {
  return <div data-i={props.i} className={`pin pin-${props.color}`}></div>;
};
