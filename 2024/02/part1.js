const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')

let result = 0

input.forEach((line, index) => {
  numbers = line.split(' ').map((n)=> +n)

  try{
    let sign;
  for(let i = 0; i < numbers.length-1; i++) {
    const sum = Math.abs(numbers[i+1]-numbers[i])
    const tempSign = Math.sign(numbers[i+1]-numbers[i])
    if(!sign && sum !==0){
      sign = Math.sign(numbers[i+1]-numbers[i])
    }
    if(sum > 3 || tempSign !== sign) {
      throw new Error(`Invalid  line ${index} ${sum} ${tempSign !== sign}`)
    }
  }
} catch(e) {
    console.error(e.message, numbers)
    result++
  }
})

console.log({len: input.length,  result: input.length - result})