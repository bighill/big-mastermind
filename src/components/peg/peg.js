import React from "react"
import style from "./peg.module.scss"

export default props => {
  const _className = `
    ${style.peg}
    ${style["peg_" + props.color_i]}
    ${props.selected && style.selected}
  `

  return (
    <div
      className={_className}
      data-attempt_i={props.attempt_i}
      data-i={props.i}
      data-color_i={props.color_i}
      onClick={props.onClick}
    ></div>
  )
}
