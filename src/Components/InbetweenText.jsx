import React from 'react';

const InbetweenText = (props) => {

    const { children } = props;

    const styles = {
        inbetweenText: {
            fontFamily: 'Archivo',
            textAlign: 'center',
            background: 'white',
            padding: '1em 1em 0.5em 1em',
            color: '#568203',
            textShadow: '-1px -1px 2px #424242, 1px -1px 2px #424242, -1px 1px 2px #424242, 1px 1px 2px #424242',
            fontSize: '2em'
        }
    };

    return (
        <div
            className='inbetweenText'
            style={styles.inbetweenText}
        >
            {children}
        </div>
    );

};

export default InbetweenText;