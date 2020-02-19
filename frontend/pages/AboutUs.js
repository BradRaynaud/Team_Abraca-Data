import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="SignIn">
        Project Meal Planner
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  
  image: {
    backgroundImage: 'url(https://github.com/BradRaynaud/Team_Abraca-Data/blob/HomePage2/web/images/MPLogo.jpg?raw=true)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],    
  },
}));





export default function AboutUs() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h3" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {'Project Meal Planner was made as a Louisiana Tech 2020 Capstone Project .'}
        </Typography>
        <Typography variant="h3" component="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {'To make a weekly meal plan generator to aid'}
          {' in our customers lifestyle'}
        </Typography>
        <Typography variant="h3" component="h4" gutterBottom>
          What we have
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {'Alpha Version: 0.0.2'}
        </Typography>
        <Typography variant="h3" component="h4" gutterBottom>
          Developers
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {'Brad Rayunaud'}
          {', Kyle Morales'}
          {', Coleman Levy'}
          {', Clay Forensca'}
          {', Darrell Durousseaux'}
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2">For Your Dietary Needs.</Typography>
          <Copyright />
        </Container>
      </footer>
        
      </div>
    </Grid>
  </Grid>
);
}
//