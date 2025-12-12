const input = require('fs')
  .readFileSync(require('path').join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')


const listA = []
const listB = []

input.forEach((line) => {
  const [a, b] = line.split('   ')
  console.log({ a, b })
  listA.push(+a)
  listB.push(+b)
})

listA.sort()
listB.sort()
let result = 0

for (let i = 0; i < listA.length; i++) {
  result += Math.abs(listB[i]-listA[i])
}

console.log(result)