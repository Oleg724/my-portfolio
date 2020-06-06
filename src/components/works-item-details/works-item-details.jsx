import React, { Fragment } from 'react';
import './works-item-details.css';

import PropTypes from 'prop-types';
import Record from '../record';
import { withFormattedText } from '../hocs';


const WorkItemDetails = ({ getWorksDetails, selectedWorkId }) => {
    const itemDetails = getWorksDetails();
    const newItemDetails = [ ...itemDetails ];

    const selectedWork = newItemDetails.find(work => work.id === selectedWorkId);

    const { image, id, ...otherDetails } = selectedWork;

    const details = Object.entries(otherDetails).map(([title, text], idx) => {
        const idForKey = title + id + idx; 
        return (
            <div className="record-wrapper" key={ idForKey } >
                { withFormattedText(title, text, idForKey)(Record) }
            </div>
        )
    });

    return (
        <Fragment>
            { details }
        </Fragment>
    );
};

WorkItemDetails.propTypes = {
    getWorksDetails: PropTypes.array.isRequired,
    selectedWorkId: PropTypes.number.isRequired,
};

export default WorkItemDetails;