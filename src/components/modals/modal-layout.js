import React from "react"
import style from "./modal-layout.module.scss"

export default ({ children }) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{children}</div>
    </div>
  )
}
