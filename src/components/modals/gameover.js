import React, { useContext } from "react"

import { AttemptContext } from "../../context/attempt-context"
import ModalLayout from "./modal-layout"

export default props => {
  const AttemptState = useContext(AttemptContext)

  const message = props.win_lose === "win" ? "You won !!1!" : "You lose :("

  const handleBtnClick = ev => {
    ev.preventDefault()
    AttemptState.reset()
  }

  return (
    <ModalLayout>
      <h1>{message}</h1>
      <div
        className="btn"
        onClick={handleBtnClick}
        onKeyUp={handleBtnClick}
        role="button"
        tabIndex="0"
      >
        Play Again
      </div>
    </ModalLayout>
  )
}
