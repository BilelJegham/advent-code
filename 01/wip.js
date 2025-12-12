const { cp } = require('fs');

const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')

let result = 50
let cpt = 0



for (const line of input) {
  const sign= line.slice(0, 1) 
  const value = +line.slice(1)

  const previous = result;

  
  let numberRolls = 0

  if (sign === 'R') {
    result = (result + value) % 100
    numberRolls = Math.floor((value + previous) / 100);
  }else if (sign === 'L') {
    result = (result - value) % 100
    numberRolls = Math.floor((previous - value) / 100);
  }


   cpt += Math.abs(numberRolls)
  


    
  console.log({ line, result, sign, value, numberRolls })

  
}



console.log({ result, cpt })