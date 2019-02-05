import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const JumboTron = () => {

    const styles = {
        jumboTron: {
            textAlign: 'center',
            height: '100vh',
            backgroundImage: 'url("https://i.imgur.com/LEyyfSi.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            marginBottom: '0'
        },
        brandName: {
            fontFamily: 'Dancing Script',
            fontSize: '8em',
            paddingTop: '25vh',
            color: '#568203',
            webkitTextStroke: '2px',
            webkitTextStrokeColor: '#424242'
        },
        slogan: {
            fontFamily: 'Archivo',
            color: '#568203',
            webkitTextStroke: '1px',
            webkitTextStrokeColor: '#424242',
            fontSize: '2em'
        }
    };

    return (
        <Jumbotron className='jumboTron' style={styles.jumboTron}>
            <h1 className='brandName' style={styles.brandName}>
                Avocado
            </h1>
            <p className='sloan' style={styles.slogan}>
                EXPERIENCE THE BEST OF CALIFORNIA
            </p>
        </Jumbotron >
    );
};

export default JumboTron;