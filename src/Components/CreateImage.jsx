import React from 'react';
import { Image } from 'react-bootstrap';

import avocado from '../avocado_images/avocado.jpg';

const CreateImage = (props) => {
    return (
        <Image responsive circle thumbnail src={avocado} ></Image>
    );
};

export default CreateImage;