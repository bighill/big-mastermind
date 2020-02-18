import React, { useContext } from "react"
import style from "./gameover.module.scss"

import { AttemptContext } from "../../context/attempt-context"

export default props => {
  const AttemptState = useContext(AttemptContext)

  const message = props.win_lose === "win" ? "You won !!1!" : "You lose :("

  const handleBtnClick = ev => {
    ev.preventDefault()
    AttemptState.reset()
  }

  return (
    <div className={style.game_over}>
      <div className={style.content}>
        <h1>{message}</h1>
        <h2
          className={style.btn}
          onClick={handleBtnClick}
          onKeyUp={handleBtnClick}
          role="button"
          tabIndex="0"
        >
          Play Again
        </h2>
      </div>
    </div>
  )
}
