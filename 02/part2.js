const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split(',').map((ids)=> ids.split('-').map(Number))


  const hasTwiceChar = (str) => {


    for (let i = 1; i < str.length ; i +=1) {
      const subchain = str.slice(0, i)

      const repeatSubchain = subchain.repeat(str.length / subchain.length)
  if(repeatSubchain === str) {
        return true
      }
      
    }
    return false
  }




  let result = 0
  for (const [a, b] of input) {
    let cpt = a
    console.log('checking', a, b)
    while (cpt <= b) {
      if(hasTwiceChar(String(cpt))) {
        console.log(cpt)
        result+= cpt
      }
      cpt++
    }

  }

console.log({ result })