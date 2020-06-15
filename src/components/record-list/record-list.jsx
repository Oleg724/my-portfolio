import React, { Fragment } from 'react';
import './record-list.css';

import PropTypes from 'prop-types';

import { withDataService } from '../hocs';
import Record from '../record';

const RecordList = ({ getContacts, links }) => {

    const contacts = getContacts();

    const records = Object.entries({ ...contacts }).map((contact, idx) => {

        const [ contactType, number ] = contact;

        const contactLinkWithoutNumber = Object.entries(links).filter(([ type, link ]) => {
            return contactType === type && link;
        });

        const href = contactLinkWithoutNumber + number;

        const contactLinkProps = {
            className: "record__link",
            href: href, 
            target: "_blank", 
            rel: "noreferrer noopener",
        };

        const contactLink = <a { ...contactLinkProps } >{ number }</a>;

        const recordProps = {
            title: contactType,
            text: contactLink,
            idForKey: contactType,
        };

        return (
            <div className="contacts-wrapper" key={ contactType } >
                <Record { ...recordProps } />
            </div>
        );
    });

    return (
        <Fragment>
            { records }
        </Fragment>
    );
};

RecordList.propTypes = {
    getContacts: PropTypes.func.isRequired,
    links: PropTypes.object.isRequired,
};

export default withDataService(RecordList);