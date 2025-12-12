const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n').map((line) => {
    
   const numbers= line.split('').map(Number)
  
   let firstMax = Math.max(...numbers)
   let indexOfFirstMax = numbers.indexOf(firstMax)
   if(indexOfFirstMax === numbers.length -1){
    const clondedNumbers = [...numbers]
    clondedNumbers.splice(indexOfFirstMax, 1)
    firstMax = Math.max(...clondedNumbers)
    indexOfFirstMax = numbers.indexOf(firstMax)
   }
    

   const numbersWithoutFirstMax = numbers.slice(indexOfFirstMax+1)

    const lastMax = Math.max(...numbersWithoutFirstMax)

      return Number(String(firstMax)+String(lastMax))
   
  }).reduce((a,b) => a+b,0)

console.log({ input })