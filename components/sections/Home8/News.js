import React from 'react';
import Link from 'next/link';

function News() {
    return (
        <>

        <section id='blog-menu' className="blog-area pb-130">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h2 className="wow splt-txt" data-splitting>Check Latest Blog Post <br /> from Blog List</h2>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="blog__item">
                            <div className="blog__image">
                                <img src="assets/images/blog/blog-image1.jpg" alt="image" />
                                <img src="assets/images/blog/blog-image1.jpg" alt="image" />
                            </div>
                            <div className="blog__content">
                                <ul>
                                    <li>Branding</li>
                                    <li className="date">May 15, 2024</li>
                                </ul>
                                <h4><Link href="/news-details">Creating innovative strategies for exceptional future outcomes.</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog__item">
                            <div className="blog__image">
                                <img src="assets/images/blog/blog-image2.jpg" alt="image" />
                                <img src="assets/images/blog/blog-image2.jpg" alt="image" />
                            </div>
                            <div className="blog__content">
                                <ul>
                                    <li>Design Trends</li>
                                    <li className="date">May 25, 2024</li>
                                </ul>
                                <h4><Link href="/news-details">Stratify Agency transforms the way we work through the power of AI-driven innovation.</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="blog__item">
                            <div className="blog__image">
                                <img src="assets/images/blog/blog-image3.jpg" alt="image" />
                                <img src="assets/images/blog/blog-image3.jpg" alt="image" />
                            </div>
                            <div className="blog__content">
                                <ul>
                                    <li>Marketing</li>
                                    <li className="date">May 30, 2024</li>
                                </ul>
                                <h4><Link href="/news-details">Common UX pinpoints in Dashboard-related projects.</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default News;