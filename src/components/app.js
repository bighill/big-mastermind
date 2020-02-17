import React, { useContext } from "react"

import { AttemptContext } from "../context/attempt-context"
import Answer from "./answer/answer"
import Board from "./board/board"
import AvailablePegs from "./available/available-pegs"
import GameOver from "./gameover/gameover"

export default () => {
  const AttemptState = useContext(AttemptContext)

  const showAnswer = () => {
    const url = new URL(window.location.href)
    return url.searchParams.get("cheat") && <Answer />
  }

  return (
    <div id="app">
      {showAnswer()}

      {AttemptState.gameOver === "" && (
        <div id="meat">
          <AvailablePegs />
          <Board />
        </div>
      )}

      {AttemptState.gameOver && <GameOver win_lose={AttemptState.gameOver} />}
    </div>
  )
}
