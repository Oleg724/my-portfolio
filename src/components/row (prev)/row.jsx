import React from 'react';
import './row-prev.css';

import PropTypes from 'prop-types';

const Row = ({ left, right, clazzRow = '', clazzLeft = '', clazzRight = '' }) => {

    return (
        <div className={`row ${ clazzRow }`}>   
            <div className={`col-md-6 ${ clazzLeft }`}>
                { left }
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