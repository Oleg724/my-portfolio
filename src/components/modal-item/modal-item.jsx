import React from 'react';
import './modal-item.css';

import PropTypes from 'prop-types';
import Image from '../image';

const ModalItem = ({ image, clazz, alt = '', text = null }) => {

    const imageProps = {
        image: image,
        clazz: clazz,
        alt: alt,
    };

    return (
        <div className="modal-item-wrapper">
            <div className="modal-item">
                <Image { ...imageProps } />
                <div className="modal-item__text">{ text }</div>
            </div>
        </div>
    );
};

ModalItem.propTypes = {
    image: PropTypes.string,
    clazz: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.object,
};

export default ModalItem;