import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><FaLinkedinIn/></a>
        <a href="https://github.com" target='_blank'><FaGithub/></a>
        <a href="https://dribbble.com" target='_blank'><FaDribbble/></a>

        </div>
  )
}

export default HeaderSocials