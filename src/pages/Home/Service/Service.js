import React from 'react'; import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    // console.log(props);
    const { name, description, img, id } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="service_img" variant="top" src={img} />
                    <Card.Body className="text-start">
                        <Card.Title><h4>Name: <span className="text-secondary">{name}</span></h4></Card.Title>
                        <Card.Text>
                            <p>Description: {description}</p>
                            <Link to={`/serviceDetails/ ${id}`}> <button className="btn btn-info">More Details</button> </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;