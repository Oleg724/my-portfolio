import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { withArrowsFunctions } from '../hocs';
import ArrowLeft from '../arrow-left';
import ArrowRight from '../arrow-right';
import Works from '../works';
import Numbers from '../numbers';
import DataService from '../../data-service/data-service';

const PortfolioPage = ({ 
    getWorks,
    getWorksDetails,
    itemsOnPage, 
    subPage, 
    prevSubPage, 
    nextSubPage, 
    showArrowLeft, 
    showArrowRight,
    tooltips }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedWorkId, setSelectedWorkId] = useState('');
    const [clazzDisplayNone, setClazzDisplayNone] = useState('');

    const onWindowOpen = (id) => {
        setSelectedWorkId(id);
        setShowModal((prevState) => !prevState);
        setClazzDisplayNone('display-none');
    };

    const onWindowClose = () => {
        setShowModal((prevState) => !prevState);
        setClazzDisplayNone('');
    };

    const arrowLeftWrapperProps = {
        className: `works-page__inner works-page__inner-position-left ${ clazzDisplayNone }`,
        onClick: () => prevSubPage(),
    };

    const arrowRightWrapperProps = {
        className: `works-page__inner works-page__inner-position-right ${ clazzDisplayNone }`,
        onClick: () => nextSubPage(),
    };

    const arrowLeft = showArrowLeft && (
        <div { ...arrowLeftWrapperProps } >
            <ArrowLeft clazz={ clazzDisplayNone } />
        </div> 
    );

    const arrowRight = showArrowRight && (
        <div { ...arrowRightWrapperProps } >
            <ArrowRight clazz={ clazzDisplayNone } />
        </div>
    );

    const numbers = !showModal && (
        <div className="number-wrapper">
            <Numbers subPage={ subPage } /> 
        </div>
    );

    const worksProps = {
        getWorks: getWorks,
        getWorksDetails: getWorksDetails, 
        onWindowOpen: onWindowOpen,
        onWindowClose: onWindowClose,
        showModal: showModal, 
        subPage: subPage,
        itemsOnPage: itemsOnPage,
        selectedWorkId: selectedWorkId,
        tooltips: tooltips,
    };

    return (
        <div className="works-page">
            <div className="works-wrapper">
                 
                <Works { ...worksProps } />
                
                { arrowLeft }
                { arrowRight } 
                
                { numbers }              
            </div>
        </div>
    );
};

const { getWorks } = new DataService();

PortfolioPage.propTypes = {
    getWorks: PropTypes.func.isRequired,
    getWorksDetails: PropTypes.func.isRequired,
    itemsOnPage: PropTypes.number.isRequired, 
    subPage: PropTypes.number.isRequired, 
    prevSubPage: PropTypes.func.isRequired, 
    nextSubPage: PropTypes.func.isRequired, 
    showArrowLeft: PropTypes.bool.isRequired, 
    showArrowRight: PropTypes.bool.isRequired,
    tooltips: PropTypes.object.isRequired,
};

export default withArrowsFunctions(getWorks)(PortfolioPage);