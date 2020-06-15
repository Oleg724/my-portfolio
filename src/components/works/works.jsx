import React, { Fragment, useState, useEffect, useCallback } from 'react';
import './works.css';

import PropTypes from 'prop-types';
import Row from '../row';
import Image from '../image';
import WorkInfo from '../work-info';
import TooltipImageHover from '../tooltip-image-hover';
import ModalWindow from '../modal-window';
import WorkItemDetails from '../works-item-details';
import ModalItem from '../modal-item';

import { withMobileChecking } from '../hocs';

const Works = ({ 
    selectedWorkId, 
    showModal, 
    onWindowOpen, 
    onWindowClose, 
    getWorks,
    getWorksDetails, 
    subPage, 
    itemsOnPage,
    tooltips,
    mobileUserDevice, 
}) => {

    const [worksOnPage, setWorksOnPage] = useState([]);
    const [showTooltipImageHover, setShowTooltipImageHover] = useState(false);
    const [hoveredItemId, setHoveredItemId] = useState('');

    const onShowTooltipImageHover = useCallback((id) => {
        if (!mobileUserDevice) {
            setHoveredItemId(id);
            setShowTooltipImageHover(true);
        }
    }, [mobileUserDevice, setHoveredItemId, setShowTooltipImageHover]);

    const onCloseTooltipImageHover = useCallback(() => {
        !mobileUserDevice && setShowTooltipImageHover(false);
    }, [mobileUserDevice, setShowTooltipImageHover]);

    const onWindowAndTooltipClose = useCallback(() => {
        onWindowClose();
        onCloseTooltipImageHover();
    }, [onWindowClose, onCloseTooltipImageHover]);

    const getWorksList = useCallback((works) => {      
        const newWorks = [...works];
        const startIdx = subPage * itemsOnPage; 
        const endIdx = startIdx + itemsOnPage;

        const worksList = newWorks.slice(startIdx, endIdx).map( (work, number) => {
            const { id, image, details, ...workDataToShow } = work;
            const { details: tooltipDetails } = tooltips;
    
            const imageWrapperProps = {
                className: 'image-wrapper',
                onMouseEnter: () => onShowTooltipImageHover(id),
                onMouseLeave: () => onCloseTooltipImageHover(id), 
                onClick: () => onWindowOpen(id),
            };

            const imageProps = {
                image: image,
                alt: workDataToShow.title,
                clazz: 'image--sm',
            };

            const imageMirrorProps = {
                image: image,
                alt: workDataToShow.title,
                clazz: 'image--sm image--mirror',
            };

            const tooltipImageHoverElWithWrapper = (
                showTooltipImageHover && hoveredItemId === id && !mobileUserDevice
                    && ( 
                    <div className="tooltip-image-hover-wrapper">
                        <TooltipImageHover tooltip={ tooltipDetails } />
                    </div>));

            const rowLeft = (
                <div { ...imageWrapperProps } >
                    <Image { ...imageProps } />
                    { tooltipImageHoverElWithWrapper }                 
                </div>
            );

            const rowLeftBottom = (
                <div className={ 'image-wrapper image-wrapper--mirror' } >
                    <Image { ...imageMirrorProps } />
                    { tooltipImageHoverElWithWrapper } 
                </div>
            );

            const workInfoProps = {
                id: id,
                workDataToShow: workDataToShow,
            };

            const rowRight = (
                showTooltipImageHover && hoveredItemId === id && !mobileUserDevice
                    && <WorkInfo { ...workInfoProps } />); 

            return (
                <div className="row-wrapper" key={ id }>            
                    <Row left={ rowLeft }
                        leftBottom={ rowLeftBottom }
                        clazzLeftBottom={ 'col-md-6--mirror' }
                        right={ rowRight } />             
                </div>
            );
        }); 

        return worksList;
    }, [
        hoveredItemId, 
        itemsOnPage, 
        mobileUserDevice, 
        onCloseTooltipImageHover, 
        onShowTooltipImageHover,
        onWindowOpen,
        showTooltipImageHover,
        subPage,
        tooltips,
    ]);          

    const getSelectedWork = useCallback((itemDetails) => {        
        const newItemDetails = [ ...itemDetails ];
        const selectedWork = newItemDetails.find(work => work.id === selectedWorkId);
        return selectedWork;
    }, [selectedWorkId]);

    const getModalItemProps = useCallback((selectedWork) => {
        const { image, id, ...otherDetails } = selectedWork;
        const { title } = otherDetails;

        const details = <WorkItemDetails getWorksDetails={ getWorksDetails } selectedWorkId={ selectedWorkId } />; 

        const modalItemProps = {
            image: image, 
            alt: title,
            clazz: 'modal-item__image', 
            text: details,
        }; 
        return modalItemProps;
    }, [getWorksDetails, selectedWorkId]);

    const setModalWindowOnPage = useCallback((modalItemProps) => {
        const modalWindow = (
            <ModalWindow openCloseFunction={ onWindowAndTooltipClose } >
                <ModalItem { ...modalItemProps } />
            </ModalWindow>
        );
        return modalWindow;
    }, [onWindowAndTooltipClose]);
        
    useEffect(() => { 
        if (showModal && selectedWorkId) {
            const itemDetails = getWorksDetails();
            const selectedWork = getSelectedWork(itemDetails);
            const modalItemProps = getModalItemProps(selectedWork);
            const modalWindow = setModalWindowOnPage(modalItemProps);
            setWorksOnPage(modalWindow);
        }
        else {
            const works = getWorks();
            const worksList = getWorksList(works);
            setWorksOnPage(worksList);
        }     
    }, [
        showModal,
        subPage,  
        hoveredItemId, 
        showTooltipImageHover,
        itemsOnPage,
        tooltips,
        onWindowOpen, 
        onWindowClose,
        getModalItemProps,
        getSelectedWork,
        getWorks,
        getWorksDetails,
        getWorksList,
        selectedWorkId,
        setModalWindowOnPage,
    ]);

    return (
        <Fragment>
            { worksOnPage }
        </Fragment>
    );
};

Works.propTypes = {
    selectedWorkId: PropTypes.string.isRequired,
    showModal: PropTypes.bool.isRequired,
    onWindowOpen: PropTypes.func.isRequired,
    onWindowClose: PropTypes.func.isRequired,
    getWorks: PropTypes.func.isRequired,
    getWorksDetails: PropTypes.func.isRequired,
    subPage: PropTypes.number.isRequired,
    itemsOnPage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    tooltips: PropTypes.object.isRequired,
    mobileUserDevice: PropTypes.bool.isRequired,
};

export default withMobileChecking(Works);