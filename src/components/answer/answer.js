import React, { useContext } from "react"
import { AttemptContext } from "../../context/attempt-context"
import Peg from "../peg/peg"

export default () => {
  const AttemptState = useContext(AttemptContext)

  return (
    <div id="answer" style={{ display: "flex", marginLeft: "10em" }}>
      {AttemptState.answer.map(p => (
        <Peg
          key={p.i}
          i={p.i}
          color_i={p.color_i}
          attempt={null}
          selected={false}
          enabled={false}
          onClick={null}
        />
      ))}
    </div>
  )
}
