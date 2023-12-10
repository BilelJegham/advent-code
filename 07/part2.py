import collections

import functools
input = open('input.txt', 'r').read().strip().split('\n')

cards = ['J', '2', '3', '4', '5','6','7','8','9', 'T', 'Q', 'K', 'A']

def compareCard(a, b):
    if(a[1] != b[1]):
        return a[1]- b[1]
    return cards.index(a[0]) - cards.index(b[0])

gameScore = list()
for c in range(len(input)):
    hand = input[c].split(' ')
    hand.append(hand[0])
    if hand[0] == 'JJJJJ':
        hand[0]= 'AAAAA'
    d = collections.defaultdict(int)

    cptJ= 0
    for c in hand[0]:
        if c != 'J':
            d[c] += 1
        else:
            cptJ+=1

    print(hand)
    a= max(d.items(), key=functools.cmp_to_key(compareCard))[0]
   
    hand[0] = hand[0].replace('J', a)


    d[a] += cptJ

    
    #hand[1] = hand[1].replace('J', )
    

       
    gameScore.append([hand, d])



def compare(key1, key2):
    tempDict1 = key1[1].copy()
    tempDict2 = key2[1].copy()
    while True:
        max1 = max(tempDict1.items(), key=functools.cmp_to_key(compareCard))[0]
        max2 = max(tempDict2.items(), key=functools.cmp_to_key(compareCard))[0]
     
        if tempDict1[max1] != tempDict2[max2]:
            return tempDict2[max2] - tempDict1[max1]

        else:

            del tempDict1[max1]
            del tempDict2[max2]
            if len(tempDict1) == 0 or len(tempDict2)== 0:
                for c in range(5):
                    maxIndex1 = cards.index(key1[0][2][c])
                    maxIndex2 = cards.index(key2[0][2][c])
                    if(maxIndex1 != maxIndex2):
                        return maxIndex2 - maxIndex1
                return 0
        


# 246585392
result = 0
i = 1
for key in sorted(gameScore, key=functools.cmp_to_key(compare), reverse=True):
    print(key[0], i)
    result += i*int(key[0][1])
    i+=1




print(result)

