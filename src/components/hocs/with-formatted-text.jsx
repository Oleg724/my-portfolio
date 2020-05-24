import React, { Fragment } from 'react';

const withFormattedText = (title, text) => (Wrapped) => {

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
            const link = <a { ...linkProps } >{ text }</a>;
            result = link;
    }
    else if (title === 'used technologies' 
        || title === 'використані технології' 
        || title === 'использованные технологии') {
            const formattedText = text.map( (technology, idx, arr) => {
                return (
                    <Fragment> 
                        { technology }{ idx !== arr.length - 1 && ',' } 
                    </Fragment>
                )
            });
            result = formattedText;
    }
    else {
        result = text;
    };

    return (
        <Wrapped title={ title } text={ result } />
    );
};

export default withFormattedText;