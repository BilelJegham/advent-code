const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input-sample.txt'), 'utf8')
  .trim().split('\n')

let result = 0



const checkLine = (numbers) => {
  let sign =null;
  for(let i = 0; i < numbers.length-1; i++) {
    const sum = Math.abs(numbers[i+1]-numbers[i])
    const tempSign = Math.sign(numbers[i+1]-numbers[i])
    if(sign === null && sign !==0){
      sign = Math.sign(numbers[i+1]-numbers[i])
    }
    if(sum === 0 || sum > 3 || tempSign !== sign) {
     return i
    }
  }
  return null
}




input.forEach((line, index) => {
  numbers = line.split(' ').map((n)=> +n)

 
    const chResult = checkLine(numbers)
    if(chResult !==null) {
      if(checkLine(numbers.slice(0, chResult).concat(numbers.slice(chResult+1))) != null) {
        result++
        console.log({index, numbers, chResult, listFix: numbers.slice(0, chResult).concat(numbers.slice(chResult+1))})
      }
    }

})

console.log({len: input.length,  result: input.length - result})