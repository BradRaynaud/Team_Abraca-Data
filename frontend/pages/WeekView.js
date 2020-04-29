import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { fade } from '@material-ui/core/styles/colorManipulator'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="//material-ui.com/">
        Project Meal Planner
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'darkgrey',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  extraContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  childButton: {
    left: '46%',
  },
  childText: {
    paddingLeft: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: fade("#e8f5e9", 0.7),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'darkgrey',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  image: {
    backgroundImage: 'url(https://github.com/BradRaynaud/CapstoneAssets/blob/master/images/MealPrep1.jpg?raw=true)',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundPosition: 'center',
    marginBottom: theme.spacing(1),
  },
}));

const tiers = [
{
  title:'Monday Breakfast',
  food: 'Waffles, Scrambled Eggs',
  servings: '2',
  ingredients: 'Waffles, Eggs',
  recipe: 'Cook waffles and scramble eggs',
  nutrition: 'Calories: 500, Fat: 12mg',
  URL: 'Source: AllRecipes',
},
{
  title:'Monday Lunch',
  food: 'Chicken Sandwich',
  servings: '2',
  ingredients: 'Chicken, bread',
  recipe: 'Put chicken in between bread slices',
  nutrition: 'Calories: Chicken, Fat: Chicken',
  URL: 'Source: AllRecipes',
},
{
  title:'Monday Dinner',
  food: 'Filet Mignon',
  servings: '2',
  ingredients: 'Cow',
  recipe: 'Cook cow',
  nutrition: 'Cow',
  URL: 'Source: AllRecipes',
},
{
  title:'Tuesday Breakfast',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Tuesday Lunch',
  food: 'Mac N Cheese',
  servings: '2',
  ingredients: 'Noodles, cheese, butter, milk',
  recipe: 'Step 1: warm up stove ' +
  'Step 2: boil water ' + 
  'Step 3: boil noodles until soft ' +
  'Step 4: mix in cheese, milk, and butter until it all looks correct',
  nutrition: 'Calories: Who cares, it tastes good',
  URL: 'Source: AllRecipes',
},
{
  title:'Tuesday Dinner',
  food: 'Chicken Tenders, Fries',
  servings: '2',
  ingredients: 'This section is just to check if a really long descriptor can be displayed on the window correctly. It should do so, but gotta be sure.',
  recipe: 'Fry everything',
  nutrition: 'Bad',
  URL: 'Source: AllRecipes',
},
{
  title:'Wednesday Breakfast',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Wednesday Lunch',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Wednesday Dinner',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Thursday Breakfast',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Thursday Lunch',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Thursday Dinner',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Friday Breakfast',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Friday Lunch',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Friday Dinner',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Saturday Breakfast',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Saturday Lunch',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Saturday Dinner',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Sunday Breakfast',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Sunday Lunch',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
{
  title:'Sunday Dinner',
  food: 'Cucumbers',
  servings: '2',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
  URL: 'Source: AllRecipes',
},
];

function childWindUp(card) {
  document.getElementById("para").style.display="none"; 
  document.getElementById("cardid").style.display="none"; 
  document.getElementById("childWindow").style.display="block";
  document.getElementById("foodid").innerHTML="Food: " + card.food;
  document.getElementById("ingid").innerHTML="Ingredients: " + card.ingredients;
  document.getElementById("nutid").innerHTML="Nutrition: " + card.nutrition;
  document.getElementById("servid").innerHTML="Servings: " + card.servings;
  document.getElementById("recid").innerHTML="Recipe: " + card.recipe;
  document.getElementById("urlid").innerHTML="Source: AllRecipes";
}

function childWindDown() {
  document.getElementById("childWindow").style.display="none";
  document.getElementById("cardid").style.display="block"; 
  document.getElementById("para").style.display="block";
}

function pageBegin(username) {
  console.log(username)

  document.getElementById("userInput").style.display="none";
  document.getElementById("cardid").style.display="block"; 
  document.getElementById("para").style.display="block";


  var call = "";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var numArray = JSON.parse(this.responseText);

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[0].food = myObj[0].Title;
          tiers[0].recipe = myObj[0].Instructions;
          tiers[0].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[0].ingredients = myObj[0].Ingredients;
          tiers[0].servings = myObj[0].Yield;
          tiers[0].URL = myObj[0].URL;
        }
      };
  
      call = "/api/idquery?id=" + numArray.mealplan[0].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[1].food = myObj[0].Title;
          tiers[1].recipe = myObj[0].Instructions;
          tiers[1].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[1].ingredients = myObj[0].Ingredients;
          tiers[1].servings = myObj[0].Yield;
          tiers[1].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[1].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[2].food = myObj[0].Title;
          tiers[2].recipe = myObj[0].Instructions;
          tiers[2].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[2].ingredients = myObj[0].Ingredients;
          tiers[2].servings = myObj[0].Yield;
          tiers[2].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[2].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[3].food = myObj[0].Title;
          tiers[3].recipe = myObj[0].Instructions;
          tiers[3].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[3].ingredients = myObj[0].Ingredients;
          tiers[3].servings = myObj[0].Yield;
          tiers[3].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[3].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[4].food = myObj[0].Title;
          tiers[4].recipe = myObj[0].Instructions;
          tiers[4].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[4].ingredients = myObj[0].Ingredients;
          tiers[4].servings = myObj[0].Yield;
          tiers[4].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[4].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[5].food = myObj[0].Title;
          tiers[5].recipe = myObj[0].Instructions;
          tiers[5].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[5].ingredients = myObj[0].Ingredients;
          tiers[5].servings = myObj[0].Yield;
          tiers[5].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[5].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[6].food = myObj[0].Title;
          tiers[6].recipe = myObj[0].Instructions;
          tiers[6].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[6].ingredients = myObj[0].Ingredients;
          tiers[6].servings = myObj[0].Yield;
          tiers[6].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[6].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[7].food = myObj[0].Title;
          tiers[7].recipe = myObj[0].Instructions;
          tiers[7].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[7].ingredients = myObj[0].Ingredients;
          tiers[7].servings = myObj[0].Yield;
          tiers[7].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[7].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[8].food = myObj[0].Title;
          tiers[8].recipe = myObj[0].Instructions;
          tiers[8].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[8].ingredients = myObj[0].Ingredients;
          tiers[8].servings = myObj[0].Yield;
          tiers[8].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[8].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[9].food = myObj[0].Title;
          tiers[9].recipe = myObj[0].Instructions;
          tiers[9].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[9].ingredients = myObj[0].Ingredients;
          tiers[9].servings = myObj[0].Yield;
          tiers[9].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[9].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[10].food = myObj[0].Title;
          tiers[10].recipe = myObj[0].Instructions;
          tiers[10].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[10].ingredients = myObj[0].Ingredients;
          tiers[10].servings = myObj[0].Yield;
          tiers[10].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[10].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[11].food = myObj[0].Title;
          tiers[11].recipe = myObj[0].Instructions;
          tiers[11].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[11].ingredients = myObj[0].Ingredients;
          tiers[11].servings = myObj[0].Yield;
          tiers[11].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[11].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[12].food = myObj[0].Title;
          tiers[12].recipe = myObj[0].Instructions;
          tiers[12].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[12].ingredients = myObj[0].Ingredients;
          tiers[12].servings = myObj[0].Yield;
          tiers[12].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[12].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[13].food = myObj[0].Title;
          tiers[13].recipe = myObj[0].Instructions;
          tiers[13].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[13].ingredients = myObj[0].Ingredients;
          tiers[13].servings = myObj[0].Yield;
          tiers[13].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[13].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[14].food = myObj[0].Title;
          tiers[14].recipe = myObj[0].Instructions;
          tiers[14].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[14].ingredients = myObj[0].Ingredients;
          tiers[14].servings = myObj[0].Yield;
          tiers[14].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[14].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[15].food = myObj[0].Title;
          tiers[15].recipe = myObj[0].Instructions;
          tiers[15].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[15].ingredients = myObj[0].Ingredients;
          tiers[15].servings = myObj[0].Yield;
          tiers[15].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[15].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[16].food = myObj[0].Title;
          tiers[16].recipe = myObj[0].Instructions;
          tiers[16].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[16].ingredients = myObj[0].Ingredients;
          tiers[16].servings = myObj[0].Yield;
          tiers[16].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[16].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[17].food = myObj[0].Title;
          tiers[17].recipe = myObj[0].Instructions;
          tiers[17].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[17].ingredients = myObj[0].Ingredients;
          tiers[17].servings = myObj[0].Yield;
          tiers[17].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[17].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[18].food = myObj[0].Title;
          tiers[18].recipe = myObj[0].Instructions;
          tiers[18].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[18].ingredients = myObj[0].Ingredients;
          tiers[18].servings = myObj[0].Yield;
          tiers[18].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[18].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[19].food = myObj[0].Title;
          tiers[19].recipe = myObj[0].Instructions;
          tiers[19].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[19].ingredients = myObj[0].Ingredients;
          tiers[19].servings = myObj[0].Yield;
          tiers[19].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[19].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);

          tiers[20].food = myObj[0].Title;
          tiers[20].recipe = myObj[0].Instructions;
          tiers[20].nutrition = " Calories: " + myObj[0].Nutrition[0] + " Fat: " + myObj[0].Nutrition[1] + "g Cholesterol: " +
            myObj[0].Nutrition[2] + "mg Protein: " + myObj[0].Nutrition[3] + "g Sodium: " + myObj[0].Nutrition[4] +
            "mg Carbohydrates: " + myObj[0].Nutrition[5] + "g";
          tiers[20].ingredients = myObj[0].Ingredients;
          tiers[20].servings = myObj[0].Yield;
          //tiers[20].URL = myObj[0].URL;
        }
      };
      
      call = "/api/idquery?id=" + numArray.mealplan[20].toString();
      xmlhttp.open("GET", call, true); // true for asynchronous 
      xmlhttp.send();
    }
  };
  var Query = "/api/mealplanget?user="+username
  xmlhttp.open("GET", Query, true); // true for asynchronous 
  xmlhttp.send();

  

  //document.getElementById("cafoid").innerHTML={tier.food};
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link href="/homePage" color="primary" variant="outlined" className={classes.link}>
            <Button color="primary" variant="contained">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main className={classes.image}>
        {/* Hero unit */}
          <Container id="para" maxWidth="md" style={{display: "none"}} className={classes.heroContent}>
            <Typography  component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Week View
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Welcome to the Week View! Now that we have your meals for the week created, 
              you can come here to look over them and click on them to edit or look at 
              their recipes!
            </Typography>
          </Container>
        <Container id="userInput" maxWidth="xs" className={classes.extraContent}>
          <Grid container spacing={2}>
            <Typography variant="h5" color="textPrimary">
              Please enter your username:
            </Typography>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
                name="username">
              </TextField>
            </Grid>
            <Button onClick={event => { pageBegin(username.value) }} variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Container>
        <Container id="childWindow" cmaxWidth="md" style={{display: "none"}} className={classes.heroButtons}>
          <Paper elevation={3}>
            <Typography id="foodid" component="h1" variant="h2" align="left" color="textPrimary" 
            style={{wordWrap : "break-word"}} gutterBottom className={classes.childText}>
              Recipe Here!
            </Typography>
            <Typography id="nutid" variant="h5" align="left" color="textPrimary" 
            style={{wordWrap : "break-word"}} paragraph className={classes.childText}>
              Nutrition: Egg
            </Typography>
            <Typography id="servid" variant="h5" align="left" color="textPrimary" 
            style={{wordWrap : "break-word"}} paragraph className={classes.childText}>
              Servings: 
            </Typography>
            <Typography id="ingid" variant="h5" align="left" color="textPrimary" 
            style={{wordWrap : "break-word"}} paragraph className={classes.childText}>
              Ingredients: Egg
            </Typography>
            <Typography id="recid" variant="h5" align="left" color="textPrimary" 
            style={{wordWrap : "break-word"}} paragraph className={classes.childText}>
              Recipe: Crack egg, consume egg
            </Typography>
            <Typography id="urlid" variant="h5" align="left" color="textPrimary" 
            style={{wordWrap : "break-word"}} paragraph className={classes.childText}>
              URL:
            </Typography>
            <Button onClick={event => { childWindDown() }} variant="contained" color="primary" className={classes.childButton}>
              Back
            </Button>
          </Paper>
        </Container>
        <Container id="cardid" className={classes.cardGrid} maxWidth="md" style={{display: "none"}}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {tiers.map(tier => (
              <Grid item key={tier.title} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <ButtonBase onClick={event => { childWindUp(tier) }}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {tier.title} 
                      </Typography>
                      {/*<Typography> 
                        {tier.food}
                      </Typography>*/}
                    </CardContent>
                  </ButtonBase>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}