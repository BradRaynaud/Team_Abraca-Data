import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class EditReqs extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      firstname:'firstName', lastname:'lastName', email:'email', lastname:'lastName', password:'password' //Id's
    }
  }

  handleInputChange(event) { //parsed in, so whatever is inserted can be retrieved as value...(console.log(var))
    this.setState({value: event.target.value})
    event.preventDefault()
  }

  handleSubmit(event) { //handles submits, parse into "form" below
    event.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ID: ID.value, 
        calories: calorie.value, 
        fat: fat.value, 
        cholesterol: cholesterol.value, 
        protein: protein.value, 
        sodium: sodium.value, 
        carbohydrate: carbohydrate.value
      })
    };
    fetch('/api/datastuff', requestOptions)
  }




  
  render(){
  const classes = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    image: {
      backgroundImage: 'url(https://github.com/BradRaynaud/Team_Abraca-Data/blob/master/frontend/pages/images/RecipePaper.jpg?raw=true)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Edit Requirements
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                name="User ID"
                variant="outlined"
                fullWidth
                id="ID"
                label="User ID"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="calorie"
                variant="outlined"
                fullWidth
                id="calorie"
                label="Optimal Calorie Amount"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="fat"
                label="Optimal Fat Amount"
                name="fat"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="cholesterol"
                label="Optimal Cholesterol Amount"
                name="cholesterol"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="protein"
                label="Optimal Protein Amount"
                name="protein"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="sodium"
                label="Optimal Sodium Amount"
                name="sodium"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="carbohydrate"
                label="Optimal Carbohydrate Amount"
                name="carbohydrate"
              />
            </Grid>
          </Grid>
          
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Submit
            </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
  }
}

export default EditReqs;