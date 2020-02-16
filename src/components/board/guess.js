import React, { useContext } from "react"
import style from "./guess.module.scss"

import { PegContext } from "../../context/peg-context"
import { AttemptContext } from "../../context/attempt-context"
import Peg from "../peg/peg"

export default props => {
  const PegState = useContext(PegContext)
  const AttemptState = useContext(AttemptContext)

  const procGuess = () => {
    console.log("procGuess()")
  }

  const insertPeg = (attempt_i, guessPeg_i) => {
    let attempts = [...AttemptState.attempts]
    attempts[attempt_i].guessPegs[guessPeg_i].color_i = PegState.selected
    AttemptState.setAttempts(attempts)
  }

  const removePeg = (attempt_i, guessPeg_i) => {
    let attempts = [...AttemptState.attempts]
    attempts[attempt_i].guessPegs[guessPeg_i].color_i = 0
    AttemptState.setAttempts(attempts)
  }

  const handlePegClick = ev => {
    const guessPegColor_i = Number(ev.target.dataset.color_i)
    const attempt_i = ev.target.dataset.attempt_i
    const guessPeg_i = ev.target.dataset.i

    if (typeof PegState.selected !== "number") {
      return
    }

    if (guessPegColor_i > 0) {
      removePeg(attempt_i, guessPeg_i)
    } else {
      insertPeg(attempt_i, guessPeg_i)
      procGuess()
    }
  }

  const guess = () =>
    props.guessPegs.map(p => (
      <Peg
        key={p.i}
        i={p.i}
        color_i={p.color_i}
        attempt_i={p.attempt_i}
        selected={false}
        onClick={handlePegClick}
      />
    ))

  return <div className={style.guess}>{guess()}</div>
}
