import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTron extends Component {
    render() {
        return (
            <Jumbotron style={{ textAlign: 'center', height: '95vh' }}>
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