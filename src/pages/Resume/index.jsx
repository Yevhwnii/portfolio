import React from 'react';
import './Resume.css';
import { Grid, Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import WorkIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/AccountBalance';

import CustomTimeline, {
  CustomTimelineSeparator,
} from '../../components/Timeline';
import { workTimeline, educationTimeline } from '../../utils/resumeData';

const Resume = () => {
  return (
    <Grid container className='section' style={{ paddingBottom: 45 }}>
      <Grid item className='section_title' style={{ marginBottom: 30 }}>
        <span></span>
        <h6>Resume</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid item container>
          <Grid item sm={12} md={6}>
            {/* Working History timeline */}
            <CustomTimeline title='Working history' icon={<WorkIcon />}>
              {workTimeline.map((work, i) => {
                return (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent
                      style={
                        i === workTimeline.length - 1 ? { marginBottom: 3 } : {}
                      }
                      className='timeline_content'>
                      <Typography className='timeline_title'>
                        {work.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {work.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description'>
                        {work.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </CustomTimeline>
          </Grid>
          <Grid item sm={12} md={6}>
            {/* Education History timeline */}
            <CustomTimeline title='Education history' icon={<EducationIcon />}>
              {educationTimeline.map((education, i) => {
                return (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent
                      style={
                        i === educationTimeline.length - 1
                          ? { marginBottom: 3 }
                          : {}
                      }
                      className='timeline_content'>
                      <Typography className='timeline_title'>
                        {education.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {education.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description'>
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
