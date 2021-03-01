import React from 'react';
import FbIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import InstIcon from '@material-ui/icons/Instagram';
import LearnIcon from '@material-ui/icons/EmojiObjectsOutlined';
import CommunicationIcon from '@material-ui/icons/EmojiPeopleOutlined';
import ReliableIcon from '@material-ui/icons/BeenhereOutlined';

const data = {
  name: 'Yevhenii Moiseienko',
  title: 'Junior Fullstack Developer',
  aboutMe: `Hi! Glad to see you here, here is small section that introduces me.\n\n  My name is Yevhenii Moiseienko, I originate from Ukraine. After finishing my school, I decided to change something in my life and went for study to Poland. I finished Engineer Degree in WSEI, Lublin and currently I am studying Master Degree there. I feel like I fell in love with React and hope I will not break up with it :).`,

  socials: {
    Facebook: {
      link: 'https://www.facebook.com/zheka.breiter.5',
      text: 'Facebook',
      icon: (
        <FbIcon
          style={{
            color: '#4267B2',
            fontSize: 18,
          }}
        />
      ),
    },
    Instagram: {
      link: 'https://www.instagram.com/mirandoo_/',
      text: 'Instagram',
      icon: (
        <InstIcon
          style={{
            color: '#F77737',
            fontSize: 18,
          }}
        />
      ),
    },
    Github: {
      link: 'https://github.com/Yevhwnii',
      text: 'Github',
      icon: (
        <GithubIcon
          style={{
            color: 'black',
            fontSize: 18,
          }}
        />
      ),
    },
  },
};

export const profileTimeline = {
  birthday: {
    title: 'Birthday',
    text: '02.06.2000',
  },
  email: {
    title: 'E-mail',
    text: 'yevhenii.moiseienko@gmail.com',
  },
  job: {
    title: 'Current job',
    text: 'Student',
  },
  phone: {
    title: 'Phone number',
    text: '+48 577 725 625',
  },
};

export const workTimeline = [
  {
    title: '"Zwyczajny obiad" Startup Internship',
    date: '02/2020-05/2020',
    description:
      'Main responsibilities were creation of CRM system for mobile application "Zwyczajny obiad" using React and its underlying packages. During that internships, I have got a lot of experience from other developers in different aspects of Web Development.',
  },
  {
    title: 'Venture Devs Internship',
    date: '01/2019 - 04/2019',
    description:
      'Main responsibilities were creation of API endpoints based on requirement using Django framework.',
  },
];
export const educationTimeline = [
  {
    title: 'Computer Science, 2st Degree, WSEI, Lublin',
    date: '2020 - Present',
    description:
      'Currently, I am continuing my study at the same University to get Master Degree in Computer Science',
  },
  {
    title: 'Computer Science, 1st Degree, WSEI, Lublin',
    date: '2017 - 2020',
    description:
      'During the study, I was taught different aspects of IT ecosystem. I tried myself in different field of IT like Machine Learning, Big Data, Mobile Developement, Artificial Intellegence. However, among all of them I stopped at Web Development',
  },
  {
    title: 'High School',
    date: '2014 - 2017',
    description:
      'Reqular school, where I was introduced to Informatics and studied other general subjects ',
  },
];

export const myServices = [
  {
    title: 'Willing to learn',
    description:
      'I do like learning new technologies, frameworks and getting other people`s experience.',
    icon: <LearnIcon />,
  },
  {
    title: 'Communicative',
    description:
      'I find myself quite communicative, easy-going, flexible person.',
    icon: <CommunicationIcon />,
  },
  {
    title: 'Reliable ',
    description: 'You can bet on me and I will not let you down',
    icon: <ReliableIcon />,
  },
];

export const mySkills = [
  {
    title: 'Front-end',
    technologies: [
      {
        name: 'Javascript',
        icon: require('../assets/icons/javascript.svg').default,
      },
      {
        name: 'Typescript',
        icon: require('../assets/icons/typescript.svg').default,
      },

      {
        name: 'React',
        icon: require('../assets/icons/react.svg').default,
      },
      {
        name: 'Redux',
        icon: require('../assets/icons/redux.svg').default,
      },
      {
        name: 'RxJs',
        icon: require('../assets/icons/rxjs.svg').default,
      },
      {
        name: 'Sass',
        icon: require('../assets/icons/sass.svg').default,
      },
      {
        name: 'Material-UI',
        icon: require('../assets/icons/mui.svg').default,
      },
      {
        name: 'GSAP',
        icon: require('../assets/icons/gsap.svg').default,
      },
      // {
      //   name: 'Styled components',
      //   progress: 50,
      // },
      // {
      //   name: 'Forms (react-hook-form)',
      //   progress: 60,
      // },
      // {
      //   name: 'Maps (react-map-gl, react-google-maps/api)',
      //   progress: 62,
      // },

      // {
      //   name: '3D objects (react-three-fiber)',
      //   progress: 35,
      // },
      // {
      //   name: 'Web sockets (socket.io)',
      //   progress: 30,
      // },
      // {
      //   name: 'Unit tests (Jest, enzyme)',
      //   progress: 20,
      // },
    ],
  },
  {
    title: 'Back-end',
    technologies: [
      {
        name: 'Node/Express',
        icon: require('../assets/icons/node.svg').default,
      },
      {
        name: 'NestJs',
        icon: require('../assets/icons/nest.svg').default,
      },
      {
        name: 'Apollo',
        icon: require('../assets/icons/apollo.svg').default,
      },
      // {
      //   name: 'ORMs (mongoose, typeorm)',
      //   progress: 62,
      // },
      // {
      //   name: 'Authentication (passport and its strategies, related packages)',
      //   progress: 70,
      // },
      // {
      //   name: 'Validation (express-validator, NestJs`s pipes)',
      //   progress: 72,
      // },
      // {
      //   name: 'E-mails (nodemailer)',
      //   progress: 50,
      // },
      // {
      //   name: 'File uploads (multer)',
      //   progress: 45,
      // },
      // {
      //   name: 'GraphQL (apollo)',
      //   progress: 20,
      // },
      // {
      //   name: 'Web sockets (socket.io, WebRTC)',
      //   progress: 30,
      // },
      // {
      //   name: 'Django',
      //   progress: 20,
      // },
    ],
  },
  {
    title: 'Databases',
    technologies: [
      {
        name: 'MongoDB',
        icon: require('../assets/icons/mongo.svg').default,
      },
      {
        name: 'PostgreSQL',
        icon: require('../assets/icons/postgres.svg').default,
      },

      // {
      //   name: 'Redis',
      //   progress: 20,
      // },
      // {
      //   name: 'PostgreSQL',
      //   progress: 60,
      // },
      // {
      //   name: 'MySQL',
      //   progress: 55,
      // },
      // {
      //   name: 'Git/GitHub',
      //   progress: 75,
      // },
    ],
  },
  {
    title: 'DevOps tools',
    technologies: [
      {
        name: 'Git',
        icon: require('../assets/icons/git.svg').default,
      },
      {
        name: 'Docker',
        icon: require('../assets/icons/docker.svg').default,
      },
      // {
      //   name: 'Polish',
      //   progress: 75,
      // },
      // {
      //   name: 'Russian',
      //   progress: 95,
      // },
      // {
      //   name: 'Ukrainian',
      //   progress: 95,
      // },
    ],
  },
];

