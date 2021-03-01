import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './TechSkill.css';

const TechSkill = ({ title, tech }) => {
  return (
    <>
      <Grid item className='section_title' style={{ marginBottom: 30 }}>
        <span></span>
        <h6>{title}</h6>
      </Grid>
      <Grid className='techSkill_container' container item>
        {tech.map((skill) => {
          return (
            <Grid
              className='techSkill_wrapper'
              container
              item
              xs={12}
              spacing={2}>
              <Grid xs={3} item>
                <div className='image_container'>
                  <img src={skill.icon} alt={skill.name + 'icon'} />
                </div>
              </Grid>
              <Grid className='skills_name' item>
                <Typography>{skill.name}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default TechSkill;
