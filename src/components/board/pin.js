import React from "react"
import style from "./pin.module.scss"

export default props => {
  return (
    <div
      data-i={props.i}
      className={`${style.pin} ${style[props.color]}`}
    ></div>
  )
}
