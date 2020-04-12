import random

L1 = [1,2,3,4,5,6,7,8,9,10]
L2 = [1,2,3,4,5,6,7,8,9,10]
L3 = [1,2,3,4,5,6,7,8,9,10]

random.shuffle(L1)
random.shuffle(L2)
random.shuffle(L3)

target = 27

plan = []


def heuristic(value):
    return abs(target - value)


def genPlan(target):
    currentmin = target
    for breakfast in L1:
        for lunch in L2:
            for dinner in L3:
                value = breakfast+lunch+dinner
                score = heuristic(value)

                if score < currentmin:
                    currentmin = score
                    plan = [breakfast,lunch,dinner]

    return plan

