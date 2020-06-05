import React, { Fragment } from 'react';
import './index.css';

import PropTypes from 'prop-types';

import { withArrowsFunctions } from '../hocs';
import DataService from '../../data-service/data-service'
import Row from '../row';
import Grid from '../grid';
import Image from '../image';
import ItemInfo from '../item-info';
import ItemList from '../item-list';

import ArrowRight from '../arrow-right';
import ArrowLeft from '../arrow-left';

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

    const { mySkills } = headlines;

    const image = <Image { ...imageProps } />;
    const info = <ItemInfo { ...itemInfoProps }/>;
    const list = <ItemList skills={ skills } headlines={ mySkills } />;   

    return (
        <Fragment>
            <div className="about-page">
                <Grid info={ info } 
                    image={ image }
                    list={ list } />
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