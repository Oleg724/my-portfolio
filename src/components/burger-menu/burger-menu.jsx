import React from 'react';
import './burger-menu.css';

import PropTypes from 'prop-types';

const BurgerMenu = ({ onChangeShowMenu, burgerOpenClazz = '' }) => {

    return(
        <div className={`header__burger burger-menu${ burgerOpenClazz }`} onClick={ onChangeShowMenu }>
            <span></span>
        </div>
    )
};

BurgerMenu.propTypes = {
    onShowMenu: PropTypes.func.isRequired,
};

export default BurgerMenu;