import React from 'react';
import './work-info.css';

import Record from '../record';
import { withFormattedText } from '../hocs';

import PropTypes from 'prop-types';

const WorkInfo = ({ id, workDataToShow }) => {

    const records = Object.entries(workDataToShow).map(([ title, text ], idx) => {
        const newTitle = title.repeat(1).split(' ').join('');
        const idForKey = newTitle + id;
        return (
            <div className="work-info__item" key={ idForKey } >
                { withFormattedText(title, text, idForKey)(Record) }
            </div>
        )
    });

    return (
        <div className="work-info">
            { records }
        </div>
    );
};

WorkInfo.propTypes = {
    workDataToShow: PropTypes.object.isRequired,
};

export default WorkInfo;