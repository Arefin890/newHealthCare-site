import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const ServiceDescription = () => {
    const { serviceId } = useParams();
    // console.log(serviceId);
    const [services] = useServices();
    // console.log(services)
    const service = services.find(service => service.id == serviceId)
    console.log(service)


    return (
        <div className="mt-5 pt-5 w-50 mx-auto">
            <Col>
                <Card>
                    <Card.Img variant="top" src={service?.img} />
                    <Card.Body className="text-start">
                        <Card.Title><h4>Title: <span className="text-primary">{service?.name}</span></h4></Card.Title>
                        <Card.Text>
                            <h6>Description: {service?.description}</h6>
                            <Link to='/home'> <button className="btn btn-primary">Go Home</button> </Link>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceDescription;