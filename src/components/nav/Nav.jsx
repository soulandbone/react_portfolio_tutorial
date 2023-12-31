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
      {navLinks.map(link => (
        <a 
        key={link.href}
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