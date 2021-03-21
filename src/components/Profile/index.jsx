import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './Profile.css';
import { Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import ButtonIcon from '@material-ui/icons/GetApp';

import resume, { profileTimeline } from '../../utils/resumeData';
import CustomTimeLine, { CustomTimelineSeparator } from '../Timeline';
import CustomBtn from '../Button';

const ProfileTimelineItem = ({ title, link, text, icon }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className='timeline_content'>
        {link ? (
          <div>
            <Typography className='timeline_wIcon'>
              <span className='timelineItem_title'>{title}:</span>{' '}
              <a href={link} rel='noreferrer' target='_blank'>
                {icon}
              </a>
            </Typography>
          </div>
        ) : (
          <Typography>
            <span className='timelineItem_title'>{title}:</span>{' '}
            <span className='timelineItem_text'>{text}</span>
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  const containerRef = useRef();
  const animRef = useRef();
  const infoSectionRef = useRef();

  useEffect(() => {
    TweenMax.from(containerRef.current, 3, {
      height: 0,
      ease: Power3.easeOut,
    });
    TweenMax.to(animRef.current, 3, {
      height: 0,
      ease: Power3.easeOut,
    });
    TweenMax.to(infoSectionRef.current, 3, {
      opacity: 1,
    }).delay(2);
  }, []);

  return (
    <>
      <div ref={containerRef} className='profile container_shadow'>
        <div ref={animRef} className='profile_anim'></div>
        <div className='profile_name'>
          <Typography className='name'>{resume.name}</Typography>
          <Typography className='title'>{resume.title}</Typography>
        </div>

        <figure className='profile_image'>
          <img
            alt='Avatar'
            src={require('../../assets/images/profileImage.jpg').default}
          />
        </figure>

        <div ref={infoSectionRef} className='profile_information'>
          <CustomTimeLine icon={<PersonIcon />}>
            {Object.values(profileTimeline).map((el) => {
              return (
                <ProfileTimelineItem
                  key={Math.random()}
                  title={el.title}
                  text={el.text}
                />
              );
            })}
            {Object.keys(resume.socials).map((key) => (
              <ProfileTimelineItem
                key={Math.random()}
                title={key}
                link={resume.socials[key].link}
                icon={resume.socials[key].icon}
              />
            ))}
          </CustomTimeLine>
          <div className='profile_buttonWrapper'>
            <CustomBtn
              text='Show CV'
              linkTo='https://pdfhost.io/v/wOyHo33fg_Moiseienko_Yevhenii_CVpdf.pdf'
              icon={<ButtonIcon />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
