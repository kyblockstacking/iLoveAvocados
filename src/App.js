import React, { Component } from 'react';
import './App.css';

// components
import NavBar from './Components/NavBar';
import JumboTron from './Components/JumboTron';
import InbetweenText from './Components/InbetweenText';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <InbetweenText>DISCOVER THE CREAMINESS</InbetweenText>
      </div>
    );
  }
}

export default App;