import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

//Images
import avocado1 from '../avocado_images/avo1.jpg';
import avocado4 from '../avocado_images/avo4.jpg';
import avocado5 from '../avocado_images/avo5.jpg';
import avocado6 from '../avocado_images/avo6.jpg';
import avocado7 from '../avocado_images/avo7.jpg';
import avocado9 from '../avocado_images/avo9.jpg';
import avocado10 from '../avocado_images/avo10.jpg';

class ImageCarousel extends Component {
    render() {
        return (
            <Carousel interval={2000} style={{ height: '100vh' }} >
                <Carousel.Item active>
                    <img style={{ width: '100%', height: '100vh' }} alt="900x500" src={avocado1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height: '100vh' }} alt="900x500" src={avocado4} />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height: '100vh' }} alt="900x500" src={avocado5} />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height: '100vh' }} alt="900x500" src={avocado6} />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height: '100vh' }} alt="900x500" src={avocado7} />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height: '100vh' }} alt="900x500" src={avocado9} />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height: '100vh' }} alt="900x500" src={avocado10} />
                </Carousel.Item>
            </Carousel>
        );
    };
};

export default ImageCarousel;