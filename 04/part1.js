const { parse } = require('path')

const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')


  let result=0
function checkXmasDirection([xDir, yDir], x, y, matrix) {

  return !['X', 'M', 'A', 'S' ].some((letter, index) => {
    if(x+(xDir*index) >= 0 && y+(yDir*index) >=0 &&matrix?.at(x+(xDir*index))?.at(y+(yDir*index)) === letter){

          return false
    } 

    return true
  })

}

const checkXmas= (x, y, matrix) =>{
  let directions = [
    [1, 0], // right
    [0, 1], // down
    [0, -1], // up
    [-1, 0], // left
    [-1, -1], // left up
    [-1, 1], // left down
    [1, 1], // right down
    [1, -1], // right up

  ]

  const init = parseInt(result)
 for (let i = 0; i < directions.length; i++) {
   if(checkXmasDirection(directions[i], x, y, matrix)) {
     result++
   }
 }
  if(init !== result) {
    return true
  }
}
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if(input[i].at(j) === 'X') {
      checkXmas(i, j, input)
    }
  }
}
console.log(result)
