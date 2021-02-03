import React, { useState } from 'react';
import './Portfolio.css';
import {
  Grid,
  Tabs,
  Tab,
  Card,
  Dialog,
  DialogTitle,
  Grow,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import { portfolioTabs } from '../../utils/resumeData';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  console.log(tabValue);

  const ProjectDialog = () => {
    return (
      <Dialog
        className='portfolio_dialog'
        open={showDialog}
        onClose={() => setShowDialog(false)}>
        <DialogTitle>{projectDialog.title}</DialogTitle>
        <img
          className='portfolio_dialog_image'
          alt={projectDialog.title}
          src={projectDialog.image}
        />
        <DialogContent>
          <Typography className='portfolio_dialog_desc'>
            {projectDialog.desc}
          </Typography>
        </DialogContent>
        <DialogActions className='portfolio_dialog_actions'>
          <a
            href={projectDialog.link}
            target='_blank'
            rel='noreferrer'
            className='portfolio_dialog_icon'>
            <GitHubIcon />
            <Typography style={{ marginTop: 5 }}>Source Code</Typography>
          </a>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Grid container className='section' style={{ marginBottom: 30 }}>
      {/* Title */}
      <Grid item className='section_title' style={{ marginBottom: 30 }}>
        <span></span>
        <h6>Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          className='portfolio_tabs'
          onChange={(_, newValue) => setTabValue(newValue)}>
          <Tab
            label='All'
            value='All'
            disableRipple
            className={
              tabValue === 'All' ? 'portfolio_tab active' : 'portfolio_tab'
            }
          />
          {[...new Set(portfolioTabs.map((item) => item.tag))].map((tag) => {
            console.log(tabValue === tag);
            return (
              <Tab
                label={tag}
                value={tag}
                disableRipple
                className={
                  tabValue === tag ? 'portfolio_tab active' : 'portfolio_tab'
                }
              />
            );
          })}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid
          item
          container
          spacing={3}
          className='portfolio_projects_container'>
          {portfolioTabs.map((project) => {
            return (
              <>
                {tabValue === project.tag || tabValue === 'All' ? (
                  <Grid xs={12} sm={6} md={4} item>
                    <Grow in timeout={1000}>
                      <Card
                        className='portfolio_projects_card'
                        onClick={() => {
                          setShowDialog(true);
                          setProjectDialog(project);
                        }}>
                        <CardActionArea>
                          <CardMedia
                            className='portfolio_projects_card_image'
                            image={project.image}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography className='portfolio_projects_card_title'>
                              {project.title}
                            </Typography>
                            <Typography
                              variant='body2'
                              className='portfolio_projects_card_caption'>
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            );
          })}
          {showDialog && <ProjectDialog />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
