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

const countInList = (list, value) => {
  let count = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      count++
    }
  }
  return count
}

for (let i = 0; i < listA.length; i++) {
  result += listA[i]*countInList(listB, listA[i])
}

console.log(result)