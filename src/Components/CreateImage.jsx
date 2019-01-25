import React from 'react';

import avocado from '../avocado_images/avocado.jpg';

const CreateImage = (props) => {
    return (
        <img style={{ height: '100vh', width: '100%'}} src={avocado} ></img>
    );
};

export default CreateImage;