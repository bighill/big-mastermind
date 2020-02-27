import React, { useContext } from "react"
import style from "./available-pegs.module.scss"

import { AttemptContext } from "../../context/attempt-context"
import { PegContext } from "../../context/peg-context"
import Peg from "../peg/peg"

const colorsAvailablePerGuess = 6

export default props => {
  const AttemptState = useContext(AttemptContext)
  const PegState = useContext(PegContext)

  const handlePegClick = ev => {
    PegState.setSelected(Number(ev.target.dataset.color_i))
  }

  const handleInfoClick = ev => {
    AttemptState.setView("how")
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
          attempt=""
          selected={PegState.selected === i}
          enabled=""
          onClick={handlePegClick}
        />
      )
    }
    return availablePegs
  }

  const info = () => (
    <Peg
      i={null}
      color_i={0}
      attempt={null}
      selected=""
      enabled=""
      onClick={handleInfoClick}
      className={style.info}
    >
      i
    </Peg>
  )

  return (
    <div className={style.available_pegs_wrap}>
      <div className={style.available_pegs}>
        {available()}
        <div className={style.info}>{info()}</div>
      </div>
    </div>
  )
}
