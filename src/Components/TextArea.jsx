import React from 'react';

const TextArea = (props) => {
    return (
        <div id={props.id} style={{ color: '#4c6e66', fontFamily: 'Archivo', textAlign: 'center', width: '40%', margin: '0 auto 1em' }}>
            {props.children}
        </div>
    );
};

export default TextArea;