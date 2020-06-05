import React from 'react';
import './grid.css';

import PropTypes from 'prop-types';

const Grid = ({ info, image, list }) => {

    return (
        <div className='tab'>   
            <div className='tab__item'>
                { info }
            </div>

            <div className='tab__item'>
                { image }
            </div> 

            <div className='tab__item'>
                { list }
            </div>          
        </div>
    );
};

// Grid.propTypes = {
//     left: PropTypes.node.isRequired,
//     right: PropTypes.node.isRequired,
//     clazzRow: PropTypes.string,
//     clazzLeft: PropTypes.string,
//     clazzRight: PropTypes.string,
// };

export default Grid;