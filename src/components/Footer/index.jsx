import React from 'react';
import { Typography } from '@material-ui/core';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_leftSide'>
        <Typography className='footer_name'>Yevhenii Moiseienko</Typography>
      </div>
      <div className='footer_rightSide'>
        <Typography className='footer_copyright'>
          All rights reserved © {new Date().getFullYear()}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
