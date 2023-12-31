
import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// Import Swiper React components









const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non a, officia necessitatibus tempora dignissimos libero pariatur. Pariatur, expedita! Quidem, nobis accusamus maiores officia iusto dignissimas? Aperiam sequi suscipit eum voluptate enim '
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non a, officia necessitatibus tempora dignissimos libero pariatur. Pariatur, expedita! Quidem, nobis accusamus maiores officia iusto dignissimes? Aperiam sequi suscipit eum voluptate enim '
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non a, officia necessitatibus tempora dignissimos libero pariatur. Pariatur, expedita! Quidem, nobis accusamus maiores officia iusto dignissimis? Aperiam sequi suscipit eum voluptate enim '
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non a, officia necessitatibus tempora dignissimos libero pariatur. Pariatur, expedita! Quidem, nobis accusamus maiores officia iusto dignissimas? Aperiam sequi suscipit eum voluptate enim '
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review}, index) => (
          <SwiperSlide className="testimonial" key={index}>
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
        ))}
        
      
        
      </Swiper>

    </section>
  )
}

export default Testimonials