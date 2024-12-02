
const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n').map((e) => e.split(''))

result = []

const MOVES = {
  '-': (oldPos, posSymbol) => oldPos[1] - posSymbol[1] > 0 ? [oldPos[0], posSymbol[1] - 1] : [oldPos[0], posSymbol[1] + 1],
  '|': (oldPos, posSymbol) => oldPos[0] - posSymbol[0] > 0 ? [posSymbol[0] - 1, oldPos[1]] : [posSymbol[0] + 1, oldPos[1]],
  'L': (oldPos, posSymbol) => oldPos[1] - posSymbol[1] > 0 ? [oldPos[0] - 1, oldPos[1] - 1] : [oldPos[0] + 1, oldPos[1] + 1],
  'J': (oldPos, posSymbol) => oldPos[1] - posSymbol[1] < 0 ? [oldPos[0] - 1, oldPos[1] + 1] : [oldPos[0] + 1, oldPos[1] - 1],
  '7': (oldPos, posSymbol) => oldPos[1] - posSymbol[1] < 0 ? [oldPos[0] + 1, oldPos[1] + 1] : [oldPos[0] - 1, oldPos[1] - 1],
  'F': (oldPos, posSymbol) => oldPos[1] - posSymbol[1] > 0 ? [oldPos[0] + 1, oldPos[1] - 1] : [oldPos[0] - 1, oldPos[1] + 1],
}


// console.log("7", MOVES['7']([1, 2], [0, 2]))
// console.log("J", MOVES['J']([0, 2], [1, 2]))
// console.log("-", MOVES['-']([0, 2], [0, 1]))



let startX = input.findIndex((line) => line.includes('S'))
let startY = input[startX].findIndex((e) => e === 'S')


result[startX + '§' + startY] = 0


pos = [startX, startY]
pos2 = [startX + 1, startY]

options = [
  // [startX + 1, startY],
  [startX - 1, startY],
  // [startX, startY + 1],
  [startX, startY - 1]
]

for (option of options) {

  listPos = [option, pos]
  i = 1
  const move = (oldPos, posSymbol) => {
    symbol = input[posSymbol[0]][posSymbol[1]]
    key = posSymbol[0] + '§' + posSymbol[1]
    result[key] = Math.min(result[key] ?? Infinity, i++)
    if (MOVES[symbol]) {
      return MOVES[symbol](oldPos, posSymbol);
    }
    return null
  }
  while ((newPos = move(listPos[1], listPos[0])) != null) {
    listPos.unshift(newPos)

  }
}

console.log(result)


console.log({ result, result: Math.max(...Object.values(result)) })
