import React from 'react';
import './contacts-board.css';

import PropTypes from 'prop-types';
import Headline from '../headline';
import RecordList from '../record-list';


const ContactsBoard = ({ clazz, headlines, links }) => {
    return (
        <div className={ `contact-page__list ${ clazz }` }>
            <Headline headlines={ headlines } />
            <RecordList links={ links } />
        </div>
    );
};

ContactsBoard.propTypes = {
    clazz: PropTypes.string,
    headlines: PropTypes.string,
    links: PropTypes.object,
};

export default ContactsBoard;