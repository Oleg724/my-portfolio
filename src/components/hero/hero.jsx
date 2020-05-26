import React from 'react';
import './hero.css';

import PropTypes from 'prop-types';

const Hero = ({ hero }) => {
    return (
        <div className="hero">
            { hero.map( parag => parag ) }
        </div>
    );
};

Hero.propTypes = {
    hero: PropTypes.array.isRequired,
};

export default Hero;