import React, { Fragment, useState, useEffect } from 'react';
import './works.css';

import Row from '../row';
import Image from '../image';
import WorkInfo from '../work-info';
import TooltipImageHover from '../tooltip-image-hover';
import Record from '../record';
import WorkDetailsCard from '../work-details-card';

import { withFormattedText } from '../hocs';

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
        
    useEffect(() => { 
        const startIdx = subPage * itemsOnPage; 
        const endIdx = startIdx + itemsOnPage;

        const worksList = newWorks.slice(startIdx, endIdx).map( (work, number) => {
            const { id, image, details, ...workDataToShow } = work;
    
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
                                <TooltipImageHover tooltip={ tooltips.details } />
                            </div>)}
                </div>
            );

            const rowRight = <WorkInfo workDataToShow={ workDataToShow } />;

            return (
                <div className="row-wrapper" key={ id }>            
                    <Row left={ rowLeft }
                        right={ rowRight } />             
                </div>
            )
        });

        if (showModal && selectedWorkId) {
            const itemDetails = getWorksDetails();
            const newItemDetails = [...itemDetails];

            const selectedWork = newItemDetails.find(work => work.id === selectedWorkId);

            const { image, id, ...otherDetails } = selectedWork;

            const details = Object.entries(otherDetails).map(([title, text]) => { 
                return withFormattedText(title, text)(Record);
            });

            const detailsCardProps = {
                onWindowClose: onWindowClose,
                image: image,
                details: details,
            };

            const detailsCard = <WorkDetailsCard { ...detailsCardProps } />;

            setWorksOnPage(detailsCard);                         
        }
        else {
            setWorksOnPage(worksList);
        }

    }, [showModal, subPage, selectedWorkId, getWorksDetails, getWorks, hoveredItemId, showTooltipImageHover]);

    return (
        <Fragment>
            { worksOnPage }
        </Fragment>
    );
};

export default Works;