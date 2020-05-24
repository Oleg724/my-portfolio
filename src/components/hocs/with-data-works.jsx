import React from 'react';

import Row from '../row';
import Image from '../image';
import WorkInfo from '../work-info';
import DataService from '../../data-service/data-service';

const WithDataWorks = (Wrapped) => {

    const { getWorks } = new DataService();

    const works = getWorks().map( work => {
        const newWork = {...work};
        const { image, ...workWithoutImg } = newWork;   
        
        const imageProps = {
            image: image,
            clazz: 'image--sm',
        };

        return (
            <div className="row-wrapper">            
                <Row left={ <Image { ...imageProps } /> }
                    right={ <WorkInfo workWithoutImg={ workWithoutImg } /> } />             
            </div>
        )
    });

    return () => {
        return (
            <Wrapped works={ works } />
        );
    };
};

export default WithDataWorks;