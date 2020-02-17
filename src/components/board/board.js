import React, { useContext } from "react"
import { AttemptContext } from "../../context/attempt-context"

import Attempt from "./attempt"

export default props => {
  const AttemptState = useContext(AttemptContext)

  return (
    <div id="board">
      {AttemptState.attempts.map(a => (
        <Attempt key={a.i} attempt={a} />
      ))}
    </div>
  )
}
