import React from 'react';
import { Image } from 'react-bootstrap';

const CreateImage = ({ circle, thumbnail, src, style }) => {

    return (
        <Image
            className='createImage'
            responsive circle={circle}
            thumbnail={thumbnail}
            src={src}
            style={style}>
        </Image>
    );

};

export default CreateImage;