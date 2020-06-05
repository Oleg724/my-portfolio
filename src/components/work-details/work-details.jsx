import React, { Fragment } from 'react';
import './work-details.css';

import PropTypes from 'prop-types';

import CloseButton from '../close-button';
import WorkItem from '../work-item';

const WorkDetails = ({ 
    image, 
    title, 
    details, 
    onWindowClose,
    onCloseTooltipImageHover, 
}) => {

    const workItemProps = {
        image: image, 
        alt: title, 
        text: details,
    };

    const onWindowAndTooltipClose = () => {
        onWindowClose();
        onCloseTooltipImageHover();
    }

    const closeButtonProps = {
        onWindowAndTooltipClose: onWindowAndTooltipClose,
    };

    return (
        <Fragment>
            <div className="close-button-wrapper">
                <CloseButton { ...closeButtonProps } />
            </div>           
            <WorkItem { ...workItemProps } />
        </Fragment>
    );
};  

WorkDetails.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.array.isRequired,
    onWindowClose: PropTypes.func.isRequired,
    onCloseTooltipImageHover: PropTypes.func.isRequired,
};  

export default WorkDetails;