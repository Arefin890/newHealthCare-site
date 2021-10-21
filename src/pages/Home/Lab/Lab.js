import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Lab = (props) => {
    // const history = useHistory();

    const { name, expertise, fee, img } = props.lab;
    // const handleAppointment = () => {
    //     history.push('/appointment');
    // }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-start">
                        <Card.Title><h4>Name: <span className="text-secondary">{name}</span></h4></Card.Title>
                        <Card.Text>
                            <h6>Expertise: {expertise}</h6>
                            <h6>Fee: {fee}Tk.</h6>
                            {/* <button onClick={handleAppointment} className="btn  btn-primary">Take Appointment</button> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Lab;