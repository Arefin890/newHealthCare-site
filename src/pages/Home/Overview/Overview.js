import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Overview = () => {
    return (
        <div className="mx-auto mt-5">
            <h1 className="text-dark mb-5">Overview</h1>
            <Row xs={2} md={2} lg={3} className="mx-auto">

                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="fab fa-codepen text-success"></i></h1></Col>
                    <Col xs><h3>10</h3></Col>
                    <Col xs><h3>Years of Stablished</h3></Col>
                </Col>
                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="fas fa-hospital-user text-success"></i></h1></Col>

                    <Col xs><h3>56000+</h3></Col>

                    <Col xs><h3>Happy Patients</h3></Col>

                </Col>

                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="fas fa-user-md text-success"></i></h1></Col>
                    <Col xs><h3>25+</h3></Col>

                    <Col xs><h3>Doctors</h3></Col>


                </Col>
            </Row>
        </div>
    );
};


export default Overview;