const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')

result = 0
for (line of input) {
  [libelle, game] = line.split(': ')

  lances = game.split(';')

  const boulesParty = {
    red: 0,
    green: 0,
    blue: 0
  }

  for (lance of lances) {
    boules = lance.trim().split(',')
    for (boule of boules) {
      const [number, couleur] = boule.trim().split(' ')
      if (boulesParty[couleur] < +number) {
        boulesParty[couleur] = number
      }
    }
  }
  console.log(boulesParty)

  result += (boulesParty.red * boulesParty.green * boulesParty.blue)
}
console.log({ result })
