const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim()


  // ignore not number characters and "mul" and ( and )
const inputClear = input
.matchAll(/don't\(\)|mul\((\d+),(\d+)\)|do\(\)/g)


let result = 0
let allow = true
for (const match of inputClear) {
  if(match[0] === "don't()") 
    allow = false
  if(match[0] === "do()")
    allow = true

  if(allow && match[1]) 
    result += (Number(match[1]) * Number(match[2]))

}



console.log({ result })