const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .split('\n')


seed = input.splice(0, 2)[0].split(':')[1].trim('').split(' ').map((e) => +e.trim())


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
    if (sourceStart <= seed && (sourceStart + range) >= seed) {
      return destinationStart + (seed - sourceStart)
    }
  }

  return seed

}
//console.log(seed[1], '->', convert(seed[1], inputTransform['seed-to-soil']))

const findLocation = (seed) => {

  for ([title, model] of Object.entries(inputTransform)) {
    seed = convert(seed, model)
  }
  return seed
}

let result = seed.map((s) => findLocation(s))

console.log({
  a: Math.min(...result)
})
