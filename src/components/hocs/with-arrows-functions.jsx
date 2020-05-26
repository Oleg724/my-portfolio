import React, { useState } from 'react';

import PropTypes from 'prop-types';

const withArrowsFunctions = (getDataArr) => (Wrapped) => {

    const data = getDataArr();

    return (props) => {
        
        const { itemsOnPage = 1 } = props;
        
        const [ subPage, setSubPage ] = useState(0);
        const [ showArrowLeft, setShowArrowLeft ] = useState(false);
        const [ showArrowRight, setShowArrowRight ] = useState(true);

        const nextSubPage = () => {
            setSubPage((prevSubPage) => prevSubPage + 1);
            setShowArrowLeft(true);
            subPage === Math.ceil(data.length / itemsOnPage) - 2 && setShowArrowRight(false);
        };

        const prevSubPage = () => {
            setSubPage((prevSubPage) => prevSubPage - 1);
            setShowArrowRight(true);
            subPage === 1 && setShowArrowLeft(false);
        };    

        const wrappedProps = {
            prevSubPage: prevSubPage, 
            nextSubPage: nextSubPage, 
            showArrowLeft: showArrowLeft,
            showArrowRight: showArrowRight,
            subPage: subPage,
        };

        return <Wrapped { ...props } { ...wrappedProps } />;
    };
};

withArrowsFunctions.propTypes = {
    getArray: PropTypes.func.isRequired,
};

export default withArrowsFunctions;