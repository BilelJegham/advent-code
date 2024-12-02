

const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input-sample.txt'), 'utf8')
  .trim().split('\n')

let result = 0;
set = new Set()
let Aset = {}
const positionSymbole = input.reduce((acc, elt, x)=>{
  const line = elt.split('');
  acc[x] = {}
  
  for(let y=0; y<line.length; y++){

    acc[x] = {
      ...acc[x], 
      [y]: (isNaN(line[y]) || ['*','+','-'].includes(line[y]))&& line[y] !== '.'
    }
    set.add(line[y])
  Aset[line[y]] = (isNaN(line[y]) || ['*','+','-'].includes(line[y]))&& line[y] !== '.'


  }
  return acc
}, {})

for(let i=0; i<input.length; i++){
  const finds = [...input[i].matchAll(/\d+/g)]


  for(let match of finds){
let find = match[0]
    const indexStart = match.index
    const indexEnd = indexStart + find.length

    console.log(find, Math.max(0, indexStart-1), Math.min(input[i].length, indexEnd+1))
    let ok = false;
    for(let y=Math.max(0, indexStart-1); y<Math.min(input[i].length, indexEnd+1); y++){
      if(positionSymbole[i][y]
        || (i >0 && positionSymbole[i-1][y])
        || (i < input.length-1 && positionSymbole[i+1][y])
      ){
        ok = true;
        break;
      }
    }
    if(ok){
      result += parseInt(find,10)
    }

  }

  


}


console.log({ result })
