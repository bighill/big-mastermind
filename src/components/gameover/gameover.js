import React, { useContext } from "react"
import style from "./gameover.module.scss"

import { AttemptContext } from "../../context/attempt-context"

export default props => {
  const AttemptState = useContext(AttemptContext)

  const message = props.win_lose === "win" ? "You won!" : "You lose :("

  const handleBtnClick = ev => {
    ev.preventDefault()
    AttemptState.reset()
  }

  return (
    <div className={style.game_over}>
      <div className={style.content}>
        <h1>{message}</h1>
        <button onClick={handleBtnClick}>Play Again</button>
      </div>
    </div>
  )
}
