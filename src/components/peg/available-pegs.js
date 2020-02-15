import React, { useContext } from "react"
import { PegContext } from "../../context/peg-context"
import Peg from "./peg"

export default props => {
  const PegState = useContext(PegContext)

  return (
    <div id="available-pegs">
      {PegState.pegs.map(p => (
        <Peg key={p.i} peg={p} available={true} />
      ))}
    </div>
  )
}
