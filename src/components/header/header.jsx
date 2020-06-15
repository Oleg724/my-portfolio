import React, { useState, useEffect } from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BurgerMenu from '../burger-menu';
import HeaderList from '../header-list';

const Header = ({ header }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [heightSM, setHeightSM] = useState({ height: '42px' });
    const [displayClazz, setDisplayClazz] = useState('');
    const [burgerOpenClazz, setBurgerOpenClazz] = useState('');
    

    const onChangeShowMenu = () => {
        setShowMenu(prev => !prev);
    };

    useEffect(() => {
        if (showMenu) {
            setHeightSM({ height: 'initial' });
            setDisplayClazz('header__list--opacity');
            setBurgerOpenClazz(' burger-menu--open');
        }
        else {
            const timer = setTimeout(() => {
                setHeightSM({ height: '42px' })
            }, 1000);                   
            setDisplayClazz('');
            setBurgerOpenClazz('');  
            return () => clearTimeout(timer);        
        };
        
    }, [showMenu]);

    const items = Object.entries(header).map( ([ key, value ], idx) => {
        return (         
            <li className="header__item" onClick={ () => onChangeShowMenu() } key={ key + idx } >
                <Link to={ value } key={ key } >
                    { key }
                </Link>
            </li>         
        );
    });

    const burgerMenuProps = {
        onChangeShowMenu: onChangeShowMenu,
        burgerOpenClazz: burgerOpenClazz,
    };

    const headerProps = {
        header: header,
        displayClazz: displayClazz,
    };

    return (
        <div className="header" style={ heightSM }>
            <BurgerMenu { ...burgerMenuProps } />     
            <HeaderList { ...headerProps } >
                { items }
            </HeaderList>     
        </div>
    );
};

Header.propTypes = {
    header: PropTypes.object.isRequired,
};

export default Header;