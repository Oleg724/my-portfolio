import React, { Fragment } from 'react';
import './work-details.css';

import PropTypes from 'prop-types';

import CloseButton from '../close-button';
import WorkItem from '../work-item';

const WorkDetails = ({ image, title, details, onWindowClose }) => {

    const workItemProps = {
        image: image, 
        alt: title, 
        text: details,
    };

    return (
        <Fragment>
            <div className="close-button-wrapper">
                <CloseButton onWindowClose={ onWindowClose } />
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
};  

export default WorkDetails;