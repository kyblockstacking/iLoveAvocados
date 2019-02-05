import React from 'react';

const TextArea = (props) => {

    const { children } = props;

    const styles = {
        textArea: {
            color: '#4c6e66',
            fontFamily: 'Archivo',
            textAlign: 'center',
            width: '40%',
            margin: '0 auto 1em'
        }
    };

    return (
        <div style={styles.textArea}>
            {children}
        </div >
    );

};

export default TextArea;