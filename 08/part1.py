input = open('input.txt', 'r').read().strip().splitlines()

move = input[0]

instructions = dict()

for line in input[2:]:
    split = line.split(' = ')
    instructions[split[0]] = split[1][1:-1].split(', ')

moveToIndex = {"R": 1, "L": 0}
i = 0
current = 'AAA'
while True:
    for m in move:
        current = instructions[current][moveToIndex[m]]
        i+=1
        print(current)
        if current == 'ZZZ':
            print(i)
            exit()
    


print(instructions)

