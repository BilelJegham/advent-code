const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split(',').map((ids)=> ids.split('-').map(Number))


  const hasTwiceChar = (str) => {
    if(str.length % 2 !== 0) return false

    const part1 = str.slice(0, Math.floor(str.length / 2))
    const part2 = str.slice(Math.ceil(str.length / 2))
    return part1 === part2
  }


  let result = 0
  for (const [a, b] of input) {
    let cpt = a
    while (cpt <= b) {
      if(hasTwiceChar(String(cpt))) {
        result+= cpt
      }
      cpt++
    }

  }

console.log({ result })