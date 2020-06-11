import React from 'react';
import './record.css';

import PropTypes from 'prop-types';

const Record = ({ title, text, dataId = '', idForKey }) => {

    return (
        <p className="record" key={ idForKey }>
            <span>{ title }</span> : { text }
        </p>
    );
};

Record.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired,
    dataId: PropTypes.number,
    idForKey: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default Record;