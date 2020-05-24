import React from 'react';
import './image.css';

const Image = ({ image, clazz, alt }) => {
    
    return <img className={`image ${ clazz }`} src={ image } alt={ alt } />
}

export default Image;