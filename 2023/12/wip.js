const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input-sample.txt'), 'utf8')
  .trim().split('\n')

let result = 0
console.log({ result })