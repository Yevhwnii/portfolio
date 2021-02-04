import React from 'react';
import './AboutMe.css';
import { Grid, Typography } from '@material-ui/core';

import resume, { myServices, mySkills } from '../../utils/resumeData';
import Card from '../../components/Card';
import SkillGraph from '../../components/SkillGraph';
import FadeDiv from '../../components/Fade';

const AboutMe = () => {
  return (
    <>
      <FadeDiv>
        {/* About me section */}
        <Grid container className='section' style={{ paddingBottom: 45 }}>
          <Grid item className='section_title' style={{ marginBottom: 30 }}>
            <span></span>
            <h6>About Me</h6>
          </Grid>

          <Grid item xs={12}>
            <Typography className='about_me_text' variant='body2'>
              {resume.aboutMe}
            </Typography>
          </Grid>
        </Grid>
        {/* Personal Characteristics */}
        <Grid container className='section' style={{ paddingBottom: 45 }}>
          <Grid item className='section_title' style={{ marginBottom: 30 }}>
            <span></span>
            <h6>Personal Characteristics</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3} justify='space-around'>
              {myServices.map((char) => {
                return (
                  <Card
                    key={char.description}
                    icon={char.icon}
                    title={char.title}
                    desc={char.description}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        {/* My skills */}
        <Grid
          container
          justify='space-between'
          spacing={3}
          className='section'
          style={{ paddingBottom: 45 }}>
          {mySkills.map((skill) => {
            return (
              <Grid key={Math.random()} item xs={12} sm={6}>
                <SkillGraph title={skill.title} tech={skill.technologies} />
              </Grid>
            );
          })}
        </Grid>
      </FadeDiv>
    </>
  );
};

export default AboutMe;
