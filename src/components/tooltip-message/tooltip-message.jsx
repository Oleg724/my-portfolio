import React from 'react';
import './tooltip-message.css';

import PropTypes from 'prop-types';

const TooltipMessage = ({ text }) => {

    return (
        <div className="tooltip">
            <p className="tooltip__text">{ text }</p>
        </div>
    );
};

TooltipMessage.propTypes = {
    tooltip: PropTypes.string.isRequired,
};

export default TooltipMessage;