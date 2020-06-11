import React from 'react';
import './row.css';

import PropTypes from 'prop-types';

const Row = ({ left, leftBottom, right, clazzRow = '', clazzLeft = '', clazzLeftBottom = '', clazzRight = '' }) => {

    return (
        <div className={`row ${ clazzRow }`}>   
            <div className={`col-md-6 ${ clazzLeft }`}>
                { left }
            </div>

            <div className={`col-md-6 ${ clazzLeftBottom }`}>
                { leftBottom }
            </div>  

            <div className={`col-md-6 ${ clazzRight }`}>
                { right }
            </div>  
        </div>
    );
};

Row.propTypes = {
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
    clazzRow: PropTypes.string,
    clazzLeft: PropTypes.string,
    clazzRight: PropTypes.string,
};

export default Row;