
const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input-sample.txt'), 'utf8')
  .trim().split('\n')

const positions = []
i = 1
input.forEach((line, x) => {
  line.split('').forEach((elt, y) => {
    if (elt === '#')
      positions.push({ x, y, i: i++ })
  })
})


const calculate = []
function isCalculate(j, z) {
  return calculate.includes(j + '-' + z) || calculate.includes(z + '-' + j)
}
positions.forEach((pos) => {
  let { x, y, i } = pos
  distances = positions
    .filter((p) => p.i !== i && !isCalculate(i, p.i))
    .map((p) => {
      calculate.push(i + '-' + p.i)
      return Math.abs(x - p.x) + Math.abs(y - p.y)
    })

  pos.distance = distances.reduce((acc, distance) => acc += distance, 0);
})



console.log(calculate)

let result = positions.reduce((acc, { distance }) => acc += distance, 0);
console.log({ positions, result })