import React, { useContext } from "react"
import style from "./modal-layout.module.scss"

import { AttemptContext } from "../../context/attempt-context"
import ModalLayout from "./modal-layout"
import Pin from "../board/pin"

export default props => {
  const AttemptState = useContext(AttemptContext)

  const handleBtnClick = ev => {
    AttemptState.setView("play")
  }

  return (
    <ModalLayout>
      <h1>How to Play</h1>

      <div className={style.content_block}>
        <h3>Make your guess</h3>
        <p>Select a colored peg from the left.</p>
        <p>Add a peg to one of the four spaces in the active row.</p>
      </div>

      <div className={style.content_block}>
        <h3>Feedback</h3>
        <p>
          Feedback for each row happens in the four small pins on the right.
        </p>
        <p>Feedback is calculated when the fourth peg is placed.</p>
      </div>

      <div className={style.content_block}>
        <h3>Interpreting the Feedback Pins</h3>
        <p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Black pin</span>
            <Pin color="black" />
          </div>
          ...A color is correct and in the correct position.
        </p>
        <p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>White pin</span>
            <Pin color="white" />
          </div>
          ...A color is correct but not in the correct position.
        </p>
        <p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Greyed out pin</span>
            <Pin color="hole" />
          </div>
          ...A color is not correct.
        </p>
      </div>

      <div className={style.content_block}>
        <h3>Try to win</h3>
        <p>A four color answer is randomly chosen for each game.</p>
        <p>Every answer will consist of exactly four colors.</p>
        <p>Answers will not have repeating colors.</p>
        <p>Answers will not have empty/blank pegs.</p>
        <p>A winner will guess the answer before running out of guesses.</p>
        <p>A loser will run out of guesses before choosing correctly.</p>
      </div>

      <div className={style.content_block}>
        <h3>How to not lose</h3>
        <p>Try harder.</p>
      </div>

      <div className={style.content_block}>
        <h3>More Info</h3>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mastermind Wikipedia article
          </a>
        </p>
        <p>
          <a
            href="https://github.com/bighill/big-mastermind"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code on GitHub
          </a>
        </p>
      </div>
      <div className="btn-wrap">
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
