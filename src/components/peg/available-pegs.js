import React, { useContext } from "react"
import { PegContext } from "../../context/peg-context"
import Peg from "./peg"

const colorsAvailablePerGuess = 6

export default props => {
  const PegState = useContext(PegContext)

  const handlePegClick = ev => {
    PegState.setSelected(Number(ev.target.dataset.color_i))
  }

  const available = () => {
    let availablePegs = []
    for (let i = 1; i < colorsAvailablePerGuess + 1; i++) {
      // don't use i=0 here
      availablePegs.push(
        <Peg
          key={i}
          i={i}
          color_i={i}
          attempt={null}
          selected={PegState.selected === i}
          enabled={false}
          onClick={handlePegClick}
        />
      )
    }
    return availablePegs
  }

  return <div id="available-pegs">{available()}</div>
}
