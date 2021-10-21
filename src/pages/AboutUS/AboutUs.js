import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="mt-3">
            <Row xs={1} md={1} lg={2} className="d-flex md:pt-5 pb-5 mx-0">
                <Col className="col-lg-6 p-5 mt-5">
                    <h1 className="text-dark fw-bold">CEO Message</h1>
                    <h5 className="d-flex align-items-center ">A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease.[1] Clinical Medical laboratories are an example of applied science, as opposed to research laboratories that focus on basic science, such as found in some academic institutions.</h5>

                </Col>
                <Col className="col-lg-6 photo sm:mt-5">
                    <img src="https://media.istockphoto.com/photos/digitally-generated-image-of-the-research-lab-picture-id1302609512?s=612x612" alt="" />
                </Col>
            </Row>

        </div>

    );
};

export default AboutUs;