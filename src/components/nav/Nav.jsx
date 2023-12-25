import React, { useState } from 'react';
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  const handleClick = (event) => {
    
    const href = event.currentTarget.getAttribute('href');
    setActiveNav(href);
  }

  const checkHref = (href) => {
    const getClassName = href === activeNav ? 'active' :'';
    return getClassName;
  }

  const navLinks = [
    {href:'#', icon:<IoHomeOutline/> },
    {href:'#about', icon:<CiUser/> },
    {href:'#experience', icon:<IoBookOutline/> },
    {href:'#services', icon:<RiServiceLine/> },
    {href:'#contact', icon:<BiMessageDetail/> },
  ];


  return (
    <nav>
      {/* <a href="#" className={checkHref('#')} onClick={handleClick}><IoHomeOutline/></a>
      <a href="#about" className={checkHref('#about')} onClick={handleClick} ><CiUser/></a>
      <a href="#experience"className={checkHref('#experience')}  onClick={handleClick}><IoBookOutline/></a>
      <a href="#services" className={checkHref('#services')}  onClick={handleClick}><RiServiceLine/></a>
      <a href="#contact"className={checkHref('#contact')}  onClick={handleClick}><BiMessageDetail/></a> */}
      {navLinks.map(link => (
        <a 
        id={link.href}
        className={checkHref(link.href)}
        href={link.href}
        onClick={handleClick}
        >
          {link.icon}
        </a>
      ))}
      
    </nav>
  )
}

export default Nav