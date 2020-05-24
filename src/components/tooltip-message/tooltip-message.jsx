import React from 'react';
import './tooltip-message.css';

const TooltipMessage = ({ text }) => {

    return (
        <div className="tooltip">
            <p className="tooltip__text">{ text }</p>
        </div>
    );
};

export default TooltipMessage;