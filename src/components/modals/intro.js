import React, { useContext } from "react"

import { AttemptContext } from "../../context/attempt-context"
import ModalLayout from "./modal-layout"

export default props => {
  const AttemptState = useContext(AttemptContext)

  const handleHowToPlayClick = ev => {
    AttemptState.setView("info")
  }

  const handleBtnClick = ev => {
    AttemptState.setView("play")
  }

  return (
    <ModalLayout>
      <div className="content">
        <h1>Big Mastermind</h1>
        <p>A web app adaptation of the classic Mastermind board game.</p>
        <div
          onClick={handleHowToPlayClick}
          onKeyUp={handleHowToPlayClick}
          role="button"
          tabIndex="0"
        >
          <p className="internallink">How to Play</p>
        </div>
        <div
          className="btn"
          onClick={handleBtnClick}
          onKeyUp={handleBtnClick}
          role="button"
          tabIndex="0"
        >
          Play
        </div>
      </div>
    </ModalLayout>
  )
}
