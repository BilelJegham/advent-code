const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')

let result = 0
const positionSymbole = input.reduce((acc, elt, x) => {
  const line = elt.split('')

  for (let y = 0; y < line.length; y++) {
    if (line[y] === '*') {
      acc.push({ x, y })
    }
  }
  return acc
}, [])

const numeroFind = []

for (let i = 0; i < input.length; i++) {
  const finds = [...input[i].matchAll(/\d+/g)]

  for (const match of finds) {
    const find = match[0]
    const indexStart = match.index
    const indexEnd = indexStart + find.length
    const position = []
    for (let index = indexStart; index < indexEnd; index++) {
      position.push(i + ',' + index)
    }
    numeroFind.push({
      find: +match[0],
      position
    })
  }
}

result = positionSymbole.reduce((acc, { x, y }) => {
  const matrice = [
    [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
    [x, y - 1], [x, y + 1],
    [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]
  ]

  const numeroProche = numeroFind.filter(
    (elt) => {
      return matrice.some((pos) => {
        return elt.position.includes(pos.join(','))
      })
    }
  )

  if (numeroProche.length === 2) {
    acc += (numeroProche[0].find * numeroProche[1].find)
  }

  return acc
}, 0)

console.log({ result })
