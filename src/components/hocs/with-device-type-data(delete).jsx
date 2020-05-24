import React from 'react';

const WithDeviceTypeData = (Wrapped) => {

    return (props) => {
        
        return <Wrapped {...props} />
    };
};

// export default WithDeviceTypeData;