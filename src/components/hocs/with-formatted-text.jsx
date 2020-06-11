import React from 'react';

import PropTypes from 'prop-types';

const withFormattedText = (title, text, idForKey) => (Wrapped) => {

    let result;

    const linkProps = {
        className: 'record__link', 
        href: text, 
        target: '_blank',
        rel: 'noopener noreferrer',
    };

    if (title === 'link'
        || title === 'github' 
        || title === 'посилання' 
        || title === 'ссылка') {
            result = <a { ...linkProps } >{ text }</a>;
    }
    else if (title === 'used technologies' 
        || title === 'використані технології' 
        || title === 'использованные технологии') {
            const formattedText = text.map( (technology, idx, arr) => {
                return (
                    <span key={ technology } > 
                        { technology }{ idx !== arr.length - 1 && ', ' } 
                    </span>
                )
            });
            result = formattedText;
    }
    else {
        result = text;
    };

    const wrappedProps = {
        title: title,
        text: result,
        idForKey: idForKey,
    };

    return (
        <Wrapped { ...wrappedProps } />
    );
};

withFormattedText.propTypes = {
    title: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    idForKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default withFormattedText;