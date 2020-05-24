import React from 'react';
import './index.css';

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

        return <Record title={ contactType } text={ contactLink } />;
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

export default withDataService(ContactPage);