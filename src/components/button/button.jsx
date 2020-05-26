import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ text }) => {

    return (
        <button className="button">
            <Link to="/portfolio">
                { text }
            </Link>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;