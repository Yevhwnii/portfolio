import React from 'react';
import { Button } from '@material-ui/core';
import './Button.css';

const CustomButton = ({ text, icon, styles }) => {
  console.log(styles);
  return (
    <Button
      style={styles}
      className='custom_btn'
      endIcon={icon && <div className='btn_iconContainer'>{icon}</div>}>
      <span className='btn_text'>{text}</span>
    </Button>
  );
};

export default CustomButton;
