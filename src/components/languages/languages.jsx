import React from 'react';
import './languages.css';

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

export default Languages;