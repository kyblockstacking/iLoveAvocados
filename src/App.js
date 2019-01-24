import React, { Component } from 'react';
import './App.css';

// components
import NavBar from './Components/NavBar.jsx';
import JumboTron from './Components/JumboTron';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
      </div>
    );
  }
}

export default App;