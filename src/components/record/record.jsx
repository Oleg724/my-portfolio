import React from 'react';
import './record.css';

const Record = ({ title, text }) => {

    return (
        <p className="record" key={ title }>
            <span>{ title }</span> : { text }
        </p>
    );
};

export default Record;