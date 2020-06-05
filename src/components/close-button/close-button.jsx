import React from 'react';
import './close-button.css';

import PropTypes from 'prop-types';

const CloseButton = ({ onWindowAndTooltipClose }) => {

    return (
        <div className="close-button" onClick={ () => onWindowAndTooltipClose() } >
            <button className="close-button__button" 
                type="button"></button>
        </div>
    );
};

CloseButton.propTypes = {
    onWindowAndTooltipClose: PropTypes.func.isRequired,
};

export default CloseButton;