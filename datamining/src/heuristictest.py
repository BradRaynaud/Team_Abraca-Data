# Calories, Fat, Cholesterol, Sodium, Carbohydrates, Protein

breakfast = [100, 5, 5, 5, 5, 5]
lunch = [10000, 5, 5, 5, 5, 5]
dinner = [100., 5., 5., 5., 5., 5.]

goal = [3000, 15, 15, 15, 15, 15]


def heuristic():
    Calories = breakfast[0] + lunch[0] + dinner[0]
    Fat = breakfast[1] + lunch[1] + dinner[1]
    Cholesterol = breakfast[2] + lunch[2] + dinner[2]
    Sodium = breakfast[3] + lunch[3] + dinner[3]
    Carbohydrates = breakfast[4] + lunch[4] + dinner[4]
    Protein = breakfast[4] + lunch[4] + dinner[4]

    CalorieScore = (Calories/goal[0]) * 100
    FatScore = (Fat/goal[1]) * 100
    CholesterolScore = (Cholesterol/goal[2]) * 100
    SodiumScore = (Sodium/goal[3]) * 100
    CarbohydratesScore = (Carbohydrates/goal[4]) * 100
    ProteinScore = Protein/goal[5] * 100

    score = CalorieScore * .4 + FatScore * .1 + CholesterolScore * .05 + SodiumScore * .15 + CarbohydratesScore * .1+ ProteinScore * .2

    return score

print(heuristic())