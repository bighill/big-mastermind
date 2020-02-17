/* Game Engine: Answer & Proc */

//
//  Answer
//
let availableAnswers = []
const defaultAvailableAnswers = [1, 2, 3, 4, 5, 6]

export const Answer = function(allowRepeatsColors) {
  let result = []
  availableAnswers = [...defaultAvailableAnswers]

  for (let i = 0; i < 4; i++) {
    if (allowRepeatsColors) {
      result.push({ i: i, color_i: _randomNumber(1, 6) })
    } else {
      result.push({ i: i, color_i: _randomFromArray(availableAnswers) })
    }
  }
  return result
}

const _randomFromArray = arr => {
  const r = _randomNumber(0, arr.length)
  return arr.splice(r, 1)[0]
}

const _randomNumber = function(min, max) {
  return Math.floor(Math.random() * max + min)
}

//
//  Proc
//
export const Proc = (attemptState, attempt_i) =>
  new Promise(resolve => {
    const answer = [...attemptState.answer]
    let attempts = [...attemptState.attempts]
    const guess = attempts[attempt_i].guessPegs
    let gameOver = ""

    if (_guessNotReady(guess)) {
      return null
    }

    const [
      correctColor_CorrectPlacement,
      correctColor_WrongPlacement,
    ] = _analyzeGuess(guess, answer)

    attempts[attempt_i].result = {
      isProcessed: true,
      correctColor_CorrectPlacement: correctColor_CorrectPlacement,
      correctColor_WrongPlacement: correctColor_WrongPlacement,
    }

    if (correctColor_CorrectPlacement === 4) {
      // win
      gameOver = "win"
      attempts = _noMoreAttempts([...attempts], attempt_i)
    } else if (attempt_i + 1 >= attempts.length) {
      // lose
      gameOver = "lose"
      attempts = _noMoreAttempts([...attempts], attempt_i)
    } else {
      // keep playing
      gameOver = ""
      attempts = _advanceToNextAttempt([...attempts], attempt_i)
    }

    resolve([attempts, gameOver])
  })

const _guessNotReady = guess => guess.find(g => g.color_i === 0)

const _analyzeGuess = (guess, answer) => {
  const answer__color_i__arr = answer.map(a => a.color_i)

  const correctColor_CorrectPlacement = guess.reduce((acc, curr, i) => {
    return curr.color_i === answer__color_i__arr[i] ? acc + 1 : acc
  }, 0)

  const correctColor_WrongPlacement = guess.reduce((acc, curr, i) => {
    if (answer__color_i__arr.indexOf(curr.color_i) < 0) {
      return acc
    }
    return curr.color_i !== answer[i].color_i ? acc + 1 : acc
  }, 0)

  return [correctColor_CorrectPlacement, correctColor_WrongPlacement]
}

const _advanceToNextAttempt = (attempts, attempt_i) => {
  attempts[attempt_i].enabled = false
  attempts[attempt_i + 1].enabled = true
  return attempts
}

const _noMoreAttempts = (attempts, attempt_i) => {
  attempts[attempt_i].enabled = false
  return attempts
}
