
const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input-sample.txt'), 'utf8')
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
  subResult = {}

  listPos = [option, pos]
  i = 1
  const move = (oldPos, posSymbol) => {
    symbol = input[posSymbol[0]][posSymbol[1]]
    key = posSymbol[0] + '§' + posSymbol[1]
    subResult[key] = Math.min(result[key] ?? Infinity, i++)
    if (MOVES[symbol]) {
      return MOVES[symbol](oldPos, posSymbol);
    }
    return null
  }
  while (Array.isArray((newPos = move(listPos[1], listPos[0])))) {
    listPos.unshift(newPos)

    symbol = input[newPos[0]][newPos[1]]
    if (symbol === 'S') {
      result = { ...result, ...subResult }
      break;
    }

  }
}


const OPTIONS = [
  ([x, y]) => ([x, y - 1]),
  ([x, y]) => ([x, y + 1]),
  ([x, y]) => ([x + 1, y]), // F 7 
  ([x, y]) => ([x - 1, y]) //L J
]

input.forEach((line, x) => {
  line.forEach((elt, y) => {
    if (elt === '.') {
      r = OPTIONS.every((o, ox) => {
        allowed = ['-', '|']
        if ([0, 1].includes(ox)) {
          allowed = ['|', 'F', '7']
        } else if ([1, 2].includes(ox)) {
          allowed = ['-', 'J', 'L']

        }
        newPos = o([x, y])
        while (newPos[0] >= 0 && newPos[1] >= 0 && newPos[1] < input[0].length && newPos[0] < input.length) {

          if (allowed.includes(input[newPos[0]][newPos[1]])) {
            return true
          }
          newPos = o(newPos)
        }
        return false
      })
      if (r) {
        input[x][y] = 'I'
      }

    }
  })
})


i = 0
input.forEach((l, x) => {
  l.forEach((e, y) => {
    if (e === 'I') {
      r = OPTIONS.every((o) => {
        newPos = o([x, y])
        while (newPos[0] >= 0 && newPos[1] >= 0 && newPos[1] < input[0].length && newPos[0] < input.length) {

          if ('.' === input[newPos[0]][newPos[1]]) {
            input[x][y] = '.'
            return false
          } else xœif(input[newPos[0]][newPos[1]] !== 'I') {
            return true
          }
          newPos = o(newPos)
        }
        return true
      })

      if (r) {
        i++
      }

    }
  })
})



console.log({ input: input.map((e) => e.join('')) })

console.log({ i })
