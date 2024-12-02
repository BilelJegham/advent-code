import collections

import functools
input = open('input.txt', 'r').read().strip().split('\n')

cards = ['2', '3', '4', '5','6','7','8','9', 'T', 'J', 'Q', 'K', 'A']


gameScore = list()
for c in range(len(input)):
    hand = input[c].split(' ')
    d = collections.defaultdict(int)

    for c in hand[0]:
        d[c] += 1
# 84230269
       
    gameScore.append([hand, d])


def compareCard(a, b):
    if(a[1] != b[1]):
        return a[1]- b[1]
    return cards.index(a[0]) - cards.index(b[0])

def compare(key1, key2):
    tempDict1 = key1[1].copy()
    tempDict2 = key2[1].copy()
    while True:
        if len(tempDict1) == 0 or len(tempDict2)== 0:
            return len(tempDict2) -len(tempDict1)
        max1 = max(tempDict1.items(), key=functools.cmp_to_key(compareCard))[0]
        max2 = max(tempDict2.items(), key=functools.cmp_to_key(compareCard))[0]
     
        if tempDict1[max1] != tempDict2[max2]:
            return tempDict2[max2] - tempDict1[max1]

        else:

            del tempDict1[max1]
            del tempDict2[max2]
            if len(tempDict1) == 0 or len(tempDict2)== 0:


                for c in range(5):
                    maxIndex1 = cards.index(key1[0][0][c])
                    maxIndex2 = cards.index(key2[0][0][c])
                    if(maxIndex1 != maxIndex2):
                        return maxIndex2 - maxIndex1
        


# 246585392
result = 0
i = 1
for key in sorted(gameScore, key=functools.cmp_to_key(compare), reverse=True):
    print(key[0], i)
    result += i*int(key[0][1])
    i+=1




print(result)

