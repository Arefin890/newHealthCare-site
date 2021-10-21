import React from 'react';
import Banner from '../Banner/Banner';
import Labs from '../Labs/Labs';
import Overview from '../Overview/Overview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Banner></Banner>
            <Services></Services>
            <Labs></Labs>
            <Overview></Overview>
        </div>
    );
};

export default Home;