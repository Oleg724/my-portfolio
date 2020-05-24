import React from 'react';
import './close-button.css';

const CloseButton = ({ onWindowClose }) => {

    return (
        <div className="close-button" onClick={ () => onWindowClose() } >
            <button className="close-button__button" 
                type="button"></button>
        </div>
    );
};

export default CloseButton;