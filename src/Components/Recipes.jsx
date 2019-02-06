import React, { Component } from 'react';
import CreateImage from './CreateImage';
const axios = require('axios');


class Recipes extends Component {

    state = {
        avocadoImages: []
    };


    FetchRecipes = () => {
        axios.get('https://api.edamam.com/search?app_id=20264bd9&app_key=03641c942af1dfe6341983b6713d9e45&q=avocado&to=20')
            .then((response) => {
                this.setState({ avocadoImages: response.data.hits[0].recipe.image })
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                console.log(this.state.avocadoImages);
            });
    }

    componentDidMount() {
        this.FetchRecipes();
    }

    render() {
        return (
            <div style={{ marginTop: '20vh' }}>
                <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={this.state.avocadoImages}></CreateImage>
            </div>
        );
    };
};

export default Recipes;