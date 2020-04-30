import requests
import json

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


breakfast, lunch, dinner = grabRecipe()

print(lunch)