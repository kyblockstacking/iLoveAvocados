import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

//Images
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
            <Carousel controls={false} pauseOnHover={false} slide={true} interval={2500} style={{ height: '100vh' }} >

                <Carousel.Item>
                    <img style={{ width: '100vw', height: '100vh' }} alt="900x500" src={avocado1} />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ width: '100vw', height: '100vh' }} alt="900x500" src={avocado2} />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ width: '100vw', height: '100vh' }} alt="900x500" src={avocado3} />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ width: '100vw', height: '100vh' }} alt="900x500" src={avocado4} />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ width: '100vw', height: '100vh' }} alt="900x500" src={avocado5} />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ width: '100vw', height: '100vh' }} alt="900x500" src={avocado6} />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ width: '100vw', height: '100vh' }} alt="900x500" src={avocado7} />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ width: '100vw', height: '100vh' }} alt="900x500" src={avocado8} />
                </Carousel.Item>
            </Carousel>
        );
    };
};

export default ImageCarousel;