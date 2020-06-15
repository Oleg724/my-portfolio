import React from 'react';
import './index.css';

import PropTypes from 'prop-types';
import { withDataService } from '../hocs';
import MapImageSvg from '../map-image-svg';
import ContactsBoard from '../contacts-board';

const ContactPage = ({ getCity, headlines, links }) => {

    const city = getCity();

    const contactsBoardProps = {
        headlines: headlines,
        links: links,
    };

    return (       
        <div className="contact-page">
            <div className="contact-page__inner">
                <div className="contact-page__inner-inner">
                    <ContactsBoard { ...contactsBoardProps } clazz="contact-page__list--front" />
                    <ContactsBoard { ...contactsBoardProps } clazz="contact-page__list--back" />  
                </div>
                <div className="contact-page__inner-inner contact-page__inner-inner--mirror">
                    <ContactsBoard { ...contactsBoardProps } clazz="contact-page__list--mirror contact-page__list--front" />
                    <ContactsBoard { ...contactsBoardProps } clazz="contact-page__list--mirror contact-page__list--back" />
                  </div>
            </div>
            <MapImageSvg city={ city } />
        </div>
    );
};

ContactPage.propTypes = {
    getCity: PropTypes.func.isRequired, 
    headlines: PropTypes.string.isRequired,
    links: PropTypes.object.isRequired, 
};

export default withDataService(ContactPage);