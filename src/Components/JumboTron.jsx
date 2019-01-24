import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTron extends Component {
    render() {
        return (
            <Jumbotron className='hero' style={{ textAlign: 'center', height: '95vh', backgroundImage: 'url("https://i.imgur.com/LEyyfSi.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <h1 style={{ marginTop: '25vh' }}>Avocado</h1>
                <p>
                    Experience the creaminess
                    </p>
                <p>
                    <Button bsStyle="primary">Avocado</Button>
                </p>
            </Jumbotron>
        );
    };
};

export default JumboTron;