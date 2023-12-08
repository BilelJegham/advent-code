const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')

let result = 0

for(let line of input){
  const firstNumber = line.split('').find((i)=> !isNaN(+i))
  const lastNumber = line.split('').reverse().find((i)=> !isNaN(+i))


  result += parseInt(firstNumber+lastNumber)

}




console.log({ result })
