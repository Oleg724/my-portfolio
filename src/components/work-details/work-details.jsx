import React, { Fragment } from 'react';
import './work-details.css';

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

export default WorkDetails;