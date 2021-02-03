import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../Button';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar expand='lg' sticky='top' className='header container_shadow'>
      <Nav.Link as={NavLink} to='/' className='header_homeLink'>
        <Navbar.Brand className='header_home'>
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link
            as={NavLink}
            to='/'
            className={
              path === '/resume' ? 'header_link_active' : 'header_link'
            }>
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/experience'
            className={
              path === '/experience' ? 'header_link_active' : 'header_link'
            }>
            Experience
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              path === '/portfolio' ? 'header_link_active' : 'header_link'
            }>
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/contact'
            className={
              path === '/contact' ? 'header_link_active' : 'header_link'
            }>
            Contact
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          <CustomButton text='Hire me' icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
