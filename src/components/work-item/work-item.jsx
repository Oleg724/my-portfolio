import React from 'react';
import './work-item.css';

import PropTypes from 'prop-types';

const WorkItem = ({ image, alt, text }) => {

    const imageProps = {
        className: 'work-item__image',
        src: image,
    };

    return (
        <div className="work-item-wrapper">
            <div className="work-item">
                <img { ...imageProps } alt={ alt } />
                <div className="work-item__text">{ text }</div>
            </div>
        </div>
    );
};

WorkItem.protoTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
};

export default WorkItem;