import requests
import json
import random


def genPlan(target, Breakfast, Lunch, Dinner):
    random.shuffle(Breakfast)
    random.shuffle(Lunch)
    random.shuffle(Dinner)
    plan = [1,1,1]
    best = 0
    for Bmeal in Breakfast:
        for Lmeal in Lunch:
            for Dmeal in Dinner:
                # Store IDs of current meal plan
                temp = [Bmeal[0],Lmeal[0],Dmeal[0]]
                # Calculate the composite nutritional values
                Calories = Bmeal[1] + Lmeal[1] + Dmeal[1]
                Fat = Bmeal[2] + Lmeal[2] + Dmeal[2]
                Cholesterol = Bmeal[3] + Lmeal[3] + Dmeal[3]
                Protein = Bmeal[4] + Lmeal[4] + Dmeal[4]
                Sodium = Bmeal[5] + Lmeal[5] + Dmeal[5]
                Carbohydrates = Bmeal[6] + Lmeal[6] + Dmeal[6]

                score = heuristic(target, Calories, Fat, Cholesterol, Sodium, Carbohydrates, Protein)
                #print(Calories,Fat,Cholesterol,Sodium,Carbohydrates,Protein)
                
                if score >= 95 and score <= 105:
                    print(Calories,Fat,Cholesterol,Sodium,Carbohydrates,Protein)
                    print(score)
                    return temp
                elif score > best and score < 110:
                    #print(score)
                    best = score
                    plan = temp
    print(score)
    return plan


def heuristic(goal, Calories, Fat, Cholesterol, Sodium, Carbohydrates, Protein):
    CalorieScore = (Calories/goal[0]) * 100
    FatScore = (Fat/goal[1]) * 100
    CholesterolScore = (Cholesterol/goal[2]) * 100
    SodiumScore = (Sodium/goal[3]) * 100
    CarbohydratesScore = (Carbohydrates/goal[4]) * 100
    ProteinScore = Protein/goal[5] * 100

    if CalorieScore < 75 or FatScore < 50 or CholesterolScore < 50 or SodiumScore < 50 or CarbohydratesScore < 50 or ProteinScore < 50:
        return 0
    
    

    score = CalorieScore * .4 + FatScore * .1 + CholesterolScore * .05 + SodiumScore * .15 + CarbohydratesScore * .1+ ProteinScore * .2

    return score


def grabRecipe():

    breakfast = requests.get("http://localhost/api/miningquery?tags=BK&calories=1000")
    breakfastData = breakfast.json()

    breakfast = []
    for dic in breakfastData:
        id = dic["ID"]
        nutrit = dic["Nutrition"]
        nutrit0 = nutrit["0"]
        nutrit1 = nutrit["1"]
        nutrit2 = nutrit["2"]
        nutrit3 = nutrit["3"]
        nutrit4 = nutrit["4"]
        nutrit5 = nutrit["5"]
        breakfast.append([id,nutrit0,nutrit1,nutrit2,nutrit3,nutrit4,nutrit5])

    LD = requests.get("http://localhost/api/miningquery?tags=LD&calories=1000")
    LDData = LD.json()

    lunch = []
    for dic in LDData:
        id = dic["ID"]
        nutrit = dic["Nutrition"]
        nutrit0 = nutrit["0"]
        nutrit1 = nutrit["1"]
        nutrit2 = nutrit["2"]
        nutrit3 = nutrit["3"]
        nutrit4 = nutrit["4"]
        nutrit5 = nutrit["5"]
        lunch.append([id,nutrit0,nutrit1,nutrit2,nutrit3,nutrit4,nutrit5])
    
    

    return breakfast, lunch, lunch

        





target = [1700, 70, 300, 2400, 300, 50]
Breakfast, Lunch, Dinner = grabRecipe()
plan = genPlan(target,Breakfast,Lunch,Dinner)

print(plan)