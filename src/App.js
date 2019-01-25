import React, { Component } from 'react';
import './App.css';

// components
import NavBar from './Components/NavBar';
import JumboTron from './Components/JumboTron';
import InbetweenText from './Components/InbetweenText';
import ImageCarousel from './Components/ImageCarousel';
import Button from './Components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <InbetweenText>DISCOVER THE POSSIBILITIES</InbetweenText>
        <ImageCarousel />
        <InbetweenText>EXPLORE THE FLAVORS</InbetweenText>
        <Button>Menu</Button>
      </div>
    );
  }
}

export default App;