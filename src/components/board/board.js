import React, { useContext } from "react"
import style from "./board.module.scss"

import { AttemptContext } from "../../context/attempt-context"
import Attempt from "./attempt"

export default props => {
  const AttemptState = useContext(AttemptContext)

  return (
    <div className={style.board}>
      {AttemptState.attempts.map(a => (
        <Attempt key={a.i} attempt={a} />
      ))}
    </div>
  )
}
