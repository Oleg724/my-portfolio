import React, { Fragment, useState, useEffect } from 'react';
import './works.css';

import PropTypes from 'prop-types';
import Row from '../row';
import Image from '../image';
import WorkInfo from '../work-info';
import TooltipImageHover from '../tooltip-image-hover';
import ModalWindow from '../modal-window';
import WorkItemDetails from '../works-item-details';
import ModalItem from '../modal-item';

const Works = ({ 
    selectedWorkId, 
    showModal, 
    onWindowOpen, 
    onWindowClose, 
    getWorks,
    getWorksDetails, 
    subPage, 
    itemsOnPage,
    tooltips }) => {

    const [worksOnPage, setWorksOnPage] = useState([]);
    const [showTooltipImageHover, setShowTooltipImageHover] = useState(false);
    const [hoveredItemId, setHoveredItemId] = useState('');

    const works = getWorks();
    const newWorks = [...works];

    const onShowTooltipImageHover = (id) => {
        setHoveredItemId(id);
        setShowTooltipImageHover(true);
    };

    const onCloseTooltipImageHover = () => {
        setShowTooltipImageHover(false);
    };

    const onWindowAndTooltipClose = () => {
        onWindowClose();
        onCloseTooltipImageHover();
    };
        
    useEffect(() => { 
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

            const rowLeft = (
                <div { ...imageWrapperProps } >
                    <Image { ...imageProps } />

                    {showTooltipImageHover && hoveredItemId === id
                        && (
                            <div className="tooltip-image-hover-wrapper">
                                <TooltipImageHover tooltip={ tooltipDetails } />
                            </div>)}
                </div>
            );

            const workInfoProps = {
                id: id,
                workDataToShow: workDataToShow,
            };

            const rowRight = (
                showTooltipImageHover && hoveredItemId === id
                    && <WorkInfo { ...workInfoProps } />);

            return (
                <div className="row-wrapper" key={ id }>            
                    <Row left={ rowLeft }
                        right={ rowRight } />             
                </div>
            )
        });

        if (showModal && selectedWorkId) {

            const details = <WorkItemDetails getWorksDetails={ getWorksDetails } selectedWorkId={ selectedWorkId } />;    

            const itemDetails = getWorksDetails();
            const newItemDetails = [ ...itemDetails ];

            const selectedWork = newItemDetails.find(work => work.id === selectedWorkId);

            const { image, id, ...otherDetails } = selectedWork;

            const { title } = otherDetails;

            const workItemProps = {
                image: image, 
                alt: title,
                clazz: 'modal-item__image', 
                text: details,
            };

            const modalWindow = (
                <ModalWindow openCloseFunction={ onWindowAndTooltipClose } >
                    <ModalItem { ...workItemProps } />
                </ModalWindow>
            );

            setWorksOnPage(modalWindow);                         
        }
        else {
            setWorksOnPage(worksList);
        }

    }, [
        showModal, 
        subPage, 
        selectedWorkId, 
        getWorksDetails, 
        hoveredItemId, 
        showTooltipImageHover,
        itemsOnPage,
        tooltips,
        onWindowOpen, 
        onWindowClose,
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
    itemsOnPage: PropTypes.number.isRequired,
    tooltips: PropTypes.object.isRequired,
};

export default Works;