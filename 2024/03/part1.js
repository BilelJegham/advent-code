const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim()

  // ignore not number characters and "mul" and ( and )
const inputClear = input
.matchAll(/mul\((\d+),(\d+)\)/g)



let result = 0
for (const match of inputClear) {
  console.log(Number(match[1]), Number(match[2]))
  result += (Number(match[1]) * Number(match[2]))
}



console.log({ result })