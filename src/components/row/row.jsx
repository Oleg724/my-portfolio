import React from 'react';
import './row.css';

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

export default Row;