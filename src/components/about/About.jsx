import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <LuUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ WorldWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni amet consectetur non ea, iusto repellendus iste recusandae fugiat sit ullam, fugit illo labore quia, doloremque est voluptatibus officia impedit!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>

        </div>
      </div>
  
      </section>
  )
}

export default About