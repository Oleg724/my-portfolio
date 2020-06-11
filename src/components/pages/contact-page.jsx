import React from 'react';
import './index.css';

import PropTypes from 'prop-types';

import { withDataService } from '../hocs';
import MapImageSvg from '../map-image-svg';
import Headline from '../headline';
import RecordList from '../record-list';

const ContactPage = ({ getCity, headlines, links }) => {

    const city = getCity();

    return (       
        <div className="contact-page">
            <div className="contact-page__inner">
                <div className="contact-page__inner-inner">

                    <div className="contact-page__list contact-page__list--front">
                        <Headline headlines={ headlines } />
                        <RecordList links={ links } />
                    </div>
                    <div className="contact-page__list contact-page__list--back">
                        <Headline headlines={ headlines } />
                        <RecordList links={ links } />
                    </div>

                </div>

                <div className="contact-page__inner-inner contact-page__inner-inner--mirror">

                    <div className="contact-page__list contact-page__list--mirror contact-page__list--front">
                        <Headline headlines={ headlines } />
                        <RecordList links={ links } />
                    </div>
                    <div className="contact-page__list contact-page__list--mirror contact-page__list--back">
                        <Headline headlines={ headlines } />
                        <RecordList links={ links } />
                    </div>

                </div>
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