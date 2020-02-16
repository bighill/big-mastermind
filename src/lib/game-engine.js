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
  const answer__color_i__arr = answer.map(a => a.color_i)

  const correctColor_CorrectPlacement = guess.reduce((acc, curr, i) => {
    // if color AND placement align, add to `acc`
    return curr.color_i === answer__color_i__arr[i] ? acc + 1 : acc
  }, 0)

  const correctColor_WrongPlacement = guess.reduce((acc, curr, i) => {
    if (answer__color_i__arr.indexOf(curr.color_i) < 0) {
      // no change if correct color is not present
      return acc
    }
    // color is correct.
    // if color is misplaced, add to `acc`
    return curr.color_i !== answer[i].color_i ? acc + 1 : acc
  }, 0)

  return { correctColor_CorrectPlacement, correctColor_WrongPlacement }
}

const _randomFromArray = arr => {
  const r = _randomNumber(0, arr.length)
  return arr.splice(r, 1)[0]
}

const _randomNumber = function(min, max) {
  return Math.floor(Math.random() * max + min)
}
