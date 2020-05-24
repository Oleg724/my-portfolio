import React from 'react';
import './index.css';

import Hero from '../hero';
import Button from '../button';
import HomePageVibes from '../homepage-bg-vibes';

const HomePage = ({ hero, buttons }) => {
    const [ button ] = buttons;

    return (
        <div className="home-page">
            <Hero hero={ hero } />
            <div className="home-page__inner button-wrapper">
                <Button button={ button } />
            </div>
            <div className="home-page__inner home-page__inner--position-absolute">
                <HomePageVibes />
            </div>
        </div>
    );
};

export default HomePage;