import React, { Component } from 'react';
import CreateImage from './CreateImage';
const axios = require('axios');

class Recipes extends Component {


    state = {
        edamamData: []
    };

    FetchRecipes = () => {
        const APPKEY = process.env.REACT_APP_APPKEY;
        const APPID = process.env.REACT_APP_APPID;
        const random = Math.floor(Math.random() * 90);

        axios.get(`https://api.edamam.com/search?app_id=${APPID}&app_key=${APPKEY}&q=avocado&from=${random}`)
            .then((response) => {
                const edamamData = response.data.hits;
                this.setState({ edamamData })
            })
            .catch((error) => {
                console.log(error);
            }).then(() => {
                console.log(this.state.edamamData)
            })
    };

    componentDidMount() {
        this.FetchRecipes();
    };

    render() {

        return (
            <div style={{ margin: '15vh 0 0 0', textAlign: 'center' }}>

                {this.state.edamamData.map(item => {
                    return (
                        <div key={item.recipe.label} style={{ display: 'inline-block' }}>
                            <div style={{ fontSize: '0.8em', padding: '1em 0 0 0' }}>{item.recipe.label}</div>
                            <CreateImage thumbnail={true} rounded src={item.recipe.image} style={{ padding: '10px 10px 10px 10px', margin: '0 0 1vh 1vw' }} />
                        </div>
                    );
                })}

            </div>
        );
    };
};

export default Recipes;