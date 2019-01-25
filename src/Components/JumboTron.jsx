import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTron extends Component {
    render() {
        return (
            <Jumbotron className='hero' style={{ textAlign: 'center', height: '100vh', backgroundImage: 'url("https://i.imgur.com/LEyyfSi.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '0' }}>
                <h1 style={{ fontFamily: 'Dancing Script', fontSize: '8em', paddingTop: '25vh', color: '#568203', webkitTextStroke: '2px', webkitTextStrokeColor: '#424242' }}>
                    Avocado
                </h1>
                <p style={{ fontFamily: 'Archivo', color: '#568203', webkitTextStroke: '1px', webkitTextStrokeColor: '#424242', fontSize: '2em' }}>
                    EXPERIENCE THE BEST OF CALIFORNIA
                </p>
                <p>
                    <Button bsStyle="primary">Reservations</Button>
                </p>
            </Jumbotron>
        );
    };
};

export default JumboTron;