const [ranges, available] = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n\n')


const rangesLines = ranges.split('\n').map(( line) => {
  const [a, b] = line.split('-').map(Number)

  return { a, b }

});

const availableNumbers = available.split('\n').filter((a)=>{
  const num = Number(a)
  return rangesLines.some(({ a, b }) => num >= a && num <= b)

})
console.log({ availableNumbers: availableNumbers.length })
