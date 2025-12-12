const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n').map((line) => {
    
    const numbers= line.split('').map(Number)

    const max12Numbers = [...numbers].map((value, index)=>{
      return { value, index }
    })
    

    let maxLength = 12
    let prevIndex = -1

    let max= ""
    while(maxLength >0 || max.length <12) {
      const findMax = [...max12Numbers].filter(({ index }) => (numbers.length - maxLength)>= index && index > prevIndex)
        .sort((a,b) => b.value - a.value)[0]

         if(!findMax) break;
      max += findMax.value
      prevIndex = findMax.index
      maxLength--
    }
    console.log({ max })

    return Number(max)


  }).reduce((a,b) => a+b,0)

console.log({ input })