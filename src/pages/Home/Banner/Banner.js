import React from 'react';
import image1 from '../../../Images/slider1.jpg';
import image2 from '../../../Images/slider2.jpg';
import image3 from '../../../Images/slider3.jpg';
import './Banner.css';

import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-info">Test Lab</h3>
                        <p>Testing blood , Nurine and others</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Caliper</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Report Room</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;