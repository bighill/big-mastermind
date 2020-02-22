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
        <h1>Info</h1>
        <p>
          <em>Game play instructions coming soon</em>
        </p>
        <h2>How to Play Big Mastermind</h2>
        <h3>Make a guess</h3>
        <p>yada yada yada</p>
        <h3>Scoring each guess</h3>
        <p>yada yada yada</p>
        <h3>More info about the original Mastermind board game</h3>
        <div>
          <a
            href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
            target="_blank"
          >
            Mastermind: Wikipedia
          </a>
        </div>
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
