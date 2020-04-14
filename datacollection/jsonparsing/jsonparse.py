import pandas as pd
import swifter
from ast import literal_eval

def nutritionconvert(item):
	itemdict = {}
	item = item[1:-1]
	item = item.split(', ')
	for i in range(len(item)):
		item[i] = item[i][1:-1]
		
		itemdict[str(i)] = float(item[i])
	return itemdict

def ingredientconvert(item):
	itemdict = {}
	item = item[3:]
	item = item.split('***')
	for i in range(len(item)):
		#item[i] = item[i][1:-1]
		itemdict[str(i)] = item[i]
	return itemdict

data = pd.read_csv("breakfast.csv",sep=';',converters={"Tags":literal_eval})


data["Ingredients"] = data["Ingredients"].swifter.apply(ingredientconvert)
data["Nutrition"] = data["Nutrition"].swifter.apply(nutritionconvert)
#data["Tags"] = data["Tags"].swifter.apply(dictconvert)

data.to_json(r'testjson.json', orient = 'records',lines=True)