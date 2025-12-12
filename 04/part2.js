const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n').map((line) => {
    return line.split('');

  })

const adjacentsDirections = [
  [-1,0],
  [1,0],
  [0,-1],
  [0,1],
  [-1,-1],
  [-1,1],
  [1,-1],
  [1,1],
]

let result = 0

let removeAllowed = null

while(removeAllowed !== false) {
  removeAllowed = false
  for(let i=0; i < input.length; i++) {
    for(let j=0; j < input[0].length; j++) {
      if(input[i][j] === '@'){ 
        const adjacentFounds = adjacentsDirections.filter(([a,b]) => {
          const newX = i + a
          const newY = j + b

          if(newX < 0 || newX >= input.length || newY < 0 || newY >= input[0].length ){
            return false
          }

        
          return input[newX][newY] === '@' || input[newX][newY] === 'x'
        })

        if(adjacentFounds.length < 4){

          result++
          input[i][j] = ""
          removeAllowed = true
        }
      }
    }
  }
}

console.log(input.map((line) => line.join('')).join('\n'))




console.log({ result })