
const mainData = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
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
input.forEach((line, x) => {
  line.forEach((elt, y) => {
    if (elt === '#')
      positions.push({ x, y, i: i++ })
  })
})


console.log(positions)
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
      // console.log({
      //   a: i + '-' + p.i,
      //   pos,
      //   p,
      //   distance: Math.abs((p.x - x) + (p.y - y))
      // })
      calculate.push(i + '-' + p.i)
      a = Math.abs(x - p.x) + Math.abs(y - p.y)
      distance += a
      return a
    })

  pos.distance = distances.reduce((acc, distance) => acc += distance, 0);
})



console.log(calculate)

let result = positions.reduce((acc, { distance }) => acc += distance, 0);
console.log({ positions, result })