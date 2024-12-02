const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .split('\n')

let seed = input.splice(0, 2)[0].split(':')[1].trim('').split(' ').map((e) => +e.trim()).reduce((acc, e) => {

  acc[acc.length - 1].push(e)

  if (acc[acc.length - 1].length === 2)
    acc.push([])

  return acc
}, [[]])

seed.splice(-1)


const convertTransformModel = (line) => {
  const [destinationStart, sourceStart, range] = line.split(' ').map((e) => +e)

  return {
    destinationStart,
    sourceStart,
    range
  }

}



const inputTransform = {}
let title = null
let tmpArray = []
for (const line of input) {
  if (line === '' && title) {
    inputTransform[title] = tmpArray
    tmpArray = []
    title = null
  }
  else if (title === null) {
    title = line.replace(' map:', '')
  }
  else
    tmpArray.push(convertTransformModel(line))


}


const convert = (seed, convertModel) => {
  for (
    {
      destinationStart,
      sourceStart,
      range
    } of convertModel
  ) {
    if (sourceStart <= seed && (sourceStart + range) > seed) {
      return destinationStart + (seed - sourceStart)
    }
  }

  return seed

}
//console.log(seed[1], '->', convert(seed[1], inputTransform['seed-to-soil']))

const findLocation = (seed) => {
  const value = Object.values(inputTransform);
  for (model of value) {
    seed = convert(seed, model)
  }
  return seed
}
result = Infinity
let z = 0
seed.forEach(([a, b], i) => {
  console.log(i, { a, b, result })

  for (i = a; i < b + a; i++) {
    z++
    const tmpResult = findLocation(i)
    if (tmpResult < result)
      result = tmpResult
  }

})
console.log({
  result,
})
// 47909640