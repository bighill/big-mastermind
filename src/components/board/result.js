import React, { useState, useContext, useEffect } from "react"
import style from "./result.module.scss"
import { AttemptContext } from "../../context/attempt-context"

import Pin from "./pin"

export default props => {
  const AttemptState = useContext(AttemptContext)
  const [colors, setColors] = useState(["hole", "hole", "hole", "hole"])

  useEffect(() => {
    const result = AttemptState.attempts[props.attempt_i].result
    if (!result.isProcessed) {
      return
    }

    const defaultColors = ["hole", "hole", "hole", "hole"]
    let black = []
    let white = []

    for (let i = 0; i < result.correctColor_CorrectPlacement; i++) {
      black.push("black")
    }

    for (let i = 0; i < result.correctColor_WrongPlacement; i++) {
      white.push("white")
    }

    const res = [...black, ...white, ...defaultColors].slice(0, 4)
    setColors(res)
  }, [AttemptState.attempts, props.attempt_i])

  return (
    <div className={style.result}>
      <div className={style.result_row_wrap}>
        <div className={style.result_row}>
          <Pin i="0" color={colors[0]} />
          <Pin i="1" color={colors[1]} />
        </div>
        <div className={style.result_row}>
          <Pin i="2" color={colors[2]} />
          <Pin i="3" color={colors[3]} />
        </div>
      </div>
    </div>
  )
}
