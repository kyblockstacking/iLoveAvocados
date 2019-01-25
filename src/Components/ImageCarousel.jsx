import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

// images
import avocado1 from '../avocado_images/avo1.jpg';
import avocado2 from '../avocado_images/avo2.jpg';
import avocado3 from '../avocado_images/avo3.jpg';
import avocado4 from '../avocado_images/avo4.jpg';
import avocado5 from '../avocado_images/avo5.jpg';
import avocado6 from '../avocado_images/avo6.jpg';
import avocado7 from '../avocado_images/avo7.jpg';
import avocado8 from '../avocado_images/avo8.jpg';

class ImageCarousel extends Component {
    render() {
        return (
            <Carousel controls={false} pauseOnHover={false} slide={true} interval={2500}>

                <Carousel.Item>
                    <Image responsive style={{ backgroundSize: 'cover' }} alt="avocado picture" src={avocado1} />
                </Carousel.Item >

                <Carousel.Item>
                    <Image responsive style={{ backgroundSize: 'cover' }} alt="avocado picture" src={avocado2} />
                </Carousel.Item >

                <Carousel.Item>
                    <Image responsive style={{ backgroundSize: 'cover' }} alt="avocado picture" src={avocado3} />
                </Carousel.Item >

                <Carousel.Item>
                    <Image responsive style={{ backgroundSize: 'cover' }} alt="avocado picture" src={avocado4} />
                </Carousel.Item >

                <Carousel.Item>
                    <Image responsive style={{ backgroundSize: 'cover' }} alt="avocado picture" src={avocado5} />
                </Carousel.Item >

                <Carousel.Item>
                    <Image responsive style={{ backgroundSize: 'cover' }} alt="avocado picture" src={avocado6} />
                </Carousel.Item >

                <Carousel.Item>
                    <Image responsive style={{ backgroundSize: 'cover' }} alt="avocado picture" src={avocado7} />
                </Carousel.Item >

                <Carousel.Item>
                    <Image responsive style={{ backgroundSize: 'cover' }} alt="avocado picture" src={avocado8} />
                </Carousel.Item >
            </Carousel>
        );
    };
};

export default ImageCarousel;