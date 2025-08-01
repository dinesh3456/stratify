import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
    },
};

const blogPosts = [
    {
        title: "Creating innovative strategies for exceptional future outcomes.",
        category: "Branding",
        date: "May 15, 2024",
        imageUrl: "assets/images/blog/blog-two-image1.jpg",
        link: "/news-details"
    },
    {
        title: "Stratify Agency transforms the way we work through the power of AI",
        category: "Marketing",
        date: "May 20, 2024",
        imageUrl: "assets/images/blog/blog-two-image2.jpg",
        link: "/news-details"
    },
    {
        title: "Common UX pinpoints in Dashboard-related projects.",
        category: "Design Trends",
        date: "May 25, 2024",
        imageUrl: "assets/images/blog/blog-two-image3.jpg",
        link: "/news-details"
    },
    {
        title: "Creating innovative strategies for exceptional future outcomes.",
        category: "Branding",
        date: "May 15, 2024",
        imageUrl: "assets/images/blog/blog-two-image4.jpg",
        link: "/news-details"
    },
    // More blog posts can be added here
];

function News() {
    return (
        <>
            <section id='blog-menu' className="blog-two-area pt-130 pb-130">
                <div className="container">
                    <div className="section-header text-center mb-50">
                        <h2 className="wow splt-txt" data-splitting>Check Latest Blog Post <br /> from Blog List</h2>
                    </div>
                    <div className="blog-two__wrp">
                        <div className="swiper blog-two__slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                {blogPosts.map((post, index) => (
                                    <SwiperSlide key={index} className="swiper-slide">
                                        <div className="blog-two__item">
                                            <div className="blog__image">
                                                <img src={post.imageUrl} alt="image" />
                                                <img src={post.imageUrl} alt="image" />
                                            </div>
                                            <div className="blog__content">
                                                <ul>
                                                    <li>{post.category}</li>
                                                    <li className="date">{post.date}</li>
                                                </ul>
                                                <h4 className="mt-10"><Link href={post.link}>{post.title}</Link></h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default News;
