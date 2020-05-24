import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const Button = ({ button }) => {

    return (
        <button className="button">
            <Link to="/portfolio">
                { button }
            </Link>
        </button>
    );
};

export default Button;