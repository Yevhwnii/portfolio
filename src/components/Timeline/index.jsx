import React from 'react';
import './Timeline.css';
import { Typography } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <>
      <Timeline className='timeline'>
        <TimelineItem className='timeline_firstItem'>
          <TimelineSeparator>
            <TimelineDot className='timeline_headerDot'>{icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='h6' className='timeline_header'>
              {title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {children}
      </Timeline>
    </>
  );
};

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className='timeline_separator_padding'>
      <TimelineDot variant='outlined' className='timeline_dot' />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeline;
