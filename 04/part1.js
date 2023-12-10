
let result = 0
first = 0
const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n').map((line, i) => {
    const [, game] = line.split(':')

    const [tirage, partie] = game.trim().split(' | ').map((e) => e.trim('').split(' '))
    console.log(partie)
    const same = tirage.filter((e) => e !== '' && partie.includes(e))
    a = 0
    if (same.length > 0) {
      a = Math.pow(2, same.length - 1)
    }

    result += a

  })


console.log({ result })
//GELP