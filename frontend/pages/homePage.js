import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/AboutUs">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
  }
});

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  image: {
    backgroundImage: 'url(https://github.com/BradRaynaud/Team_Abraca-Data/blob/master/frontend/pages/images/TableAlt2.jpg?raw=true)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(1),
  },
  appBar: {
    backgroundColor: 'darkgrey',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Edit Requirements',
    description: ['Change any required nutrition amounts or indicate any special restrictions for your meals.'],
    buttonText: 'Edit',
    buttonVariant: 'outlined',
    link: '/EditReqs',
    image: "https://github.com/BradRaynaud/Team_Abraca-Data/blob/master/frontend/pages/images/RecipeEdit.jpg?raw=true",
  },
  {
    title: 'Make Meal',
    description: ['Have the program create a meal plan for your current week and go to week-view.'],
    buttonText: 'Create',
    buttonVariant: 'contained',
    link: '/WeekView',
    image: "https://github.com/BradRaynaud/Team_Abraca-Data/blob/master/frontend/pages/images/Chef2.jpeg?raw=true",
  },
  {
    title: 'Saved Meals',
    description: ['If you have saved any previous meal plans, you can see them on this page.'],
    buttonText: 'Search',
    buttonVariant: 'outlined',
    link: '/ContactUs',
    image: "https://github.com/BradRaynaud/Team_Abraca-Data/blob/master/frontend/pages/images/Fridge1.jpg?raw=true)",
  },
];

const footers = [
  {
    title: 'About Us',
    description: ['/AboutUs'],
  },
  {
    title: 'Contact Us',
    description: ['/ContactUs'],
  },

];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          </Typography>
          <Link href="/SignUp" className={classes.link}>
            <Button color="primary" variant="contained">Sign Up</Button>
          </Link>
          <Link href="/SignIn" className={classes.link}>
            <Button color="primary" variant="contained">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Grid item xs={false} className={classes.image}>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <ThemeProvider theme={theme}>
            <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
              Project Meal Planner
            </Typography>
            <Typography variant="h5" align="center" color="primary" component="p">
              Create a meal plan for the current week that will follow requirements set by you!
              Enjoy a large variety of meals while sticking to the nutrient plan you want!
            </Typography>
          </ThemeProvider>
        </Container>
      </Grid>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardMedia
                  className={classes.cardMedia}
                  image={tier.image}
                  title="Image title"
                />
                <CardContent>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Link href={tier.link}>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                      {tier.buttonText}
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href={item} variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}