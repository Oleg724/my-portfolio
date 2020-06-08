import React, { Fragment } from 'react';

const withMobileChecking = (Wrapped) => {
        
    const mobileUserDevice = (
        /Andriod|webOS|iPhone|iPad|iPod|Blackberry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
            ? true
            : false
    );

    return (props) => {       
        return (
            <Fragment>
                <Wrapped { ...props } mobileUserDevice={ mobileUserDevice }/>
            </Fragment>
        );
    };
};

export default withMobileChecking;