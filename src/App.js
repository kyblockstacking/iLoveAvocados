//react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//css
import './App.css';

//components
import NavBar from './Components/NavBar';
import JumboTron from './Components/JumboTron';
import InbetweenText from './Components/InbetweenText';
import ImageCarousel from './Components/ImageCarousel';
import Button from './Components/Button';
import TextArea from './Components/TextArea';
import CreateImage from './Components/CreateImage';
import FlavorImages from './Components/FlavorImages';
import Origin from './Components/Origin';

class App extends Component {
  render() {
    return (

      <Router>

        <div className='AppWrapper'>

          <Route path='/' component={NavBar} />
          <Route exact path='/' component={JumboTron} />
          <Route exact path='/' render={(props) => <InbetweenText {...props} children={<span>EXPLORE THE POSSIBILITIES</span>} />} />
          <Route exact path='/'
            render={(props) => <TextArea
              {...props}
              children={
                <p>"The avocado serves as a culinary chameleon — something that can go with a variety of dishes while disguised in many different ways. And including avocados as a main ingredient in sauces gives chefs the ability to customize a number of dishes with varying flavor profiles."
                    <br />
                  <span>-&nbsp;</span>
                  <a href='https://avocadosfrommexico.com/foodservice/ask-foodservice/the-possibilities-are-endless-with-sauceabilities-2-0/' target='_blank' rel="noopener noreferrer">
                    avocadosfrommexico.com
                    </a>
                </p>}//closes children
            />//closes TextArea
            }//closes Render
          />{/*closes Route*/}
          <Route exact path='/' component={ImageCarousel} />
          <Route exact path='/' render={(props) => <InbetweenText {...props} children={<span>DISCOVER THE FLAVORS</span>} />} />
          <Route exact path='/'
            render={(props) => <TextArea {...props}
              children={<p>"Avocado has a rich, buttery and creamy flavor. Depending on what cultivar it is, the avocado can have hints of sweetness as well as a mild, earthy vegetable taste. When it is fully ripe, the avocado can have a delicate, hearty flavor."
            <br />
                <span>-&nbsp;</span>
                <a href='https://lovebackyard.com/what-does-avocado-taste-like/' target='_blank' rel="noopener noreferrer">
                  lovebackyard.com
                </a>
              </p>}//closes children
            />//closes TextArea
            }//closes Render
          />{/* closes Route */}
          <Route exact path='/' render={(props) => <Button {...props} href='/recipes' children={<span>RECIPES</span>} tooltip={<span>Click me to see some avocado recipes!</span>} />} />
          <Route exact path='/' component={FlavorImages} />
          <Route exact path='/' render={(props) => <InbetweenText {...props} children={<span>LEARN THEIR ORIGIN</span>} />} />
          <Route exact path='/' render={(props) => <Button {...props} href='/origin' children={<span>ORIGIN</span>} tooltip={<span>Click me learn about the origin of the avocado!</span>} />} />
          <Route exact path='/' render={(props) => <CreateImage {...props} circle={true} thumbnail={true} src={require('./avocado_images/avocado_plant.jpg')} style={{ display: 'block', margin: '0 auto' }} />} />

          <Route exact path='/origin' component={Origin} />

        </div>

      </Router >

    );//close return
  };//close render
};//close class

export default App;