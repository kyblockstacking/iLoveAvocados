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
        axios.get(`https://api.edamam.com/search?app_id=${APPID}&app_key=${APPKEY}&q=avocado&to=20`)
            .then((response) => {
                const images = response.data.hits
                this.setState({ images })
            })
            .catch((error) => {
                console.log(error);
            }).then(() => {
                console.log(this.state.images)
            })
    };

    render() {

        // let images = this.state.images.map(item => {
        //     console.log(item)

        //     return (
        //         [
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[0].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[1].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[2].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[3].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[4].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[5].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[6].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[7].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[8].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[9].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[10].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[11].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[12].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[13].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[14].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[15].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[16].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[17].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[18].recipe.image} />,
        //             <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.data.hits[19].recipe.image} />,
        //         ]
        //     );
        // });

        return (
            <div style={{ marginTop: '20vh', textAlign: 'center' }}>
                {this.state.images.map(item => { return <CreateImage thumbnail={true} style={{ display: 'inline-block' }} rounded src={item.recipe.image} /> })}
            </div>
        );
    };
};

export default Recipes;