import React from 'react';
import './item-info.css';
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

export default ItemInfo;