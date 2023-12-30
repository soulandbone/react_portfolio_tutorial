import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non a, officia necessitatibus tempora dignissimos libero pariatur. Pariatur, expedita! Quidem, nobis accusamus maiores officia iusto dignissimos? Aperiam sequi suscipit eum voluptate enim '
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non a, officia necessitatibus tempora dignissimos libero pariatur. Pariatur, expedita! Quidem, nobis accusamus maiores officia iusto dignissimos? Aperiam sequi suscipit eum voluptate enim '
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non a, officia necessitatibus tempora dignissimos libero pariatur. Pariatur, expedita! Quidem, nobis accusamus maiores officia iusto dignissimos? Aperiam sequi suscipit eum voluptate enim '
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non a, officia necessitatibus tempora dignissimos libero pariatur. Pariatur, expedita! Quidem, nobis accusamus maiores officia iusto dignissimos? Aperiam sequi suscipit eum voluptate enim '
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam velit magni tenetur nisi, soluta voluptas accusantium saepe dolore fuga tempora quibusdam doloremque numquam aliquam, voluptatem ea delectus sit corrupti.</small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam velit magni tenetur nisi, soluta voluptas accusantium saepe dolore fuga tempora quibusdam doloremque numquam aliquam, voluptatem ea delectus sit corrupti.</small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam velit magni tenetur nisi, soluta voluptas accusantium saepe dolore fuga tempora quibusdam doloremque numquam aliquam, voluptatem ea delectus sit corrupti.</small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam velit magni tenetur nisi, soluta voluptas accusantium saepe dolore fuga tempora quibusdam doloremque numquam aliquam, voluptatem ea delectus sit corrupti.</small>
        </article>
      </div>

    </section>
  )
}

export default Testimonials