import React, { useState } from "react"

const PegContext = React.createContext([{}, () => {}])

const PegProvider = props => {
  const [selected, setSelected] = useState(null)

  const App = {
    selected: selected,
    setSelected: setSelected,
  }

  return <PegContext.Provider value={App}>{props.children}</PegContext.Provider>
}

export { PegContext, PegProvider }
