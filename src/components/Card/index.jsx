import React from 'react';
import './Card.css';
import { Grid, Icon, Typography } from '@material-ui/core';

const Card = ({ icon, title, desc }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <div className='card_container container_shadow'>
        <Icon className='card_icon'>{icon}</Icon>
        <Typography variant='h6' className='card_title'>
          {title}
        </Typography>
        <Typography variant='body2' className='card_desc'>
          {desc}
        </Typography>
      </div>
    </Grid>
  );
};

export default Card;
