import { Component } from 'react';
import surfPromo from '../assets/surf_promo.png';
import cbdPromo from '../assets/cbd_promo.png';
import portfolioPromo from '../assets/portfolio_promo.png';
import bhromaonPromo from '../assets/bhromaon_promo.jpg';
import monticelloPromo from '../assets/monticello_promo.png';

export default class DataServiceRu extends Component {

    _data = [
        {
            aboutMe: [

                `имя, фамилия: Олег Губатюк
                возраст: 35 лет
                образование: экономист
                место проживания: г. Черновцы
                цель: работа Junior React Front-End разработчиком              
                главная цель: стать экспертом в области Front-End разработки и Back-End разработки`,

                `- html, scss/css,
                - javascript,
                - react, jquery,
                - gulp, git,
                - photoshop, figma          
                языки: украинский, русский, английский
                применение на практике в описании проектов (раздел "портфолио")`,

                `2001-2006: экономический факультет, специальность: международная экономика, ЧНУ.
                В марте 2020 закончил курс Junior Front-End разработчика.
                Самостоятельно прошел онлайн-курс (React + Redux).
                Продолжаю изучение Advanced Javascript и React.
                В планах начать изучение node.js`,

                `2006-2009: главный специалист, и.о.директора отделения Swedbank (г.Черновцы)(банковские услуги для физических лиц).
                2010-2019: руководитель склада, главный экономист Фиделис Евразия (г.Нижний Новгород, г.Москва) 
                (оптовая торговля ювелирными изделиями).`,
                        
                `В разделе "портфолио" размещены проекты и их описание. 
                Для детализации нажмите на скриншот проекта.
                Часть проектов размещены на хостинге firebase.`,

                `Стараюсь регулярно играть в футбол, редко, но с удовольствием играю в настольный теннис.
                При возможности играю на гитаре. Также в качестве развлечения изучаю музыкальный продакшн`,
                
            ],
            technicalSkills: ['css', 'html', 'javascript', 'react', 'jquery', 'gulp', 'git']
        },
        {   
            works: [
                {   
                    id: '01',
                    title: 'go surf',
                    type: 'react шаблон веб сайта',
                    image: surfPromo,
                    description: 'проект сделан с помощью технологии React',
                    usedTechnologies: ['react', 'jsx', 'html', 'css', 'javascript'],
                    link: 'https://go-surf-e2c98.web.app/',
                    github: 'https://github.com/Oleg724/go-surf',
                    details: `первый проект сделанный с помощью библиотеки React в качестве тренировки.
                    Для  реализации слайдера и плавного скролла были использованы дополнительные пакеты
                    react-slider, react-scroll. Для анимации - react-animated-css и wowjs.
                    При загрузке приложения определяется местоположение, отображаются название населенного пункта и 
                    фактические координаты.
                    При выборе точки на карте мира автоматически изменяется выбранный вариант на всех страницах (кроме первой).
                    Для данного типа макета инструмент React - не самое лучше решение`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'сделана',                    
                },
                {
                    id: '02',
                    title: 'cbd',
                    type: 'html шаблон сайта',
                    image: cbdPromo,
                    description: `проект сделан при помощи таск-менеджера gulp`,
                    usedTechnologies: ['html', 'scss', 'javascript', 'jquery', 'gulp'],
                    link: 'https://cdb-project-bcaaa.web.app/',
                    github: 'https://github.com/Oleg724/cdb',
                    details: `проект сделан при помощи таск-менеджера gulp. в скрипте помимо "чистого" js используется jquery 
                    для настройки слайдера (плагин "slick slider"). Особенностью проекта являются реализация окон авторизации,
                    корзины товаров, возможность добавления, удаления и изменения количества товаров.`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'сделана', 
                },
                {
                    id: '03',
                    title: 'portfolio',
                    type: 'react шаблон веб сайта',
                    image: portfolioPromo,
                    description: ``,
                    usedTechnologies: ['react', 'jsx', 'html', 'css', 'js'],
                    link: 'https://portfolio-96256.web.app/',
                    github: 'https://github.com/Oleg724/my-portfolio',
                    details: `использован пакет @dogstudio/highway для анимации переходов на страницы`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'сделана', 
                },        
                {   
                    id: '04',
                    title: 'monticello',
                    type: 'html шаблон сайта',
                    image: monticelloPromo,
                    description: 'проект сделан при помощи сборщика prepros',
                    usedTechnologies: ['html', 'css/scss', 'prepros', 'js', 'jquery'],
                    link: 'https://monticello-4661f.web.app/',
                    github: 'https://github.com/Oleg724/monticello',
                    details: `html шаблон. проект сделан при помощи сборщика prepros. 
                    использованы плагины slick-slider (реализовано 2 слайдера), 
                    библиотека animate.css (cdn). 
                    подключен Google Maps API сервис. 
                    соблюдена методология БЭМ.
                    в scss использованы миксины.
                    `,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'сделана',
                },                       
                {
                    id: '05',
                    title: 'travel more',
                    type: 'html шаблон сайта',
                    image: bhromaonPromo,
                    description: `проект сделан при помощи сборщика prepros`,
                    usedTechnologies: ['html', 'css/scss', 'prepros'],
                    link: 'https://travel-more-b800c.web.app/',
                    github: 'https://github.com/Oleg724/travel-more',
                    details: `простой html шаблон. проект сделан при помощи сборщика prepros.
                    соблюдена методология БЭМ.
                    в scss использованы миксины.`,
                    'browsers-tested': `Chrome, Opera, Firefox, Microsoft Edge`,
                    adaptivity: 'сделана', 
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
            city: 'Черновцы',
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
        return data[0].aboutMe
    };

    _transformSkills = (data) => {
        return data[0].technicalSkills;
    };

    _transformProjectData = (data) => {
        return data[1].works.map(item => ({
            'id': item.id, 
            'image': item.image,                      
            'название': item.title, 
            'тип': item.type,  
            'использованные технологии': item.usedTechnologies,          
            'github': item.github,
            'ссылка': item.link,  
        }));
    };

    _transformProjectDataDetails = (data) => {
        return data[1].works.map(item => ({
            'название': item.title,          
            'id': item.id,
            'ссылка': item.link,
            'github': item.github,
            'тип': item.type, 
            'image': item.image,          
            'использованные технологии': item.usedTechnologies,
            'протестированные браузеры': item['browsers-tested'],
            'адаптивность': item.adaptivity,
            'детализация': item.details,      
        }));
    };

    _transformContactsData = (data) => {
        const contacts = data[2].contacts;

        return {
            'моб.тел.': contacts.telephone,
            'whats app': contacts.whatsApp,
            'viber': contacts.viber,
            'telegram': contacts.telegram,
            'эл.почта': contacts.email,
        };
    };
};