import React from 'react';
import { Image } from 'react-bootstrap';

const CreateImage = (props) => {
    return (
        <Image responsive circle={props.circle} thumbnail={props.thumbnail} src={props.src} style={props.style}></Image>
    );
};

export default CreateImage;