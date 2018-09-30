/**
 * @fileOverview
 * @name App.jsx
 * @author masha
 */
import React, { Fragment } from 'react';
import Header from './header/Header';
import Section from './section/Section';
import Summary from './summary/Summary';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Education from './education/Education';
import About from './about/About';
import Hobby from './hobby/Hobby';
import Link from './link/Link';
import Footer from './footer/Footer';

// Variables
const summaryItems = [
  'PHP developer with 3 years of experience.',
  'Experience in Software Development including Analysis, Design and Development.',
  'Experience in Object Orieted Programming.',
  'Experience in creation of information blocks for reports and dashboards',
  'Experience in realization of logic for business',
  'Expirience with API (SendPulse, Opendatabot, Prom.ua)',
];

const aboutDatas = [
  { id: 1, description: 'I love PHP for its simplicity and breadth of possibilities. I am waiting for the release of version 7.3. My dream is to see the actual working code using the magic of ships.' },
  { id: 2, description: 'Future plans: Work in a fast growing company using modern trends. Comprehend and use new solutions and technologies in practice. Improve your knowledge and skills.' },
];


const educationDatas = [
  { id: 1, description: 'Chernihiv National  Technological University, Chernihiv (2010 - 2014)', items: ['Specialized computer systems'] },
];

const skillDatas = {
  Languages: 'PHP, Javascript, SQL, XML, JSON',
  Databases: 'MySQL, CSV',
  Web: 'CSS3, HTML5, jQuery',
  Mobile: 'Objective-C, Swift',
  VCS: 'git, svn',
  Platforms: 'Linux, Unix',
  'Web Services': 'REST, SOAP, AJAX',
  Tools: 'FTP, Curl',
  'Build Tools': 'Composer',
  English: 'pre-intermediate',
};

const hobbyItems = [
  'Traveling',
  'Fitness',
  'Cycling',
  'Bowling',
];

const experienceDatas = [
  {
    id: 1,
    position: 'Web Developer',
    company: 'CRM OneBOX, Chernihiv',
    items: [
      'Creating a new one and maintaining the current functionality',
      'Adapt the js library for the tables for the needs of the company',
      'Other information is protected by NDA',
    ],
    date: 'october 2015 - present',
  },
];

const linkDatas = {
  facebook: 'https://www.facebook.com/masha',
  twitter: 'https://twitter.com/masha',
  github: 'https://github.com/masha/',
  linkedin: 'https://linkedin.com/in/masha',
  medium: 'https://medium.com/masha',
  
};

const App = () => (
  <Fragment>
    <Header />
    <Section>
      <About datas={aboutDatas} />
    </Section>
    <Section>
      <Summary items={summaryItems} />
    </Section>
    <Section>
      <Skill datas={skillDatas} />
    </Section>
    <Section>
      <Experience datas={experienceDatas} />
    </Section>
    <Section>
      <Education datas={educationDatas} />
    </Section>
    <Section>
      <Hobby items={hobbyItems} />
    </Section>
    <Section>
      <Link datas={linkDatas} />
    </Section>
    <Footer />
  </Fragment>
);

export { App as default };
