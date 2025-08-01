import React from 'react'
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

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

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
    reset();
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
              <div className="contact-four__form dark-area">
                <div className="section-header mb-40">
                  <h6>Let's connect</h6>
                  <h2 className="wow splt-txt" data-splitting>We’re here to help</h2>
                  <p className="mt-3">Need help with a project or have a question about our work? We're here for you.</p>
                </div>

                {/* Validated Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" placeholder="Name" {...register('name')} />
                  {errors.name && <p className="error">{errors.name.message}</p>}

                  <input type="email" placeholder="Email Address" {...register('email')} />
                  {errors.email && <p className="error">{errors.email.message}</p>}

                  <textarea placeholder="Message" {...register('message')}></textarea>
                  {errors.message && <p className="error">{errors.message.message}</p>}

                  <button type="submit" className="btn-one rounded-0 w-100" data-splitting data-text="Submit Now">Submit Now</button>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-four__image imageLeftToRight wow light-area">
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

          <h5 className="contact-four__brand-text light-area mt-50">
            2,600 Companies and Individuals Trust Us.
            <i className="fa-regular fa-chevron-right mx-1" />
            <Link href="/" className="hover-link-light fw-600"> View All Clients</Link>
          </h5>
        </div>
      </div>

      <div className="contact-four__rectangle light-area">
        <div className="item-one wow" />
        <div className="item-two wow" />
        <div className="item-three wow" />
      </div>
    </section>
  )
}

export default Contact