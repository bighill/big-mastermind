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

export const Proc = (answer, guess) => {
  const correctColor_CorrectPlacement = answer.reduce((acc, curr, i) => {
    return curr.color_i === guess[i].color_i ? acc + 1 : acc
  }, 0)

  const correctColor_WrongPlacement = answer.reduce((acc, curr, i) => {
    return null
  })

  return { correctColor_CorrectPlacement, correctColor_WrongPlacement }
}

const _randomFromArray = arr => {
  const r = _randomNumber(0, arr.length)
  return arr.splice(r, 1)[0]
}

const _randomNumber = function(min, max) {
  return Math.floor(Math.random() * max + min)
}
