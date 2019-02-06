import React from 'react';
import { Image } from 'react-bootstrap';

const CreateImage = (props) => {

    const { circle, thumbnail, src, style } = props

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