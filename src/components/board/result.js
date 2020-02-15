import React from "react"
import style from "./result.module.scss"

import Pin from "./pin"

export default props => {
  return (
    <div>
      <div className={style.result_row}>
        <Pin i="0" color="hole" />
        <Pin i="1" color="hole" />
      </div>
      <div className={style.result_row}>
        <Pin i="2" color="hole" />
        <Pin i="4" color="hole" />
      </div>
    </div>
  )
}
