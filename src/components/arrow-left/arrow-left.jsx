import React from 'react';
import './arrow-left.css';

import PropTypes from 'prop-types';

const ArrowLeft = ({ clazz = '' }) => {

    return (
        <svg className={ `arrow-left${ clazz }` } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.675 407.675">
            <path d="M164.684 348.361a9.995 9.995 0 01-8.669-5.002c-2.762-4.782-1.122-10.897 
                3.66-13.659l218-125.863-218-125.862c-4.783-2.761-6.422-8.877-3.66-13.66 2.761-4.783 
                8.878-6.421 13.66-3.66l233 134.522a9.999 9.999 0 010 17.32l-233 134.522a9.95 9.95 0 
                01-4.991 1.342z"/>
            <path d="M10.012 348.361a9.998 9.998 0 01-8.67-5.002C-1.42 338.577.22 332.462 5.002 
                329.7l218-125.863-218-125.862c-4.783-2.761-6.422-8.877-3.66-13.66 2.762-4.783 
                8.879-6.421 13.66-3.66l233 134.522a9.999 9.999 0 010 17.32l-233 134.522a9.94 9.94 0 
                01-4.99 1.342z"/>
        </svg>
    );
};

ArrowLeft.propTypes = {
    clazz: PropTypes.string,
};

export default ArrowLeft;