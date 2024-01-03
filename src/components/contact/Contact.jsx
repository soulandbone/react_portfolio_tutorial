import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>soulandbone@gmail.com</h5>
            <a href="mailto:soulandbone@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>soulandboneDev</h5>
            <a href="https://m.me/ernest.achiever" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+370 699 21 99</h5>
            <a href="https://api.whatsapp.com/send?phone" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="" >
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send your message</button>

        </form>

      </div>
    </section>
  )
}

export default Contact