import React, { useContext } from "react"

import { AttemptContext } from "../context/attempt-context"
import Answer from "./answer/answer"
import Board from "./board/board"
import AvailablePegs from "./available/available-pegs"
import Intro from "./modals/intro"
import Info from "./modals/info"
import GameOver from "./modals/gameover"

export default () => {
  const AttemptState = useContext(AttemptContext)

  const showAnswer = () => {
    if (typeof window === "undefined") {
      return
    }
    const url = new URL(window.location.href)
    return url.searchParams.get("cheat") && <Answer />
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
      {AttemptState.view === "info" && <Info />}
      {AttemptState.view === "win" && <GameOver win_lose="win" />}
      {AttemptState.view === "lose" && <GameOver win_lose="lose" />}
    </div>
  )
}
