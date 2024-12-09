const { parse } = require('path')

const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')


  let result=0
function checkXmasDirection([xDir, yDir, letter], x, y, matrix) {

   if(x+xDir >= 0 && y+yDir >=0 &&matrix?.at(x+xDir)?.at(y+yDir) === letter){

          return true
    } 

    return false
  

}

const checkXmas= (x, y, matrix) =>{
  let directions = [
    [// M A S
      [-1, -1, 'S'], // right
      [-1, 1, 'S'], // down
      [1, -1, 'M'], // up
      [1, 1, 'M'], // left
    ], 
    [ // S A M
      [-1, -1, 'M'], // right
      [-1, 1, 'M'], // down
      [1, -1, 'S'], // up
      [1, 1, 'S'], // left
    ],
    [ // S A M
      [-1, -1, 'M'], // right
      [1, -1, 'M'], // down
      [-1, 1, 'S'], // up
      [1, 1, 'S'], // left
    ],
    [ // S A M
      [-1, -1, 'S'], // right
      [1, -1, 'S'], // down
      [-1, 1, 'M'], // up
      [1, 1, 'M'], // left
    ],
  ]

  for (let i = 0; i < directions.length; i++) {
    let valid = true
    for (let j = 0; j < directions[i].length; j++) {
      if(!checkXmasDirection(directions[i][j], x, y, matrix)) {
        valid = false
        break
      }
 
    }
    if(valid) {
      result++
    }
   
  }
}
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if(input[i].at(j) === 'A') {
      checkXmas(i, j, input)
    }
  }
}
console.log(result)
