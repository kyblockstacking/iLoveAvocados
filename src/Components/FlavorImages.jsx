import React from 'react';

//components
import CreateImage from './CreateImage';

const FlavorImages = () => {

    const styles = {
        createImage: {
            display: 'inline-block'
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>

            <CreateImage thumbnail={true} style={styles.createImage} rounded src={require('../avocado_images/avocado_flavor1.jpg')}></CreateImage>

            <CreateImage thumbnail={true} style={styles.createImage} rounded src={require('../avocado_images/avocado_flavor2.jpg')}></CreateImage>

            <CreateImage thumbnail={true} style={styles.createImage} rounded src={require('../avocado_images/avocado_flavor3.jpg')}></CreateImage>

            <CreateImage thumbnail={true} style={styles.createImage} rounded src={require('../avocado_images/avocado_flavor4.jpg')}></CreateImage>

            <CreateImage thumbnail={true} style={styles.createImage} rounded src={require('../avocado_images/avocado_flavor5.jpg')}></CreateImage>

            <CreateImage thumbnail={true} style={styles.createImage} rounded src={require('../avocado_images/avocado_flavor6.jpg')}></CreateImage>

        </div>
    );
};

export default FlavorImages;