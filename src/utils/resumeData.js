import React from 'react';
import FbIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import InstIcon from '@material-ui/icons/Instagram';

const data = {
  name: 'Yevhenii Moiseienko',
  title: 'Fullstack developer',

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

export default data;
