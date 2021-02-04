import React, { useRef, useEffect } from 'react';
import { TweenMax, Power4 } from 'gsap';
import './Fade.css';

const Fade = ({ children }) => {
  const animRef = useRef();

  useEffect(() => {
    const animDiv = animRef.current;
    TweenMax.to(animDiv, 0.3, {
      opacity: 1,
      ease: Power4.easeIn,
    });
  }, []);

  return (
    <div ref={animRef} className='fade_div'>
      {children}
    </div>
  );
};

export default Fade;
