const GameEngine = {}

let availableAnswers = []
const defaultAvailableAnswers = [1, 2, 3, 4, 5, 6]

GameEngine.answer = function(allowRepeatsColors) {
  let result = []
  availableAnswers = [...defaultAvailableAnswers]
  let _rand = () => _randomFromArray(availableAnswers)

  if (allowRepeatsColors) {
    _rand = () => _randomNumber(1, 6)
  }

  for (let i = 0; i < 4; i++) {
    result.push({ i: i, color_i: _rand() })
  }
  return result
}

GameEngine.proc = function(data) {
  const guess = data.find(x => x.state === "ready").guess
  const empty = guess.find(x => x.color_i === 0)
  if (empty) {
    return { result: null }
  }
  return { result: "u suk" }
}

const _randomFromArray = arr => {
  const r = _randomNumber(0, arr.length)
  return arr.splice(r, 1)
}

const _randomNumber = function(min, max) {
  return Math.floor(Math.random() * max + min)
}

export default GameEngine
