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
        Your Website
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
    backgroundImage: 'url(https://github.com/BradRaynaud/Team_Abraca-Data/blob/master/frontend/pages/images/MealPrep1.jpg?raw=true)',
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
  ingredients: 'Waffles, Eggs',
  recipe: 'Cook waffles and scramble eggs',
  nutrition: 'Calories: 500, Fat: 12mg',
},
{
  title:'Monday Lunch',
  food: 'Chicken Sandwich',
  ingredients: 'Chicken, bread',
  recipe: 'Put chicken in between bread slices',
  nutrition: 'Calories: Chicken, Fat: Chicken',
},
{
  title:'Monday Dinner',
  food: 'Filet Mignon',
  ingredients: 'Cow',
  recipe: 'Cook cow',
  nutrition: 'Cow',
},
{
  title:'Tuesday Breakfast',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Tuesday Lunch',
  food: 'Mac N Cheese',
  ingredients: 'Noodles, cheese, butter, milk',
  recipe: 'Step 1: warm up stove ' +
  'Step 2: boil water ' + 
  'Step 3: boil noodles until soft ' +
  'Step 4: mix in cheese, milk, and butter until it all looks correct',
  nutrition: 'Calories: Who cares, it tastes good',
},
{
  title:'Tuesday Dinner',
  food: 'Chicken Tenders, Fries',
  ingredients: 'This section is just to check if a really long descriptor can be displayed on the window correctly. It should do so, but gotta be sure.',
  recipe: 'Fry everything',
  nutrition: 'Bad',
},
{
  title:'Wednesday Breakfast',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Wednesday Lunch',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Wednesday Dinner',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Thursday Breakfast',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Thursday Lunch',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Thursday Dinner',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Friday Breakfast',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Friday Lunch',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Friday Dinner',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Saturday Breakfast',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Saturday Lunch',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Saturday Dinner',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Sunday Breakfast',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Sunday Lunch',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
{
  title:'Sunday Dinner',
  food: 'Cucumbers',
  ingredients: 'Cucumbers',
  recipe: 'Cut cucumbers',
  nutrition: 'Calories: still cucumbers',
},
];

function childWindUp(card) {
  document.getElementById("para").style.display="none"; 
  document.getElementById("cardid").style.display="none"; 
  document.getElementById("childWindow").style.display="block";
  document.getElementById("foodid").innerHTML="Food: " + card.food;
  document.getElementById("ingid").innerHTML="Ingredients: " + card.ingredients;
  document.getElementById("nutid").innerHTML="Nutrition: " + card.nutrition; 
  document.getElementById("recid").innerHTML="Recipe: " + card.recipe;
}

function childWindDown() {
  document.getElementById("childWindow").style.display="none";
  document.getElementById("cardid").style.display="block"; 
  document.getElementById("para").style.display="block";
}

function pageBegin() {
  document.getElementById("userInput").style.display="none";
  document.getElementById("cardid").style.display="block"; 
  document.getElementById("para").style.display="block";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      tiers[0].food = myObj[0].Title;
    }
  };
  xmlhttp.open("GET", "http://localhost/api/idquery?id=1", true); // true for asynchronous 
  xmlhttp.send();
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
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
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
            <Button onClick={event => { pageBegin() }} variant="contained" color="primary" fullWidth>
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
            <Typography id="nutid" variant="h5" align="left" color="textSecondary" 
            style={{wordWrap : "break-word"}} paragraph className={classes.childText}>
              Nutrition: Egg
            </Typography>
            <Typography id="ingid" variant="h5" align="left" color="textSecondary" 
            style={{wordWrap : "break-word"}} paragraph className={classes.childText}>
              Ingredients: Egg
            </Typography>
            <Typography id="recid" variant="h5" align="left" color="textSecondary" 
            style={{wordWrap : "break-word"}} paragraph className={classes.childText}>
              Recipe: Crack egg, consume egg
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
                      <Typography> 
                        {tier.food}
                      </Typography>
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