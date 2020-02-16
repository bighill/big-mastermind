import React, { useState } from "react"
import Engine from "../lib/game-engine"

const AttemptContext = React.createContext([{}, () => {}])

const num = {
  attempts: 4,
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
    for (let i = 0; i < num.attempts; i++) {
      attempts.push({ i: i, guessPegs: defaultGuess(i), state: "disabled" })
    }
    attempts[0].state = "ready"
    return attempts
  }

  const [attempts, setAttempts] = useState(defaultAttempts)

  const App = {
    attempts: attempts,
    setAttempts: setAttempts,
    answer: Engine.answer(),
  }

  window.attempts = attempts

  return (
    <AttemptContext.Provider value={App}>
      {props.children}
    </AttemptContext.Provider>
  )
}

export { AttemptContext, AttemptProvider }
