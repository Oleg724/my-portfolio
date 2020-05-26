import React from 'react';
import './close-button.css';

import PropTypes from 'prop-types';

const CloseButton = ({ onWindowClose }) => {

    return (
        <div className="close-button" onClick={ () => onWindowClose() } >
            <button className="close-button__button" 
                type="button"></button>
        </div>
    );
};

CloseButton.propTypes = {
    onWindowClose: PropTypes.func,
};

export default CloseButton;