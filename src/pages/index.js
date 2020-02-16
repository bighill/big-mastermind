import React from "react"
import "../style/global.scss"

import { PegProvider } from "../context/peg-context"
import { AttemptProvider } from "../context/attempt-context"

import Answer from "../components/answer/answer"
import Board from "../components/board/board"
import AvailablePegs from "../components/available/available-pegs"

export default () => (
  <PegProvider>
    <AttemptProvider>
      <div id="app">
        <Answer />
        <div id="meat">
          <AvailablePegs />
          <Board />
        </div>
      </div>
    </AttemptProvider>
  </PegProvider>
)
