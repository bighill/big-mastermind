import React, { useContext } from "react"
import { AttemptContext } from "../../context/attempt-context"
import Peg from "../peg/peg"

export default () => {
  const AttemptState = useContext(AttemptContext)

  return (
    <div id="answer" style={{ display: "flex", marginLeft: "10em" }}>
      {AttemptState.answer.map(p => (
        <Peg key={p.i} peg={p} available={false} />
      ))}
    </div>
  )
}
