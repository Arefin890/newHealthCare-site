import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div id="services" className="mt-5">
            <h1 className="text-center text-secondary mb-5">Our Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4 mx-auto">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;