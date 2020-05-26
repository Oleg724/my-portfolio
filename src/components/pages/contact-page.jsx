import React from 'react';
import './index.css';

import PropTypes from 'prop-types';

import { withDataService } from '../hocs';
import Record from '../record';
import MapImageSvg from '../map-image-svg';
import Headline from '../headline';

const ContactPage = ({ getContacts, getCity, headlines, links }) => {

    const contacts = getContacts();
    const city = getCity();

    const records = Object.entries({ ...contacts }).map((contact) => {

        const [ contactType, number ] = contact;

        const contactLinkWithoutNumber = Object.entries(links).filter(([ type, link ]) => {
            return contactType === type && link;
        });

        const href = contactLinkWithoutNumber + number;
        
        const contactLink = <a href={ href } target="_blank" rel="noreferrer noopener">{ number }</a>

        return (
            <div className="contacts-wrapper" key={ contactType } >
                <Record title={ contactType } text={ contactLink } idForKey={ contactType } />
            </div>
        );
    });

    return (       
        <div className="contact-page">
            <div className="contact-page__inner">
                <Headline headlines={ headlines } />
                { records }
            </div>
            <MapImageSvg city={ city } />
        </div>
    );
};

ContactPage.propTypes = {
    getContacts: PropTypes.func.isRequired,
    getCity: PropTypes.func.isRequired, 
    headlines: PropTypes.string.isRequired,
    links: PropTypes.object.isRequired, 
};

export default withDataService(ContactPage);