import React from 'react';
import { Image } from 'react-bootstrap';

import avocado from '../avocado_images/avocado_plant.jpg';

const CreateImage = () => {
    return (
        <Image responsive circle thumbnail src={avocado} style={{ display: 'block', margin: '0 auto' }}></Image>
    );
};

export default CreateImage;