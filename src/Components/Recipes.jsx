import React, { Component } from 'react';
import CreateImage from './CreateImage';
const axios = require('axios');


class Recipes extends Component {


    state = {
        images: []
    };

    componentDidMount() {
        const APPKEY = process.env.REACT_APP_APPKEY
        const APPID = process.env.REACT_APP_APPID

        const random = Math.floor(Math.random() * 90);

        axios.get(`https://api.edamam.com/search?app_id=${APPID}&app_key=${APPKEY}&q=avocado&from=${random}`)
            .then((response) => {
                const images = response.data.hits
                this.setState({ images })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            }).then(() => {
                console.log(this.state.images)
            })
    };

    render() {

        return (
            <div style={{ margin: '15vh 0 0 0', textAlign: 'center' }}>
                {this.state.images.map(item => {
                    return (
                        <div style={{ display: 'inline-block' }}>
                            <div style={{ fontSize: '0.8em', padding: '1em 0 0 0' }}>{item.recipe.label}</div>
                            <CreateImage thumbnail={true} rounded src={item.recipe.image} style={{ padding: '20px', margin: '0 1vw 1vh 1vw' }} />
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default Recipes;