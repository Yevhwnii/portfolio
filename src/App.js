import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

import './App.css';

function App() {
  return (
    <>
      <Container className='margin_60'>
        <Grid container spacing={7}>
          <Grid item lg={3} md={4} xs={12}>
            <Profile />
          </Grid>
          <Grid item xs style={{ backgroundColor: 'green' }}>
            <Header />
            <Switch>
              <Route path='/' exact>
                <Resume />
              </Route>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
            </Switch>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
