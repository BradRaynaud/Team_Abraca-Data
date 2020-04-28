import requests
import json

x = requests.get("http://localhost/api/miningquery?tags=BK&calories=1000")

data = x.json()

for dic in data:
    id = dic["ID"]
    nutrit = dic["Nutrition"]
    nutrit0 = nutrit["0"]
    nutrit1 = nutrit["1"]
    nutrit2 = nutrit["2"]
    nutrit3 = nutrit["3"]
    nutrit4 = nutrit["4"]
    nutrit5 = nutrit["5"]
    print(dic)
    print(id,nutrit0,nutrit1,nutrit2,nutrit3,nutrit4,nutrit5)