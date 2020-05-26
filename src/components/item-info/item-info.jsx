import React from 'react';
import './item-info.css';

import PropTypes from 'prop-types';

import Tooltip from '../tooltip-message';
import ArrowRight from '../arrow-right';
import ArrowLeft from '../arrow-left';
import Headline from '../headline';

const ItemInfo = ({ 
    textAbout,
    tooltips,
    headlines,
    prevSubPage,
    nextSubPage,
    showArrowLeft,
    showArrowRight }) => {

    const arrowLeftProps = {
        className: 'info__icon',
        onClick: () => prevSubPage(),
    };

    const arrowRightProps = {
        className: 'info__icon',
        onClick: () => nextSubPage(),
    };

    const arrowLeft = showArrowLeft && (
        <div { ...arrowLeftProps } >
            <ArrowLeft />
        </div>
    );

    const arrowRight = showArrowRight && (
        <div { ...arrowRightProps } >
            <ArrowRight />
        </div> 
    );

    return (
        <div className="info">
            <Headline headlines={ headlines } />
            <p className="info__text">{ textAbout }</p>

            <div className="info__inner">
                <div className="info__arrows">
                    { arrowLeft }
                    { arrowRight }
                </div>
                <div className="info__tooltip">
                    <Tooltip text={ tooltips.continue } />
                </div>
            </div>
        </div>
    );
};

ItemInfo.propTypes = {
    textAbout: PropTypes.string,
    tooltips: PropTypes.object,
    headlines: PropTypes.string,
    prevSubPage: PropTypes.func,
    nextSubPage: PropTypes.func,
    showArrowLeft: PropTypes.bool,
    showArrowRight: PropTypes.bool,
};

export default ItemInfo;