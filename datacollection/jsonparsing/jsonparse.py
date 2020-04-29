import pandas as pd
import argparse
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
	item = item[3:]
	item = item.split('***')
	ingrstring = ''
	for i in range(len(item)):
		#item[i] = item[i][1:-1]
		ingrstring += item[i]
		if (i < len(item) - 1):
			ingrstring += ', '
	return ingrstring

parser = argparse.ArgumentParser()
parser.add_argument("-i", required=True, type=str)
parser.add_argument("-o", required=True, type=str)
args = parser.parse_args()

data = pd.read_csv(args.i,sep=';',converters={"Tags":literal_eval})


data["Ingredients"] = data["Ingredients"].swifter.apply(ingredientconvert)
data["Nutrition"] = data["Nutrition"].swifter.apply(nutritionconvert)

data.to_json(args.o, orient = 'records',lines=True)