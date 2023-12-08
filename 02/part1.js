const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')


const CONDITION = {
  "red": 12,
  'green': 13,
  'blue': 14
}
valid = 0
for(line of input){
  [libelle,game] = line.split(': ')

  lances = game.split(';')
  try{



    for(lance of lances){
      boules = lance.trim().split(',')
      for(boule of boules){

        const [number, couleur] = boule.trim().split(' ')

        if(+number > CONDITION[couleur] ){
          throw new Error('MAX');
        }

      }
    }
    valid += parseInt(libelle.match(/\d+/)[0])
    }catch(e){
      console.log(parseInt(libelle.match(/\d+/)[0]))
    }


  }
console.log({ result:  valid })
