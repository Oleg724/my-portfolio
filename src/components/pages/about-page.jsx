import React, { Fragment } from 'react';
import './index.css';

import { withArrowsFunctions } from '../hocs';
import DataService from '../../data-service/data-service'
import Row from '../row';
import Image from '../image';
import ItemInfo from '../item-info';
import ItemList from '../item-list';

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

    const left = <Image { ...imageProps } />;
    const right = <ItemInfo { ...itemInfoProps }/>;

    const { mySkills } = headlines;

    return (
        <Fragment>
            <div className="about-page">
                <Row left={ left } 
                    right={ right } />
                <ItemList skills={ skills }
                    headlines={ mySkills } />
            </div>          
        </Fragment>
    );
};

const { getAbout } = new DataService();

export default withArrowsFunctions(getAbout)(AboutPage);