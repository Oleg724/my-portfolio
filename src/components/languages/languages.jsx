import React from 'react';
import './languages.css';

import PropTypes from 'prop-types';

const Languages = ({ languages, onLanguageChange }) => {

    const langList = Object.entries(languages).map( ([ key, lang ]) => {

        const langItemProps = {
            className: 'languages__item',
            language: `${ lang }`,
            key: key,
            onClick: () => onLanguageChange(key),
        };

        return (
            <p { ...langItemProps } >{ lang }</p>
        );
    });

    return (
        <div className="languages">
            { langList }
        </div>
    );
};

Languages.propTypes = {
    languages: PropTypes.object.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
};

export default Languages;