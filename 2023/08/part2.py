input = open('input.txt', 'r').read().strip().splitlines()
import math
move = list(input[0])


instructions = dict()

for line in input[2:]:
    split = line.split(' = ')
    instructions[split[0]] = split[1][1:-1].split(', ')

moveToIndex = {"R": 1, "L": 0}


currents = list(item for item in instructions.keys() if item[2] == 'A')


def allOK(c):
    return sum(ctmp[2] != 'Z' for ctmp in c)
results = []
i = 0


def stepToHaveZ(c):
    i = 0
    while True:
        for mov in move:
            i+=1
            c = instructions[c][moveToIndex[mov]]
            if c[2] == 'Z':
                return i

listOfSteps = []
for c in currents:
    listOfSteps.append(stepToHaveZ(c))
print(listOfSteps)

def findDiviseurCommun(nombres):
    pcm = 1
    for nombre in nombres:
        pcm = (pcm * nombre) // math.gcd(pcm, nombre)
    return pcm


valeur_commune = findDiviseurCommun(listOfSteps)

print(findDiviseurCommun(listOfSteps))
