
const mainData = require('fs')
  .readFileSync(require('path').join(__dirname, 'input-sample.txt'), 'utf8')
  .trim().split('\n').map(line => line.split(''))

const columnsWithoutGalaxies = Array.from({ length: mainData.length }, (_, i) => i).reduce((columns, index) =>
  mainData.some(line => line[index] === '#') ? columns : [...columns, index]
  , [])

const linesWithoutGalaxies = mainData.reduce((lines, line, index) => line.some(cell => cell === '#') ? lines : [...lines, index], [])


input = mainData.reduce((universe, line, lineIndex) => {
  const lineWithEmptyColumnsDoubled = line.reduce((newLine, cell, index) => columnsWithoutGalaxies.includes(index) ? [...newLine, '.', '.'] : [...newLine, cell], [])
  universe.push(lineWithEmptyColumnsDoubled)
  if (linesWithoutGalaxies.includes(lineIndex)) universe.push(lineWithEmptyColumnsDoubled)
  return universe
}, [])

const positions = []
i = 1
xtemp = 0
ytemp = 0


input.forEach((line, x) => {
  if (line.every((e) => e === '.')) {
    input.splice(x, 0, ...new Array(9).fill(new Array(line.length).fill('.')))
  }
})




console.log(input.map((l) => l.join('')))


input.forEach((line, x) => {
  line.forEach((elt, y) => {
    if (elt === '#') {
      positions.push({ x, y, i: i++ })
    }
  })
})



// for (i in positions) {
//   p = positions[i]
//   console.log("---", i, p)
//   findX = positions.reduce((acc, tmp) => {
//     if (tmp.x < p.x) {
//       acc.add(tmp.x)
//     }
//     return acc
//   }
//     , new Set())

//   if (findX.size > 0)
//     positions[i].x = (p.x - findX.size + 1) * 10 + findX.size + 1


//   findY = positions.reduce((acc, tmp) => {
//     if (tmp.y < p.y) {
//       acc.add(tmp.y)
//     }
//     return acc
//   }
//     , new Set())


//     positions[i].y = (p.y - findY.size + 1) * 10 + findY.size + 1



//   console.log(findY.length, positions[i])

// }



const calculate = []
function isCalculate(j, z) {
  return calculate.includes(j + '-' + z) || calculate.includes(z + '-' + j)
}
distance = 0
positions.forEach((pos) => {
  let { x, y, i } = pos
  distances = positions
    .filter((p) => p.i !== i && !isCalculate(i, p.i))
    .map((p) => {
      calculate.push(i + '-' + p.i)
      a = Math.abs(x - p.x) + Math.abs(y - p.y)
      distance += a
      return a
    })

  pos.distance = distances.reduce((acc, distance) => acc += distance, 0);
})



console.log(calculate)

let result = positions.reduce((acc, { distance }) => acc += distance, 0);
console.log({ positions, distance })