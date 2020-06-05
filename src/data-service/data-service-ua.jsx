import { Component } from 'react';
import surfPromo from '../assets/surf_promo.png';
import cbdPromo from '../assets/cbd_promo.png';
import portfolioPromo from '../assets/portfolio_promo.png';
import bhromaonPromo from '../assets/bhromaon_promo.jpg';
import monticelloPromo from '../assets/monticello_promo.png';

export default class DataServiceUa extends Component {

    _data = [
        {
            aboutMe: [

                `ім'я, прізвище: Олег Губатюк
                вік: 35 років
                освіта: економіст
                місце проживання: м Чернівці
                мета: робота Junior React Front-End розробником             
                головна мета: стати експертом в області Front-End розробки і Back-End розробки`,

                `- html, scss/css,
                - javascript,
                - react, jquery,
                - gulp, git,
                - photoshop, figma          
                мови: українска, російська, англійська         
                застосування на практиці в описі проектів (розділ "портфоліо")`,

                `2001-2006: економічний факультет, спеціальність: міжнародна економіка, ЧНУ.
                У березні 2020 закінчив курс Junior Front-End розробника.
                Самостійно пройшов онлайн-курс (React + Redux).
                Продовжую вивчення Advanced Javascript і React.
                У планах почати вивчення node.js`,

                `2006-2009: головний спеціаліст, в.о. директора відділення Swedbank (м.Чернівці) (банківські послуги для фізичних осіб).
                2010-2019: керівник складу, головний економіст Фіделіс Євразія (м.Нижній Новгород, м.Москва) (оптова торгівля
                ювелірними виробами)`,

                `мови: українська, російська, англійська`,

                `У розділі "портфоліо" розміщені проекти та їх опис.
                для деталізації натисніть на скріншот проекту.
                Частина проектів розміщені на хостингу firebase`,

                `Намагаюся регулярно грати в футбол, рідко, але із задоволенням граю в настільний теніс. 
                При можливості граю на гітарі. Також в якості розваги вивчаю музичний продакшн.`

            ],
            technicalSkills: ['css', 'html', 'javascript', 'react', 'jquery', 'gulp', 'git']
        },
        {   
            works: [
                {   
                    id: '01',
                    title: 'go surf',
                    type: 'react шаблон веб сайту',
                    image: surfPromo,
                    description: 'проект зроблений за допомогою технології React',
                    usedTechnologies: ['react', 'jsx', 'html', 'css', 'js'],
                    link: 'https://go-surf-e2c98.web.app/',
                    github: 'https://github.com/Oleg724/go-surf',
                    details: `перший проект зроблений за допомогою бібліотеки React в якості тренування. 
                    Для реалізації слайдера і плавного скролла були використані додаткові пакети react-slider, 
                    react-scroll. Для анімації - react-animated-css і wowjs. При завантаженні програми визначається
                    місце розташування, відображаються назва населеного пункту і фактичні координати.
                    При виборі точки на карті світу автоматично змінюється обраний варіант на всіх сторінках (крім першої).
                    Для даного типу макета інструмент React - не найкраще рішення`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'зроблена',  
                },
                {
                    id: '02',
                    title: 'cbd',
                    type: 'html шаблон сайту',
                    image: cbdPromo,
                    description: `проект зроблений за допомогою такс-менеджеру gulp`,
                    usedTechnologies: ['html', 'css', 'js', 'gulp'],
                    link: 'https://cdb-project-bcaaa.web.app/',
                    github: 'https://github.com/Oleg724/cdb',
                    details: `проект зроблений за допомогою таск-менеджера gulp. в скрипті крім "чистого" js 
                    використовується jquery для настройки слайдера (плагін "slick slider"). Особливістю проекту 
                    є реалізація вікон авторизації, кошика товарів, можливість додавання, видалення і зміни кількості товарів`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'зроблена', 
                },
                {
                    id: '03',
                    title: 'portfolio',
                    type: 'react шаблон веб сайту',
                    image: portfolioPromo,
                    description: ``,
                    usedTechnologies: ['react', 'jsx', 'html', 'css', 'js'],
                    link: 'https://portfolio-96256.web.app/',
                    github: '',
                    details: `використаний пакет @ dogstudio / highway для анімації переходів на сторінки`,
                    'browsers-tested': ``,
                    adaptivity: 'зроблена', 
                },
                {   
                    id: '04',
                    title: 'monticello',
                    type: 'html шаблон сайту',
                    image: monticelloPromo,
                    description: 'проект зроблений за допомогою збирача prepros',
                    usedTechnologies: ['html', 'css/scss', 'prepros', 'js', 'jquery'],
                    link: 'https://monticello-4661f.web.app/',
                    github: 'https://github.com/Oleg724/monticello',
                    details: `html шаблон. проект зроблений за допомогою збирача prepros.
                    використані плагіни slick-slider (реалізовано 2 слайдера),
                    бібліотека animate.css (cdn).
                    підключений Google Maps API сервіс.
                    дотримана методологія БЕМ.
                    в scss використані міксини.`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'зроблена',
                },
                {
                    id: '05',
                    title: 'travel more',
                    type: 'html шаблон сайту',
                    image: bhromaonPromo,
                    description: `проект зроблений за допомогою збирача prepros`,
                    usedTechnologies: ['html', 'css/scss', 'prepros'],
                    link: 'https://travel-more-b800c.web.app/',
                    github: 'https://github.com/Oleg724/travel-more',
                    details: `простий html шаблон. проект зроблений за допомогою збирача prepros.
                    дотримана методологія БЕМ.
                    в scss використані міксини.`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'зроблена', 
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
            city: 'Чернівці',
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
            'назва': item.title,
            'тип': item.type, 
            'використані технології': item.usedTechnologies,
            'github': item.github,
            'посилання': item.link,
        }));
    };

    _transformProjectDataDetails = (data) => {
        return data[1].works.map(item => ({
            'назва': item.title,          
            'id': item.id,
            'посилання': item.link,
            'github': item.github,
            'тип': item.type, 
            'image': item.image,          
            'використані технології': item.usedTechnologies,
            'протестестовані браузери': item['browsers-tested'],
            'адаптивність': item.adaptivity, 
            'деталізація': item.details,      
        }));
    };

    _transformContactsData = (data) => {
        const contacts = data[2].contacts;

        return {
            'моб.тел.': contacts.telephone,
            'whats app': contacts.whatsApp,
            'viber': contacts.viber,
            'telegram': contacts.telegram,
            'ел.пошта': contacts.email,
        };
    };
};