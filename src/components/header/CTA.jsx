import React from 'react';
import CV from '../../assets/cv.pdf';

// Min 48:41 of the tutorial there are instructions as to how attach the PDF. For the moment I wont do it because i want to do it from server, but will be checked again when I complete the tutorial 

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA;