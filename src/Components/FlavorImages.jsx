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
        <div className='flavorImages' style={{ textAlign: 'center' }}>

            <CreateImage
                rounded
                thumbnail={true}
                style={styles.createImage}
                src={require('../Avocado_Images/avocado_flavor1.jpg')}>
            </CreateImage>

            <CreateImage
                rounded
                thumbnail={true}
                style={styles.createImage}
                src={require('../Avocado_Images/avocado_flavor2.jpg')}>
            </CreateImage>

            <CreateImage
                rounded
                thumbnail={true}
                style={styles.createImage}
                src={require('../Avocado_Images/avocado_flavor3.jpg')}>
            </CreateImage>

            <CreateImage
                rounded
                thumbnail={true}
                style={styles.createImage}
                src={require('../Avocado_Images/avocado_flavor4.jpg')}>
            </CreateImage>

            <CreateImage
                rounded
                thumbnail={true}
                style={styles.createImage}
                src={require('../Avocado_Images/avocado_flavor5.jpg')}>
            </CreateImage>

            <CreateImage
                rounded
                thumbnail={true}
                style={styles.createImage}
                src={require('../Avocado_Images/avocado_flavor6.jpg')}>
            </CreateImage>

        </div>
    );

};

export default FlavorImages;