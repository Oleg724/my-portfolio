import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { DataServiceProvider } from '../data-service-context';

import './app.css';

import myPhoto from '../../assets/images/my-photo.jpg';

import { HomePage, AboutPage, PortfolioPage, ContactPage } from '../pages';
import Header from '../header';
import { DataService, DataServiceUa, DataServiceRu } from '../../data-service';
import Languages from '../languages';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const english = {
  currentLanguage: 'english',
  hero: [
    <p key="hero1">Hello, I'm <span>Oleg Gubatyuk</span>.</p>,
    <p key="hero2">I'm a Front-end developer.</p>,
  ],
  links: {
    'mob.tel.': 'tel:',
    'whats app': 'whatsapp://send?phone=',
    'viber': 'viber://chat?number=',
    'telegram': 'https://telegram.me/Oleg724',
    'email': 'mailto:',
  },
  buttons: [
    'View my work',
  ],
  header: {
    'home': '/',
    'about': '/about',
    'portfolio': '/portfolio',
    'contacts': '/contacts',
  },
  pageSubTitles: {
    mySkills: 'my skills',
    projectTitle: 'project title',
    description: 'description',
    usedTechnologies: 'used technologies',
  },
  headlines: {
    myContacts: 'my contacts',
    aboutMe: ['about', 'skills', 'education', 'experience', 'projects', 'hobby'],
    mySkills: 'my skills',
  },
  languages: {
    eng: 'en', 
    ukr: 'укр', 
    rus: 'рус',
  },
  tooltips: {
    continue: 'click to continue',
    details: 'click for details'
  }
};

const ukrainian = {
  currentLanguage: 'ukrainian',
  hero: [
    <p key="hero1">Привіт, я <span>Олег Губатюк</span>.</p>,
    <p key="hero2">Я Front-end розробник.</p>,
  ],
  links: {
    'моб.тел.': 'tel:',
    'whats app': 'whatsapp://send?phone=',
    'viber': 'viber://chat?number=',
    'telegram': 'https://telegram.me/Oleg724',
    'ел.пошта': 'mailto:',
  },
  buttons: [
    'Мої роботи',
  ],
  header: {
    'головна': '/',
    'про мене': '/about',
    'портфоліо': '/portfolio',
    'контакти': '/contacts',
  },
  pageSubTitles: {
    mySkills: 'мої навички',
    projectTitle: 'назва проекту',
    description: 'опис',
    usedTechnologies: 'використані технології',
  },
  headlines: {
    myContacts: 'мої контакти',
    aboutMe: ['про мене', 'навички', 'освіта', 'досвід роботи', 'проекти', 'хобі'],
    mySkills: 'мої навички',
  },
  languages: {
    eng: 'en', 
    ukr: 'укр', 
    rus: 'рус',
  },
  tooltips: {
    continue: 'натисніть для продовження',
    details: 'натисніть для деталізації'
  }
};

const russian = {
  currentLanguage: 'russian',
  hero: [
    <p key="hero1">Привет, я <span>Олег Губатюк</span>.</p>,
    <p key="hero2">Я Front-end разработчик.</p>,
  ],
  links: {
    'моб.тел.': 'tel:',
    'whats app': 'whatsapp://send?phone=',
    'viber': 'viber://chat?number=',
    'telegram': 'https://telegram.me/Oleg724',
    'эл.почта': 'mailto:',
  },
  buttons: [
    'Мои работы',
  ],
  header: {
    'главная': '/',
    'обо мне': '/about',
    'портфолио': '/portfolio',
    'контакты': '/contacts',
  },
  pageSubTitles: {
    mySkills: 'мои навыки',
    projectTitle: 'название проекта',
    description: 'описание',
    usedTechnologies: 'использованные технологии',
  },
  headlines: {
    myContacts: 'мои контакты',
    aboutMe: ['обо мне', 'навыки', 'образование', 'опыт работы', 'проекты', 'хобби'],
    mySkills: 'мои навыки',
  },
  languages: {
    eng: 'en', 
    ukr: 'укр', 
    rus: 'рус',
  },
  tooltips: {
    continue: 'нажмите для подолжения',
    details: 'нажмите для детализации'
  }
};

const App = () => {

  const [ language, setLanguage ] = useState({ language: english, service: new DataService() });
  const [ itemsOnPage, setItemsOnPage ] = useState('');

  const onLanguageChange = (key) => {
    switch (key) {
      case 'eng' : 
        setLanguage({ language: english, service: new DataService() });
        break;     
      case 'ukr' : 
        setLanguage({ language: ukrainian, service: new DataServiceUa() });
        break;
      case 'rus' : 
        setLanguage({ language: russian, service: new DataServiceRu() });
        break;
      default : 
        setLanguage({ language: english, service: new DataService() });
    };
  };

  const {
    headlines,
    pageSubTitles,
    tooltips,
    header,
    languages,
    hero,
    buttons,
    links,
   } = language.language;

  const {
    getWorks,
    getWorksDetails,
    getAbout,
    getSkills,
  } = language.service;

  const homePageProps = {
    hero: hero,
    buttons: buttons,
  };

  const aboutPageProps = {
    headlines: headlines,
    pageSubTitles: pageSubTitles,
    getAbout: getAbout,
    getSkills: getSkills,
    tooltips: tooltips,
    myPhoto: myPhoto,
  };

  const portfolioPageProps = {
    pageSubTitles: pageSubTitles, 
    itemsOnPage: itemsOnPage,
    getWorks: getWorks,
    getWorksDetails: getWorksDetails,
    tooltips: tooltips,
  };

  const contactPageProps = {
    headlines: headlines.myContacts,
    links: links,
  };

  const languagesProps = {
    languages: languages,
    onLanguageChange: (lang) => onLanguageChange(lang),
  };

  useEffect(() => {
    window.addEventListener('resize', onItemsOnPageChange);
    onItemsOnPageChange();
    return () => window.removeEventListener('resize', onItemsOnPageChange);
  }, []);

  const onItemsOnPageChange = () => {
    const { clientWidth } = document.documentElement;
    const { clientHeight } = document.documentElement;

    const ratio = clientWidth/clientHeight;
    ratio <= (800 / 600) ? setItemsOnPage(1) : setItemsOnPage(2);
  };

  return (
    <DataServiceProvider value={ language.service } >
      <Router>
        <div className="app" >

          <div className="header-wrapper">
            <Header header={ header } />
          </div>

          <div className="languages-wrapper">
            <Languages { ...languagesProps } />
          </div>

          <Route render={({ location }) => (
            <TransitionGroup>

              <CSSTransition classNames="fade"
                key={ location.key }
                timeout={1000} >

                <Switch location={ location }>

                  <Route path="/" exact 
                    render={()=> ( <HomePage { ...homePageProps } /> )} />

                  <Route path="/about"
                    render={()=> ( <AboutPage { ...aboutPageProps } /> )} />

                  <Route path="/portfolio"
                    render={()=> ( <PortfolioPage { ...portfolioPageProps } /> )} />

                  <Route path="/contacts"
                    render={()=> ( <ContactPage { ...contactPageProps } /> )} />

                  <Redirect to="/" exact />

                </Switch>

              </CSSTransition>

            </TransitionGroup>
          )} />
          
        </div>
      </Router>
    </DataServiceProvider>
  );
};

export default App;