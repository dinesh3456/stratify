import React from 'react';
import Link from 'next/link';


function News() {
    return (
        <>

        <section id='blog-menu' className="blog-five-area pt-130 pb-130">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h6>Our Blog</h6>
                    <h2 className="wow splt-txt" data-splitting>Check Latest Blog Post <br /> from Blog List</h2>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-xl-3 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="blog-five__item">
                            <div className="image">
                                <img src="assets/images/blog/blog-five-image1.jpg" alt="image" />
                                <ul>
                                    <li>Branding</li>
                                    <li className="date">May 15, 2024</li>
                                </ul>
                            </div>
                            <div className="content">
                                <h4 className="mt-10"><Link href="/news-details">Consulting Industry Evolves to Meet Changing Business Landscape</Link></h4>
                                <Link href="/news-details" className="readMore-btn">Read More <i className="fa-regular fa-arrow-right-long" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-five__item">
                            <div className="image">
                                <img src="assets/images/blog/blog-five-image2.jpg" alt="image" />
                                <ul>
                                    <li>Consulting</li>
                                    <li className="date">May 20, 2024</li>
                                </ul>
                            </div>
                            <div className="content">
                                <h4 className="mt-10"><Link href="/news-details">Stratify Agency transforms the way we work through the power of AI</Link></h4>
                                <Link href="/news-details" className="readMore-btn">Read More <i className="fa-regular fa-arrow-right-long" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="blog-five__item">
                            <div className="image">
                                <img src="assets/images/blog/blog-five-image3.jpg" alt="image" />
                                <ul>
                                    <li>Business</li>
                                    <li className="date">May 25, 2024</li>
                                </ul>
                            </div>
                            <div className="content">
                                <h4 className="mt-10"><Link href="/news-details">Common UX pinpoints in Dashboard related projects.</Link></h4>
                                <Link href="/news-details" className="readMore-btn">Read More <i className="fa-regular fa-arrow-right-long" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="blog-five__item">
                            <div className="image">
                                <img src="assets/images/blog/blog-five-image4.jpg" alt="image" />
                                <ul>
                                    <li>Strategy</li>
                                    <li className="date">May 30, 2024</li>
                                </ul>
                            </div>
                            <div className="content">
                                <h4 className="mt-10"><Link href="/news-details">Creating innovative strategies for exceptional future outcomes.</Link></h4>
                                <Link href="/news-details" className="readMore-btn">Read More <i className="fa-regular fa-arrow-right-long" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default News
