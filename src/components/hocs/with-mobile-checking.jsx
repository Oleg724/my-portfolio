import React, { Fragment } from 'react';

const withMobileChecking = (Wrapped) => {
        
    const mobileUserDevice = (
        /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent)
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