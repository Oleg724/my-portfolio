import React, { Fragment } from 'react';
import './work-details-card.css';

import CloseButton from '../close-button';
import WorkItem from '../work-item';

const WorkDetailsCard = ({ image, details, onWindowClose }) => {

    const workItemProps = {
        image: image, 
        alt: details.title, 
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

export default WorkDetailsCard;