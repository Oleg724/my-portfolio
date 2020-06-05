import React from 'react';
import './header-list.css';

import PropTypes from 'prop-types';

const HeaderList = ({ header, displayClazz = '', children }) => {

    return (
        <ul className={`header__list ${ displayClazz }`}>           
            { children }    
        </ul>
    );
};

HeaderList.propTypes = {
    children: PropTypes.node.isRequired,
    displayClazz: PropTypes.string,
};

export default HeaderList;