import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <>
      <Container className='margin_60'>
        <Grid container spacing={7}>
          <Grid item lg={3} md={4} xs={12}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Header />
            <div className='content container_shadow'>
              <Switch>
                <Route path='/' exact>
                  <AboutMe />
                </Route>
                <Route path='/resume'>
                  <Resume />
                </Route>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/contact'>
                  <Contact />
                </Route>
              </Switch>
            </div>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
