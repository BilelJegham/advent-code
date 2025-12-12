
const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')

let result = 50
let cpt = 0
for (const line of input) {
  const sign= line.slice(0, 1)
  const value = +line.slice(1)
  if (sign === 'R') {
    result = (result + value) % 100
  }else if (sign === 'L') {
    result = (result - value) % 100
  }


  
  console.log({ line, result })
  if(result === 0) { 
    
    cpt++
  }
  
}



console.log({ result, cpt })