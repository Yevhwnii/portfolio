import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import './Dialog.css';

const ContactDialog = ({ open, onClose, type }) => {
  const [text, setText] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    switch (type) {
      case 'validation':
        setText('Probably, there is something wrong with your input.');
        setTitle('Validation Error');
        break;
      case 'error':
        setText(
          'Unexpected error occured while message was trying to be delivered. Please, contact me using following e-mail: mirandoos3223@gmail.com'
        );
        setTitle('Error occured while sending e-mail');
        break;
      case 'success':
        setText(
          'Thank you for submitting e-mail to me! I will respond you as soon as I can!'
        );
        setTitle('Success');
        break;

      default:
        break;
    }
  }, [type]);
  return (
    <Dialog
      maxWidth='sm'
      className='contact_dialog'
      open={open}
      onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography className='contact_dialog_desc'>{text}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
