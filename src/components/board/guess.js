import React from "react"
import style from "./guess.module.scss"
import Peg from "../peg/peg"

export default props => {
  return (
    <div className={style.guess}>
      {props.guess.map(p => (
        <Peg key={p.i} peg={p} available={false} />
      ))}
    </div>
  )
}
