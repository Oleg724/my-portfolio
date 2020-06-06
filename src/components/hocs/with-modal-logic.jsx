import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ModalWindow from '../modal-window';
import Record from '../record';

import { withFormattedText } from '../hocs';

const withModalLogic = () => (Wrapped) => {
    
    

    return (props) => {

        const [worksOnPage, setWorksOnPage] = useState([]);

        const { 
            showModal, 
            selectedWorkId, 
            getWorksDetails,
            onWindowClose } = this.props;
        
        if (showModal && selectedWorkId) {
            const itemDetails = getWorksDetails();
            const newItemDetails = [ ...itemDetails ];

            const selectedWork = newItemDetails.find(work => work.id === selectedWorkId);

            const { image, id, ...otherDetails } = selectedWork;

            const details = Object.entries(otherDetails).map(([title, text], idx) => {
                const idForKey = title + id + idx; 
                return (
                    <div className="record-wrapper" key={ idForKey } >
                        { withFormattedText(title, text, idForKey)(Record) }
                    </div>
                )
            });

            const { title } = otherDetails;

            const modalWindowProps = {
                onWindowClose: onWindowClose,
                onCloseTooltipImageHover: () => onCloseTooltipImageHover(),
                image: image,
                details: details,
                title: title,
            };

            const modalWindow = <ModalWindow { ...modalWindowProps } />;

            setWorksOnPage(modalWindow);                         
        }
        else {
            setWorksOnPage(worksList);
        }

        return (
            <Wrapped { ...props } { ...wrappedProps } >
                { worksOnPage }
            </Wrapped>
        );
    };
};

// withModalLogic.propTypes = {
//     getArray: PropTypes.func.isRequired,
// };

export default withModalLogic;