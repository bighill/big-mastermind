import React, { useState } from "react"
import { Answer } from "../lib/game-engine"

const AttemptContext = React.createContext([{}, () => {}])

const num = {
  attemptsPerGame: 10,
  pegsPerGuess: 4,
}

const AttemptProvider = props => {
  const defaultGuess = function(attempt_i) {
    let guessPegs = []
    for (let i = 0; i < num.pegsPerGuess; i++) {
      guessPegs.push({ i: i, attempt_i: attempt_i, color_i: 0 })
    }
    return guessPegs
  }

  const defaultAttempts = () => {
    let attempts = []
    for (let i = 0; i < num.attemptsPerGame; i++) {
      attempts.push({
        i: i,
        enabled: false,
        guessPegs: defaultGuess(i),
        result: {
          isProcessed: false,
          correctColor_CorrectPlacement: 0,
          correctColor_WrongPlacement: 0,
        },
      })
    }
    attempts[0].enabled = true
    return attempts
  }

  const reset = () => {
    setAnswer(Answer())
    setGameOver("")
    setAttempts(defaultAttempts())
  }

  const [attempts, setAttempts] = useState(defaultAttempts())
  const [answer, setAnswer] = useState(Answer())
  const [gameOver, setGameOver] = useState("")

  const App = {
    attempts: attempts,
    setAttempts: setAttempts,
    answer: answer,
    setAnswer: setAnswer,
    gameOver: gameOver,
    setGameOver: setGameOver,
    reset: reset,
  }

  window.__attempts = attempts

  return (
    <AttemptContext.Provider value={App}>
      {props.children}
    </AttemptContext.Provider>
  )
}

export { AttemptContext, AttemptProvider }
