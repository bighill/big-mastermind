import React, { useContext } from "react"

import { AttemptContext } from "../../context/attempt-context"
import ModalLayout from "./modal-layout"

export default props => {
  const AttemptState = useContext(AttemptContext)

  const handleBtnClick = ev => {
    AttemptState.setView("play")
  }

  return (
    <ModalLayout>
      <div className="content">
        <h1>Big Mastermind</h1>
        <p>A web app adaptation of the classic Mastermind board game.</p>
        <h2
          className="btn"
          onClick={handleBtnClick}
          onKeyUp={handleBtnClick}
          role="button"
          tabIndex="0"
        >
          Play
        </h2>
      </div>
    </ModalLayout>
  )
}
