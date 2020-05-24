import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

const Header = ({ header }) => {

    const items = Object.entries(header).map( ([ key, value ]) => {
        return (
            <Link to={ value } key={ key } >
                <li className="header__item">
                    { key }
                </li>
            </Link>
        )
    });

    return (
        <ul className="header">           
            { items }     
        </ul>
    );
};

export default Header;