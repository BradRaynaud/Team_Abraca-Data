import pandas as pf

data = pf.read_csv('Scallops.csv')

print(type(data))

print(data)
#print(data.iloc[1])

# pound to gram
pound = 454

# tsp to grams
tsp = 4.2

# tbsb to grams
tbsb = 15

# cup to grams
cup = 236

###########################
# amounts

# 3/4 cup butter grams 
butter = cup * .75

# garlic
garlic = tbsb * 3

# salt 
salt = tsp

#scallops
scallops = pound * 2

# pepper
pepper = tsp/8

# lemon
lemon = tbsb * 2

##########################
# Calorie calculation

butterportions = butter/100
buttercal = (714*butterportions)/6
print(buttercal)

garlicportions = garlic/100
garliccal = (67*garlicportions)/6
print(garliccal)

scallopsportions = scallops/100
scallopscal = (71*(904/100))/6
print(scallopscal)

saltportions = salt/100
saltcal = (0*saltportions)/6

pepperportions = pepper/100
peppercal = (250*pepperportions)/6

lemonportions = lemon/100
lemmoncal = (50*lemonportions)/6

calories = buttercal + garliccal + scallopscal + saltcal + peppercal + lemmoncal
print(calories)

