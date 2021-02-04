import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { TweenMax, Power3 } from 'gsap';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../Button';

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname;
  const animRef = useRef();
  const navbarRef = useRef();

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    TweenMax.to(animRef.current, 2, {
      width: 0,
      ease: Power3.easeOut,
    }).delay(1);
    TweenMax.to(navbarRef.current, 1, {
      opacity: 1,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
      <Navbar
        ref={navbarRef}
        expand='lg'
        sticky='top'
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className='header container_shadow'>
        <Nav.Link as={NavLink} to='/' className='header_homeLink'>
          <Navbar.Brand className='header_home'>
            <HomeIcon />
          </Navbar.Brand>
        </Nav.Link>
        <div ref={animRef} className='header_anim'></div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='header_left'>
            <Nav.Link
              as={NavLink}
              to='/'
              onClick={() => setExpanded(false)}
              className={
                path === '/resume' ? 'header_link_active' : 'header_link'
              }>
              Resume
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/experience'
              onClick={() => setExpanded(false)}
              className={
                path === '/experience' ? 'header_link_active' : 'header_link'
              }>
              Experience
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/portfolio'
              onClick={() => setExpanded(false)}
              className={
                path === '/portfolio' ? 'header_link_active' : 'header_link'
              }>
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/contact'
              onClick={() => setExpanded(false)}
              className={
                path === '/contact' ? 'header_link_active' : 'header_link'
              }>
              Contact
            </Nav.Link>
          </Nav>
          <div className='header_right'>
            <CustomButton
              text='Hire me'
              onClick={() => {
                setExpanded(false);
                history.push('/contact');
              }}
              icon={<TelegramIcon />}
            />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
