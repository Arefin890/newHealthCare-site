import React from 'react';
import useLabs from '../../../Hooks/useLabs';
import { Row } from 'react-bootstrap';
import Lab from '../Lab/Lab';

const Labs = () => {
    const [labs] = useLabs();
    const homeLabs = labs.slice(0, 6);
    return (
        <div id="doctors" className="mt-5">
            <h1 className="text-center text-secondary mb-5">Our Doctors</h1>
            <Row xs={1} md={2} lg={3} className="g-4 mx-auto">
                {
                    homeLabs.map(lab => <Lab
                        key={lab.id}
                        lab={lab}
                    >
                    </Lab>)
                }
            </Row>
        </div>
    );
};

export default Labs;