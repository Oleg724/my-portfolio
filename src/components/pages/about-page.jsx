import React, { Fragment, useState } from 'react';
import './index.css';

import PropTypes from 'prop-types';
import { withArrowsFunctions } from '../hocs';
import DataService from '../../data-service/data-service'
import Grid from '../grid';
import Image from '../image';
import ItemInfo from '../item-info';
import ItemList from '../item-list';
import ModalWindow from '../modal-window';
import ModalItem from '../modal-item';

const AboutPage = ({ 
    getAbout, 
    getSkills, 
    headlines,
    tooltips, 
    subPage, 
    prevSubPage, 
    nextSubPage, 
    showArrowLeft, 
    showArrowRight,
    myPhoto }) => {

    const [showModal, setShowModal] = useState(false);

    const onShowCloseModal = () => {
        setShowModal((prevState) => !prevState);
    };

    const about = getAbout();
    const skills = getSkills();

    const textAbout = about[subPage];

    const itemInfoProps = {
        textAbout: textAbout, 
        headlines: headlines.aboutMe[subPage], 
        nextSubPage: nextSubPage,
        prevSubPage: prevSubPage,
        showArrowLeft: showArrowLeft,
        showArrowRight: showArrowRight,
        tooltips: tooltips,
    };

    const alt = myPhoto.split('/').pop();

    const imageProps = {
        image: myPhoto,
        clazz: 'image--md',
        alt: alt,
    };

    const { mySkills } = headlines;

    const image = <Image { ...imageProps } />;
    const info = <ItemInfo { ...itemInfoProps }/>;
    const list = <ItemList skills={ skills } headlines={ mySkills } />;   

    const gridProps = {
        info: info, 
        image: image,
        list: list,
        onShowCloseModal: onShowCloseModal,
    };

    const modalWindowProps = {
        openCloseFunction: onShowCloseModal
    };

    const modalItemImageProps = {
        image: myPhoto,
        alt: alt,
        clazz: 'modal-item__image--lg',
    };

    const modalWindow = showModal && (
        <ModalWindow { ...modalWindowProps } >
            <ModalItem { ...modalItemImageProps } />
        </ModalWindow>
    );

    return (
        <Fragment>
            <div className="about-page">
                <Grid { ...gridProps } />  
                { modalWindow }            
            </div>                  
        </Fragment>
    );
};

const { getAbout } = new DataService();

AboutPage.propTypes = {
    getAbout: PropTypes.func.isRequired,
    getSkills: PropTypes.func.isRequired, 
    headlines: PropTypes.object.isRequired,
    tooltips: PropTypes.object.isRequired, 
    subPage: PropTypes.number.isRequired, 
    prevSubPage: PropTypes.func.isRequired, 
    nextSubPage: PropTypes.func.isRequired, 
    showArrowLeft: PropTypes.bool.isRequired, 
    showArrowRight: PropTypes.bool.isRequired,
    myPhoto: PropTypes.string.isRequired,
};

export default withArrowsFunctions(getAbout)(AboutPage);