export const portfolioTabs = [
  {
    tag: 'Front-end',
    outerImage: require('../assets/images/twitterLogo.jpg').default,
    image: require('../assets/images/twitter.jpg').default,
    title: 'Twitter clone (front-end)',
    caption: 'Front-end part of my twitter clone using MERN stack',
    desc:
      'I tried to implement by myself Twitter and its core functionalities. Among which are: UI of the Twitter as close as possible, CRUD actions on tweets, comments, topics. The reason behind this project for me, is to play with new technologies and improve my existing skills. Stack of technologies I used can be found on GitHub page (link down below).',
    link: 'https://github.com/Yevhwnii/twitter-mern-frontend',
  },
  {
    tag: 'Back-end',
    outerImage: require('../assets/images/twitterLogo.jpg').default,
    image: require('../assets/images/twitter.jpg').default,
    title: 'Twitter clone (back-end)',
    caption: 'Back-end part of my twitter clone using MERN stack',
    desc:
      'I tried to implement by myself Twitter and its core functionalities. In server part of the application, I tried to supply all required endpoints for my front-end to work properly. I implemented authentication using passportJs, CRUD operation on tweets, route guards, validation of user input, e-mail verification and few more. That was quite fun experience!',
    link: 'https://github.com/Yevhwnii/twitter-mern-backend',
  },
  {
    tag: 'Front-end',
    outerImage: require('../assets/images/dollaLogo.jpg').default,
    image: require('../assets/images/dolla.png').default,
    title: 'Virtual banking landing page',
    caption: 'Landing page for potential virtual banking business',
    desc:
      'I created this landing page after I found some inspiration from the mockup. Also, I decided to try out Styled Components and react-scroll libraries. I have figured out how to use them together to create some fancy looking UI.',
    link: 'https://github.com/Yevhwnii/react-smooth-scroll',
  },
  {
    tag: 'Front-end',
    outerImage: require('../assets/images/chairLogo.jpg').default,
    image: require('../assets/images/chair.jpg').default,
    title: 'Chair shop landing page',
    caption: 'Landing page for potential chair selling business',
    desc:
      'Landing page for shop that is selling chairs. Mostly, I created this landing page in order to play around with react-three-fiber library which is wrapper around Three.js and allows to inject 3D models into browser.',
    link: 'https://github.com/Yevhwnii/react-threejs-landing-page',
  },
  {
    tag: 'FullStack',
    outerImage: require('../assets/images/diplomaLogo.jpg').default,
    image: require('../assets/images/diploma.jpg').default,
    title: 'Restaurant finder',
    caption: 'Application that can help people find place for meal',
    desc:
      'I created this application for my Engineer Thesis. This application allows user to find restaurant on the map and then have a quick glance on its menu and prices. That may help someone to choose place for meal based on his budget. Though, application has still a lot of ways to improve.',
    link: 'https://github.com/Yevhwnii/diploma-frontend',
  },
  {
    tag: 'FullStack',
    outerImage: require('../assets/images/travelLogLogo.jpg').default,
    image: require('../assets/images/travelLog.jpg').default,
    title: 'Travel Log',
    caption: 'Travel log application',
    desc:
      'This application allows to mark location where person has been already simply by double clicking on the map. I created this application to play around with MapBox and how I can configure it and then use.',
    link: 'https://github.com/Yevhwnii/mern-travel-log',
  },
  {
    tag: 'Front-end',
    outerImage: require('../assets/images/trackerLogo.jpg').default,
    image: require('../assets/images/tracker.jpg').default,
    title: 'COVID tracker',
    caption: 'COVID tracking application based on covid19.mathdro API',
    desc:
      'This is simple, COVID tracking application. During the development, I was trying to discover how to work with charts in React. I hope I was successful.',
    link: 'https://github.com/Yevhwnii/covidtracker',
  },
];

export default data;
