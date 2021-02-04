import React, { useState } from 'react';
import './Contact.css';
import { Grid, TextField } from '@material-ui/core';
import emailjs from 'emailjs-com';

import CustomButton from '../../components/Button';
import FadeDiv from '../../components/Fade';
import ContactDialog from '../../components/ContactDialog';

const Contact = () => {
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [messageField, setMessageField] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState('validation');

  const onInputChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameField(e.target.value);
        break;
      case 'email':
        setEmailField(e.target.value);
        break;
      case 'message':
        setMessageField(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitEmail = () => {
    const emailValidationPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(emailValidationPattern.test(emailField));
    if (
      nameField &&
      emailField &&
      messageField &&
      emailValidationPattern.test(emailField)
    ) {
      emailjs
        .send(
          'gmail',
          'template_mpqhdrg',
          {
            name: nameField,
            email: emailField,
            message: messageField,
          },
          'user_JTJ0jXS36tb8tnfDPMl3S'
        )
        .then(
          (result) => {
            setDialogType('success');
            setShowDialog(true);
          },
          (error) => {
            setDialogType('error');
            setShowDialog(true);
          }
        );
    } else {
      setDialogType('validation');
      setShowDialog(true);
    }
  };

  return (
    <FadeDiv>
      <Grid container className='section' style={{ paddingBottom: 45 }}>
        <Grid item container>
          <Grid item className='section_title' style={{ marginBottom: 30 }}>
            <span></span>
            <h6>Contact Form</h6>
          </Grid>
        </Grid>

        <Grid item container>
          {/* Contact Form */}
          <Grid item container spacing={3} xs={12} lg={7}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                onChange={onInputChange}
                name='name'
                type='text'
                label='Name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                onChange={onInputChange}
                name='email'
                type='email'
                label='E-mail'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='message'
                label='Message'
                onChange={onInputChange}
                fullWidth
                multiline
                inputProps={{ style: { backgroundColor: '' } }}
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomButton onClick={submitEmail} text='Submit' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ContactDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        type={dialogType}
      />
    </FadeDiv>
  );
};

export default Contact;
