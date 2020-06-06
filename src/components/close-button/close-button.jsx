import React from 'react';
import './close-button.css';

import PropTypes from 'prop-types';

const CloseButton = ({ closeFunction }) => {

    return (
        <div className="close-button" onClick={ () => closeFunction() } >
            <button className="close-button__button" 
                type="button"></button>
        </div>
    );
};

CloseButton.propTypes = {
    closeFunction: PropTypes.func.isRequired,
};

export default CloseButton;