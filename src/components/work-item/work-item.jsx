import React from 'react';
import './work-item.css';

const WorkItem = ({ image, alt = '', text }) => {

    const imageProps = {
        className: 'work-item__image',
        src: image,
        alt: alt,
    };

    return (
        <div className="work-item-wrapper">
            <div className="work-item">
                <img { ...imageProps } />
                <div className="work-item__text">{ text }</div>
            </div>
        </div>
    );
};

export default WorkItem;