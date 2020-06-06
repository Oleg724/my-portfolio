import React from 'react';
import './grid.css';

import PropTypes from 'prop-types';

const Grid = ({ info, image, list, onShowCloseModal = '' }) => {

    return (
        <div className='tab'>   
            <div className='tab__item'>
                { info }
            </div>

            <div className='tab__item' onClick={ onShowCloseModal } >
                { image }
            </div> 

            <div className='tab__item'>
                { list }
            </div>          
        </div>
    );
};

Grid.propTypes = {
    info: PropTypes.node,
    image: PropTypes.node,
    list: PropTypes.node,
    onShowCloseModal: PropTypes.func,
};

export default Grid;