import React, { useState } from "react";

const PegContext = React.createContext([{}, () => {}]);

const PegProvider = props => {
  const defaultPegs = function() {
    let result = [];
    for (let i = 1; i <= 6; i++) {
      result.push({ i: i, id: `available_${i}`, color_i: i });
    }
    return result;
  };
  const [pegs, setPegs] = useState(defaultPegs);
  const [selected, setSelected] = useState(null);

  const App = {
    pegs: pegs,
    setPegs: setPegs,
    selected: selected,
    setSelected: setSelected
  };

  return (
    <PegContext.Provider value={App}>{props.children}</PegContext.Provider>
  );
};

export { PegContext, PegProvider };
