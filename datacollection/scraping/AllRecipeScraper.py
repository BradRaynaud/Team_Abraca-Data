import requests
from bs4 import BeautifulSoup
import re

#URL = 'https://www.allrecipes.com/recipe/7423/mayonnaise-cake-i/'
print("Enter URL")
URL = input()


TIME_REGEX = re.compile(
    r'(\D*(?P<hours>\d+)\s*(hours|hrs|hr|h|Hours|H))?(\D*(?P<minutes>\d+)\s*(minutes|mins|min|m|Minutes|M))?'
)

SERV_REGEX_NUMBER = re.compile(
    r'(\D*(?P<items>\d+)?\D*)'
)

SERV_REGEX_ITEMS = re.compile(
    r'\bsandwiches\b |\btacquitos\b | \bmakes\b', flags=re.I | re.X
)

SERV_REGEX_TO = re.compile(
    r'\d+(\s+to\s+|-)\d+', flags=re.I | re.X
)

TAG_RE = re.compile(r'<[^>]+>')

def get_yields(element):
    """
    Will return a string of servings or items, if the receipt is for number of items and not servings
    the method will return the string "x item(s)" where x is the quantity.
    :param element: Should be BeautifulSoup.TAG, in some cases not feasible and will then be text.
    :return: The number of servings or items.
    """
    try:

        if isinstance(element, str):
            tstring = element
        else:
            tstring = element.get_text()

        if SERV_REGEX_TO.search(tstring):
            tstring = tstring.split(SERV_REGEX_TO.split(tstring)[1])[1]

        matched = SERV_REGEX_NUMBER.search(tstring).groupdict().get('items') or 0
        servings = "{} serving(s)".format(matched)

        if SERV_REGEX_ITEMS.search(tstring) is not None:
            # This assumes if object(s), like sandwiches, it is 1 person.
            # Issue: "Makes one 9-inch pie, (realsimple-testcase, gives "9 items")
            servings = "{} item(s)".format(matched)

        return servings

    except AttributeError as e:  # if dom_element not found or no matched
        print("get_serving_numbers error {}".format(e))
        return ''

def normalize_string(string):
    return re.sub(
        r'\s+', ' ',
        string.replace(
            '\xa0', ' ').replace(  # &nbsp;
            '\n', ' ').replace(
            '\t', ' ').strip()
    )

def remove_tags(text):
    return TAG_RE.sub('', text)

x = requests.get(URL)

soup = BeautifulSoup(x.text, 'html.parser')

############################################################################################################
# URL
print(URL)

############################################################################################################
# Title
print(soup.find('h1').get_text())

############################################################################################################
# Yields
recipe_yield = soup.find('meta', {'itemprop': 'recipeYield'})
if recipe_yield:
    print(get_yields(recipe_yield.get("content")))
else:
    print(get_yields(soup.find('div',{'class': 'recipe-adjust-servings__original-serving'}).get_text()))

############################################################################################################
# Ingredients
ingredients = soup.findAll('li',{'class': "checkList__line"})

if not ingredients:
    ingredients = soup.findAll('span',{'class': 'ingredients-item-name'})

Ingredients_Output = [
    normalize_string(ingredient.get_text())
    for ingredient in ingredients
    if ingredient.get_text(strip=True) not in ('Add all ingredients to list','','ADVERTISEMENT')]

print(Ingredients_Output)


############################################################################################################
# Instructions

instructions = soup.findAll('span',{'class': 'recipe-directions__list--item'})

if not instructions:
    instructions = soup.findAll('li',{'class': 'instructions-section-item'})

Instructions_Output =  '\n'.join([normalize_string(instruction.get_text())for instruction in instructions])

print(Instructions_Output)

############################################################################################################
# Nutrition

nutrition = soup.findAll('div',{'class': 'partial recipe-nutrition-section'})

for row in nutrition:
    output = row.findAll('div',{'class': 'section-body'})
    
output = str(output)

output = remove_tags(output)


output = output.replace(" ","")

output = output.split(";")

output[0] = output[0][1:]
output = output[:5]

string = output[3].split(".")


string[1] = string[1]+"."

string[1] = string[1]+string[2]

string = string[:2]

output = output + string

output.pop(3)

print(output)

############################################################################################################
# Tags
tags = []
print("Number of Tags?")
tagnum = int(input())

for i in range(tagnum):
    tag = input()
    tags.append(tag)


print(tags)
############################################################################################################
############################################################################################################


