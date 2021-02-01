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
    text: 'mirandoos3223@gmail.com',
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
      'Reqular school, where I was introduced to Informatics and studied other common subjects ',
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
        name: 'ReactJs + Typescript',
        progress: 82,
      },
      {
        name: 'React core packages (react router, axios, etc.)',
        progress: 78,
      },
      {
        name: 'Redux (redux-saga, redux-thunk, reselect, immer)',
        progress: 70,
      },
      {
        name: 'Material-UI (components + useStyles, themes)',
        progress: 78,
      },
      {
        name: 'Styled components',
        progress: 50,
      },
      {
        name: 'Forms (react-hook-form)',
        progress: 60,
      },
      {
        name: 'Maps (react-map-gl, react-google-maps/api)',
        progress: 62,
      },
      {
        name: 'Animations (GSAP, react-scroll)',
        progress: 65,
      },
      {
        name: '3D objects (react-three-fiber)',
        progress: 35,
      },
      {
        name: 'Web sockets (socket.io)',
        progress: 30,
      },
      {
        name: 'Unit tests (Jest, enzyme)',
        progress: 20,
      },
    ],
  },
  {
    title: 'Back-end',
    technologies: [
      {
        name: 'Node/Express + Typescript',
        progress: 75,
      },
      {
        name: 'NestJs',
        progress: 60,
      },
      {
        name: 'ORMs (mongoose, typeorm)',
        progress: 62,
      },
      {
        name: 'Authentication (passport and its strategies, related packages)',
        progress: 70,
      },
      {
        name: 'Validation (express-validator, NestJs`s pipes)',
        progress: 72,
      },
      {
        name: 'E-mails (nodemailer)',
        progress: 50,
      },
      {
        name: 'File uploads (multer)',
        progress: 45,
      },
      {
        name: 'GraphQL (apollo)',
        progress: 20,
      },
      {
        name: 'Web sockets (socket.io, WebRTC)',
        progress: 30,
      },
      {
        name: 'Django',
        progress: 20,
      },
    ],
  },
  {
    title: 'Databases and Source Control',
    technologies: [
      {
        name: 'MongoDB',
        progress: 82,
      },
      {
        name: 'Redis',
        progress: 20,
      },
      {
        name: 'PostgreSQL',
        progress: 60,
      },
      {
        name: 'MySQL',
        progress: 55,
      },
      {
        name: 'Git/GitHub',
        progress: 75,
      },
    ],
  },
  {
    title: 'Languages',
    technologies: [
      {
        name: 'English',
        progress: 85,
      },
      {
        name: 'Polish',
        progress: 75,
      },
      {
        name: 'Russian',
        progress: 95,
      },
      {
        name: 'Ukrainian',
        progress: 95,
      },
    ],
  },
];

export default data;
