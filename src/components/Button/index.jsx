import React from 'react';
import { Button } from '@material-ui/core';
import './Button.css';

const CustomButton = ({ text, icon, styles, onClick, linkTo }) => {
  return (
    <Button
      style={styles}
      onClick={onClick}
      className='custom_btn'
      endIcon={icon && <div className='btn_iconContainer'>{icon}</div>}>
      {linkTo ? (
        <a href={linkTo} className='btn_link' target='blank' rel='norefferer'>
          <span className='btn_text'>{text}</span>
        </a>
      ) : (
        <span className='btn_text'>{text}</span>
      )}
    </Button>
  );
};

export default CustomButton;
