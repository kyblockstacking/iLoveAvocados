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
<<<<<<< HEAD
        <div id={props.id} style={{ color: '#4c6e66', fontFamily: 'Archivo', textAlign: 'center', width: '40%', margin: '0 auto 1em' }}>
            {props.children}
        </div>
=======
        <div
            className='textArea'
            style={styles.textArea}
        >
            {children}
        </div >
>>>>>>> a535f9576951b13318de1757daa59492b50e18b0
    );

};

export default TextArea;