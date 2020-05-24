import React from 'react';
import './work-info.css';

import Record from '../record';
import { withFormattedText } from '../hocs';

const WorkInfo = ({ workDataToShow }) => {

    const records = Object.entries(workDataToShow).map(([ title, text ]) => {

        return withFormattedText(title, text)(Record);
    });

    return (
        <div className="work-info">
            { records }
        </div>
    );
};

export default WorkInfo;