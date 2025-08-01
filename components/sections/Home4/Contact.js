import React, { useState } from 'react';
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  allowTouchMove: false,
  speed: 2000,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    360: { slidesPerView: 3 },
    800: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1300: { slidesPerView: 5 },
  },
};
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm({
      resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    setLoading(true);
    console.log('Form Submitted:', data);
    setTimeout(() => {
        setLoading(false);
        reset();
        alert('Your message has been sent!');
    }, 2000);
  };
  const brandLogos = [
    "contact-brand1.png",
    "contact-brand2.png",
    "contact-brand3.png",
    "contact-brand4.png",
    "contact-brand5.png",
  ];
  return (
    <section id='contact-menu' className="contact-four-area mt-130" style={{ backgroundImage: `url(assets/images/bg/contact-four-bg.jpg)` }}>
      <div className="container">
        <div className="contact-four__wrp">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="contact-four__form">
                <div className="section-header mb-40">
                  <h6>Let's connect</h6>
                  <h2 className="wow splt-txt" data-splitting>We’re here to help</h2>
                  <p className="mt-3">Need help with a project or have a question about our work? We're here for you.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="your-name" className="sr-only">Your Name</label>
                    <input 
                        type="text" 
                        id="your-name"
                        name="name"
                        placeholder="Your Name" 
                        {...register('name')}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                    <label htmlFor="your-email" className="sr-only">Email Address</label>
                    <input 
                        type="email" 
                        id="your-email" 
                        name="email"
                        placeholder="Email Address" 
                        {...register('email')}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea
                        id="message" 
                        name="message"
                        placeholder="Write a Message" 
                        {...register('message')}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message.message}</p>}
                    <button type="submit" className="btn-one mt-50" data-splitting disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-four__image imageLeftToRight wow">
                <img src="assets/images/contact/contact-four-image.jpg" alt="image" />
                <div className="content">
                  <h4 className="text wow splt-txt" data-splitting>An insightful consulting firm with an engaged team, providing solutions that blend analytics.</h4>
                  <div className="info">
                    <div>
                      <h5 className="text-white">Robert Fox</h5>
                      <span className="text-white">Founder & CEO</span>
                    </div>
                    <img className="logo" src="assets/images/contact/logo.png" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Carousel */}
          <div className="contact-four__brand mt-100">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {brandLogos.concat(brandLogos).map((logo, i) => (
                <SwiperSlide className="swiper-slide" key={i}>
                  <div className="brand-two__item">
                    <Link href="/"><img src={`assets/images/brand/${logo}`} alt="brand logo" /></Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <h5 className="contact-four__brand-text mt-50">
            2,600 Companies and Individuals Trust Us.
            <i className="fa-regular fa-chevron-right mx-1" />
            <Link href="/" className="hover-link-light fw-600"> View All Clients</Link>
          </h5>
        </div>
      </div>

      <div className="contact-four__rectangle">
        <div className="item-one wow" />
        <div className="item-two wow" />
        <div className="item-three wow" />
      </div>
    </section>
  )
}

export default Contact