import React from 'react';

import './hero.css';

const Hero = ({ hero }) => {
    return (
        <div className="hero">
            { hero.map( parag => parag ) }
        </div>
    );
};

export default Hero;