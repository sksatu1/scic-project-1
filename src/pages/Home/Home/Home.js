import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import HomeAccordion from '../HomeAccordion/HomeAccordion';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const slice = 6;
    return (
        <div>
            <Banner></Banner>
            <Bikes
                slice={slice}
            ></Bikes>
            <Reviews></Reviews>
            <HomeAccordion></HomeAccordion>
            <Footer></Footer>
        </div>
    );
};

export default Home;