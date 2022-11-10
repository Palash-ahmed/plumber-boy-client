import React from 'react';
import useTitle from '../../../hooks/useTitle';
import PlumberService from '../PlumberService/PlumberService';
import FirstSection from '../Section/FirstSection';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <PlumberService></PlumberService>
            <FirstSection></FirstSection>
        </div>
    );
};

export default Home;