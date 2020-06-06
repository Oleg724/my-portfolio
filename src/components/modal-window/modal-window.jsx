import React, { Fragment } from 'react';
import './modal-window.css';
import PropTypes from 'prop-types';
import CloseButton from '../close-button';

const ModalWindow = ({ 
    openCloseFunction,
    children 
}) => {

    const closeButtonProps = {
        closeFunction: openCloseFunction,
    };

    return (
        <Fragment>
            <div className="close-button-wrapper">
                <CloseButton { ...closeButtonProps } />
            </div>           
            { children }
        </Fragment>
    );
};  

ModalWindow.propTypes = {
    openCloseFunction: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};  

export default ModalWindow;