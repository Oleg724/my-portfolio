import { Component } from 'react';

import surfPromo from '../assets/surf_promo.png';
import cbdPromo from '../assets/cbd_promo.png';
import portfolioPromo from '../assets/portfolio_promo.png';
import bhromaonPromo from '../assets/bhromaon_promo.jpg';
import monticelloPromo from '../assets/monticello_promo.png';

export default class DataService extends Component {

    _data = [
        {
            aboutMe: [
                `name, surname: Oleg Gubatyuk
                age: 35
                education: economist
                place of residence: Chernivtsi
                goal: Junior React Front-End Developer               
                main goal: to become an expert in Front-End development and Back-End development`,

                `- html, scss/css,
                - javascript,
                - react, jquery,
                - gulp, git,
                - photoshop, figma          
                languages: Ukrainian, Russian, English
    
                practical application in the description of projects (section "portfolio")`,

                `2001-2006: Faculty of Economics, specialty: international economics, ChNU.
                In March 2020, I completed the Junior Front-End Developer Course.
                Independently completed an online course (React + Redux).
                Continuing to study Advanced Javascript and React.
                Plans to start learning node.js`,

                `2006-2009: Chief Specialist, Acting Director of Swedbank Branch (Chernivtsi) (banking services for individuals).
                2010-2019: warehouse manager, chief economist Fidelis Eurasia (Nizhny Novgorod, Moscow) (wholesale jewelry)`,
                
                `The "portfolio" section contains projects and their descriptions.
                For details click on the screenshot of the project.
                Some projects are hosted on firebase hosting.`,

                `I try to play football regularly, rarely, but enjoy playing table tennis.
                If possible, I play the guitar. I also study music production as an entertainment.`
            ],
            technicalSkills: ['css', 'html', 'javascript', 'react', 'jquery', 'gulp', 'git']
        },
        {   
            works: [
                {   
                    id: '01',
                    title: 'go surf',
                    type: 'react website template',
                    image: surfPromo,
                    description: 'the project is made independently based on React technology using classes',
                    usedTechnologies: ['react', 'jsx', 'html', 'css', 'javascript'],
                    link: 'https://go-surf-e2c98.web.app/',
                    github: 'https://github.com/Oleg724/go-surf',
                    details: `the first project made using the React library as a workout.
                    To implement the slider and smooth scrolling, were used additional packages react-slider, react-scroll.
                    For animation - react-animated-css and wowjs.
                    When downloading the application, the location is determined, the name of the settlement 
                    and the actual coordinates are displayed.
                    When you select a point on the world map, the selected option automatically changes on 
                    all pages (except the first).
                    React is not the best solution for this type of layout.`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'done', 
                },
                {
                    id: '02',
                    title: 'cbd',
                    type: 'site template',
                    image: cbdPromo,
                    description: `the project was done with the help of the gulp task manager`,
                    usedTechnologies: ['html', 'css', 'javascript', 'gulp'],
                    link: 'https://cdb-project-bcaaa.web.app/',
                    github: 'https://github.com/Oleg724/cdb',
                    details: `The project was done with the help of the gulp task manager. in addition to "pure" js, 
                    the script uses jquery to configure the slider (plugin "slick slider"). A feature of the project 
                    is the implementation of authorization windows, basket of goods, the ability to add, delete 
                    and change the quantity of goods`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'done', 
                },
                {
                    id: '03',
                    title: 'portfolio',
                    type: 'react website template',
                    image: portfolioPromo,
                    description: ``,
                    usedTechnologies: ['react', 'jsx', 'html', 'css', 'js'],
                    link: 'https://portfolio-96256.web.app/',
                    github: '',
                    details: `@ dogstudio / highway package used to animate page transitions`,
                    'browsers-tested': ``,
                    adaptivity: 'done', 
                },
                {   
                    id: '04',
                    title: 'monticello',
                    type: 'html template',
                    image: monticelloPromo,
                    description: 'project made with prepros builder',
                    usedTechnologies: ['html', 'css/scss', 'prepros', 'js', 'jquery'],
                    link: 'https://monticello-4661f.web.app/',
                    github: 'https://github.com/Oleg724/monticello',
                    details: `html template. The project was made with the help of the prepros collector.
                    slick-slider plugins (2 slider implemented) and animate.css library (cdn) used.
                    Google Maps API service is connected.
                    The BEM methodology is followed.
                    scss uses mixins.`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'done',
                },
                {
                    id: '05',
                    title: 'travel more',
                    type: 'html template',
                    image: bhromaonPromo,
                    description: `project made with prepros builder`,
                    usedTechnologies: ['html', 'css/scss', 'prepros'],
                    link: 'https://travel-more-b800c.web.app/',
                    github: 'https://github.com/Oleg724/travel-more',
                    details: `simple html template. The project was made with the help of the prepros collector.
                    The BEM methodology is followed.
                    scss uses mixins.`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'done', 
                },
            ]
        },
        {
            contacts: {
                telephone: '+380661271422',
                whatsApp: '+380661271422',
                viber: '+380661271422',
                telegram: '+380661271422',
                email: '7241984@gmail.com',
            },
            city: 'Chernivtsi',
        }
    ];

    getAbout = () => {
        return this._transformAbout(this._data);
    };

    getSkills = () => {
        return this._transformSkills(this._data);
    };

    getWorks = () => {
        return this._transformProjectData(this._data);
    };

    getWorksDetails = () => {
        return this._transformProjectDataDetails(this._data);
    }

    getContacts = () => {
        return this._transformContactsData(this._data);
    };

    getCity = () => {
        return this._data[2].city;
    };

    _transformAbout = (data) => {
        return data[0].aboutMe;
    };

    _transformSkills = (data) => {
        return data[0].technicalSkills;
    };

    _transformProjectData = (data) => {
        return data[1].works.map(item => ({
            'id': item.id, 
            'image': item.image,                   
            'title': item.title,
            'type': item.type,    
            'used technologies': item.usedTechnologies,
            'github': item.github,
            'link': item.link,  
            'description': item.description,  
        }));
    };

    _transformProjectDataDetails = (data) => {
        return data[1].works.map(item => ({
            'title': item.title,          
            'id': item.id,
            'link': item.link,
            'github': item.github,
            'type': item.type, 
            'image': item.image,          
            'used technologies': item.usedTechnologies,
            'browsers-tested': item['browsers-tested'],
            'adaptivity': item.adaptivity,  
            'details': item.details,      
        }));
    };

    _transformContactsData = (data) => {
        const contacts = data[2].contacts;

        return {
            'mob.tel.': contacts.telephone,
            'whats app': contacts.whatsApp,
            'viber': contacts.viber,
            'telegram': contacts.telegram,
            'email': contacts.email,
        };
    };
};