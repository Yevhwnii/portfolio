import React from 'react';
import './SkillGraph.css';
import { Grid, Typography, LinearProgress } from '@material-ui/core';

const SkillGraph = ({ title, tech }) => {
  return (
    <>
      <Grid item className='section_title' style={{ marginBottom: 30 }}>
        <span></span>
        <h6>{title}</h6>
      </Grid>
      <Grid className='graph_container' item>
        {tech.map((technology) => {
          return (
            <div className='graph_wrapper'>
              <Typography className='graph_name' variant='body2'>
                {technology.name}
              </Typography>
              <LinearProgress
                variant='determinate'
                value={technology.progress}
              />
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default SkillGraph;
