import React from 'react';
import './tooltip-image-hover.css';

import PropTypes from 'prop-types';

const TooltipImageHover = ({ tooltip }) => {

    return <div className="tooltip-image-hover">{ tooltip }</div>;
};

TooltipImageHover.propTypes = {
    tooltip: PropTypes.string.isRequired,
};

export default TooltipImageHover;