import React from "react"
import style from "./attempt.module.scss"

import Guess from "./guess"
import Result from "./result"

export default props => {
  return (
    <div className={style.attempt}>
      <Guess guess={props.attempt.guess} />
      <Result />
    </div>
  )
}
