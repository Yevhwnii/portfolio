import React from 'react';
import './Contact.css';
import { Grid, TextField } from '@material-ui/core';

import CustomButton from '../../components/Button';

const Contact = () => {
  return (
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
            <TextField fullWidth name='name' label='Name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name='email' label='E-mail' />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name='message'
              label='Message'
              fullWidth
              multiline
              inputProps={{ style: { backgroundColor: '' } }}
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton text='Submit' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
