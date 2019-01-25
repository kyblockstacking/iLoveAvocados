import React, { Component } from 'react';
import './App.css';

// components
import NavBar from './Components/NavBar';
import JumboTron from './Components/JumboTron';
import InbetweenText from './Components/InbetweenText';
import ImageCarousel from './Components/ImageCarousel';
import Button from './Components/Button';
import TextArea from './Components/TextArea';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <InbetweenText>DISCOVER THE POSSIBILITIES</InbetweenText>
        <TextArea>
          "The avocado serves as a culinary chameleon — something that can go with a variety of dishes while disguised in many different ways. And including avocados as a main ingredient in sauces gives chefs the ability to customize a number of dishes with varying flavor profiles." <br />
          <a href='https://avocadosfrommexico.com/foodservice/ask-foodservice/the-possibilities-are-endless-with-sauceabilities-2-0/' target='_blank' rel="noopener noreferrer">
            avocadosfrommexico.com
          </a>
        </TextArea>
        <ImageCarousel />
        <InbetweenText>EXPLORE THE FLAVORS</InbetweenText>
        <Button>Menu</Button>
      </div>
    );
  }
}

export default App;