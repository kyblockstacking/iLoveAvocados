import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

//images
import avocado1 from '../Avocado_Images/avo1.jpg';
import avocado2 from '../Avocado_Images/avo2.jpg';
import avocado3 from '../Avocado_Images/avo3.jpg';
import avocado4 from '../Avocado_Images/avo4.jpg';
import avocado5 from '../Avocado_Images/avo5.jpg';
import avocado6 from '../Avocado_Images/avo6.jpg';
import avocado7 from '../Avocado_Images/avo7.jpg';
import avocado8 from '../Avocado_Images/avo8.jpg';

const ImageCarousel = () => {

    const styles = {
        image: {
            backgroundSize: 'cover'
        }
    };

    return (
        <Carousel className='carousel' controls={false} pauseOnHover={false} slide={true} interval={2500}>

            <Carousel.Item>
                <Image
                    responsive style={styles.image}
                    alt="avocado picture"
                    src={avocado1}
                />
            </Carousel.Item >

            <Carousel.Item>
                <Image
                    responsive style={styles.image}
                    alt="avocado picture"
                    src={avocado2}
                />
            </Carousel.Item >

            <Carousel.Item>
                <Image
                    responsive style={styles.image}
                    alt="avocado picture"
                    src={avocado3}
                />
            </Carousel.Item >

            <Carousel.Item>
                <Image
                    responsive style={styles.image}
                    alt="avocado picture"
                    src={avocado4}
                />
            </Carousel.Item >

            <Carousel.Item>
                <Image
                    responsive style={styles.image}
                    alt="avocado picture"
                    src={avocado5}
                />
            </Carousel.Item >

            <Carousel.Item>
                <Image
                    responsive style={styles.image}
                    alt="avocado picture"
                    src={avocado6}
                />
            </Carousel.Item >

            <Carousel.Item>
                <Image
                    responsive style={styles.image}
                    alt="avocado picture"
                    src={avocado7}
                />
            </Carousel.Item >

            <Carousel.Item>
                <Image
                    responsive style={styles.image}
                    alt="avocado picture"
                    src={avocado8}
                />
            </Carousel.Item >
        </Carousel>
    );
    
};

export default ImageCarousel;