import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import Editer from './images/RecipeEdit.jpg';
import Chef from './images/Chef2.jpeg';
import Fridge from './images/Fridge2.jpg';

import './App.css';

const App = () => (
  <Container className="p-3">
    <div className="banner">
      <h1 className="header">Project Meal Planner</h1>
    </div>
    <CardDeck>
      <Card>
       <Card.Img variant="top" src={Editer} />
       <Card.Title>Edit Requirements</Card.Title>
       <Button variant="primary">Go</Button>
      </Card>
      <Card>
       <Card.Img variant="top" src={Chef} />
       <Card.Title>Make Meal</Card.Title>
       <Button variant="primary">Go</Button>
      </Card>
      <Card>
       <Card.Img variant="top" src={Fridge} />
       <Card.Title>Saved Meals</Card.Title>
       <Button variant="primary">Go</Button>
      </Card>
    </CardDeck>
  </Container>
);

export default App;
