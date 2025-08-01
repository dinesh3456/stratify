import React from "react";
import CounterUp from '../../elements/CounterUp';

function Feature() {
    return (
        <>
            <section className="feature-four-area light-area">
                <div className="feature-four__wrp">
                    <div className="row g-5 g-lg-0 align-items-end">
                        
                        {/* Feature Item 1 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-four__item about__funfact">
                                <h4 className="color-light wow splt-txt mb-30" data-splitting>Our user centered design</h4>
                                <div>
                                    <ul>
                                        <li className="icon">
                                            {/* Icon SVG */}
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 26.25C6.87138 26.25 6.74188 26.2211 6.62025 26.1634C6.31838 26.0173 6.125 25.7119 6.125 25.375V21H3.5C2.05275 21 0.875 19.8223 0.875 18.375V4.375C0.875 2.92775 2.05275 1.75 3.5 1.75H24.5C25.9473 1.75 27.125 2.92775 27.125 4.375V18.375C27.125 19.8223 25.9473 21 24.5 21H13.8696L7.54688 26.0584C7.3885 26.1852 7.19513 26.25 7 26.25ZM3.5 3.5C3.017 3.5 2.625 3.89287 2.625 4.375V18.375C2.625 18.8571 3.017 19.25 3.5 19.25H7C7.48387 19.25 7.875 19.6411 7.875 20.125V23.555L13.0156 19.4416C13.1714 19.3174 13.363 19.25 13.5625 19.25H24.5C24.983 19.25 25.375 18.8571 25.375 18.375V4.375C25.375 3.89287 24.983 3.5 24.5 3.5H3.5Z" fill="white" />
                                                <path d="M21 10.5H7C6.51613 10.5 6.125 10.108 6.125 9.625C6.125 9.142 6.51613 8.75 7 8.75H21C21.4839 8.75 21.875 9.142 21.875 9.625C21.875 10.108 21.4839 10.5 21 10.5Z" fill="white" />
                                                <path d="M14 14H7C6.51613 14 6.125 13.608 6.125 13.125C6.125 12.642 6.51613 12.25 7 12.25H14C14.4839 12.25 14.875 12.642 14.875 13.125C14.875 13.608 14.4839 14 14 14Z" fill="white" />
                                            </svg>
                                        </li>
                                        <li>
                                            <h3><span className="count"><CounterUp end={200} /></span>k<sup>+</sup></h3>
                                        </li>
                                    </ul>
                                    <p className="text">Trusted by Customers Around the Globe</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Item 2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-four__item item-middle">
                                <img src="assets/images/feature/feature-four-user.png" alt="Total Customers" />
                                <h4 className="title mt-30 mb-15 wow splt-txt" data-splitting>Total Number of Customers</h4>
                                <p className="text">Helps assess the correlation between customer base size and revenue generation.</p>
                            </div>
                        </div>

                        {/* Newsletter Form */}
                        <div className="col-md-6 col-lg-4">
                            <div className="footer__item-last feature-four__item">
                                <h4 className="title">Newsletter</h4>
                                <form className="mailUs mt-10" onSubmit={(e) => e.preventDefault()}>
                                    <label htmlFor="newsletter-email" className="sr-only">Your Email</label>
                                    <span className="text-white"><i className="fa-light fa-envelope" /></span>
                                    <input 
                                        type="email" 
                                        id="newsletter-email" 
                                        name="email" 
                                        placeholder="Enter your email" 
                                        required 
                                    />
                                    <button type="submit" aria-label="Subscribe">
                                        <i className="fa-sharp fa-solid text-white fa-paper-plane" />
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature;
