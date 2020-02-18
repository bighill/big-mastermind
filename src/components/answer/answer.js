import React, { useContext } from "react"
import style from "./answer.module.scss"

import { AttemptContext } from "../../context/attempt-context"
import Peg from "../peg/peg"

export default () => {
  const AttemptState = useContext(AttemptContext)

  return (
    <div className={style.answer}>
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
