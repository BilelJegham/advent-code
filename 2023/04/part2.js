
let result = 0
const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')

let resultCard = {}
input.forEach((_, i) => result += calculCard(i))

function calculCard(numero) {
  if (resultCard[numero]) {
    return resultCard[numero]
  }

  let subResult = 1

  const [, game] = input[numero].split(':')


  const [tirage, partie] = game.trim().split(' | ').map((e) => e.trim().split(' '))

  const same = tirage.filter((e) => e !== '' && partie.includes(e))
  if (same.length > 0) {
    for (let i = numero + 1; i < numero + same.length + 1; i++) {
      subResult += calculCard(i)
    }

  }
  resultCard[numero] = subResult
  return subResult
}


console.log({ result })