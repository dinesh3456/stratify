import Link from 'next/link';
import React from 'react';

function NewsGrid(){

    return (
        <>
        
            <section className="blog-area pt-130 pb-20">
                <div className="container-lg">
                    <div className="row g-5">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <div className="blog__image">
                                    <img src="assets/images/blog/blog-image1.jpg" alt="image" />
                                    <img src="assets/images/blog/blog-image1.jpg" alt="image" />
                                </div>
                                <div className="blog__content">
                                    <ul>
                                        <li>Branding</li>
                                        <li className="date">May 15, 2025</li>
                                    </ul>
                                    <h4><Link href="/news-details">Creating innovative strategies for exceptional future outcomes.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <div className="blog__image">
                                    <img src="assets/images/blog/blog-image2.jpg" alt="image" />
                                    <img src="assets/images/blog/blog-image2.jpg" alt="image" />
                                </div>
                                <div className="blog__content">
                                    <ul>
                                        <li>Design Trends</li>
                                        <li className="date">May 25, 2025</li>
                                    </ul>
                                    <h4><Link href="/news-details">Stratify Agency transforms the way we work through the power of AI-driven innovation.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <div className="blog__image">
                                    <img src="assets/images/blog/blog-image3.jpg" alt="image" />
                                    <img src="assets/images/blog/blog-image3.jpg" alt="image" />
                                </div>
                                <div className="blog__content">
                                    <ul>
                                        <li>Marketing</li>
                                        <li className="date">May 30, 2025</li>
                                    </ul>
                                    <h4><Link href="/news-details">Common UX pinpoints in Dashboard-related projects.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <div className="blog__image">
                                    <img src="assets/images/blog/blog-image2.jpg" alt="image" />
                                    <img src="assets/images/blog/blog-image2.jpg" alt="image" />
                                </div>
                                <div className="blog__content">
                                    <ul>
                                        <li>Design Trends</li>
                                        <li className="date">May 25, 2025</li>
                                    </ul>
                                    <h4><Link href="/news-details">Stratify Agency transforms the way we work through the power of AI-driven innovation.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <div className="blog__image">
                                    <img src="assets/images/blog/blog-image3.jpg" alt="image" />
                                    <img src="assets/images/blog/blog-image3.jpg" alt="image" />
                                </div>
                                <div className="blog__content">
                                    <ul>
                                        <li>Marketing</li>
                                        <li className="date">May 30, 2025</li>
                                    </ul>
                                    <h4><Link href="/news-details">Common UX pinpoints in Dashboard-related projects.</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <div className="blog__image">
                                    <img src="assets/images/blog/blog-image1.jpg" alt="image" />
                                    <img src="assets/images/blog/blog-image1.jpg" alt="image" />
                                </div>
                                <div className="blog__content">
                                    <ul>
                                        <li>Branding</li>
                                        <li className="date">May 15, 2025</li>
                                    </ul>
                                    <h4><Link href="/news-details">Creating innovative strategies for exceptional future outcomes.</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default NewsGrid;