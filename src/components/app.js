import React, { useContext } from "react"

import { AttemptContext } from "../context/attempt-context"
import Answer from "./answer/answer"
import Board from "./board/board"
import AvailablePegs from "./available/available-pegs"
import Intro from "./modals/intro"
import How from "./modals/how"
import GameOver from "./modals/gameover"

export default () => {
  const AttemptState = useContext(AttemptContext)

  const showAnswer = () => {
    if (typeof window === "undefined") {
      return null
    }
    return window.location.search === "?cheat" ? <Answer /> : null
  }

  return (
    <div id="app">
      {showAnswer()}

      {AttemptState.view === "play" && (
        <div id="meat">
          <AvailablePegs />
          <Board />
        </div>
      )}

      {AttemptState.view === "intro" && <Intro />}
      {AttemptState.view === "how" && <How />}
      {AttemptState.view === "win" && <GameOver win_lose="win" />}
      {AttemptState.view === "lose" && <GameOver win_lose="lose" />}
    </div>
  )
}
