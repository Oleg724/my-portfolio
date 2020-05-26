import React from 'react';
import './image.css';

import PropTypes from 'prop-types';

const Image = ({ image, clazz, alt = '' }) => {
    
    return <img className={`image ${ clazz }`} src={ image } alt={ alt } />
}

Image.propTypes = {
    image: PropTypes.string.isRequired,
    clazz: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Image;