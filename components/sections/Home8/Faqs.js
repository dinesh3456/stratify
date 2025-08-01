import React, { useState } from 'react';
import Link from 'next/link';


function Faqs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });
    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false, 
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>

        <section className="faq-area bg-sub">
            <div className="row g-0 align-items-center">
                <div className="col-xl-6">
                    <div className="faq__image imageLeftToRight wow">
                        <img src="assets/images/faq/faq-eight-image.jpg" alt="image" />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="faq__item">
                        <div className="section-header mb-30">
                            <h6>To know more about us</h6>
                            <h2 className="wow splt-txt" data-splitting>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq__accordion wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 1 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(1)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is your company’s mission, vision, and core values?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of
                                                municipalities’
                                                transportation planning traffic engineering, or economic development
                                                departments.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 2 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(2)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            What is your approach to financial planning?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of
                                                municipalities’
                                                transportation planning traffic engineering, or economic development
                                                departments.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 3 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(3)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            What are your current customer acquisition costs (CAC)?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of
                                                municipalities’
                                                transportation planning traffic engineering, or economic development
                                                departments.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 4 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(4)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            How do you currently handle risk management?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of
                                                municipalities’
                                                transportation planning, traffic engineering or economic development
                                                departments.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5>
                                <Link href="/page-faq" className="faq-btn hover-link mt-30">Check More Questions Now
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1095_37691)">
                                            <path
                                                d="M28.8083 14.0351L22.2176 7.44426C21.9808 7.1678 21.5647 7.13557 21.2883 7.37238C21.0118 7.60914 20.9796 8.02521 21.2164 8.30167C21.2385 8.32744 21.2625 8.35151 21.2883 8.37354L26.752 13.8439H0.659059C0.295092 13.8439 0 14.139 0 14.503C0 14.8671 0.295092 15.1621 0.659059 15.1621H26.752L21.2883 20.6258C21.0118 20.8626 20.9796 21.2787 21.2164 21.5551C21.4532 21.8316 21.8692 21.8638 22.1457 21.627C22.1715 21.6049 22.1955 21.5809 22.2176 21.5551L28.8084 14.9643C29.0639 14.7073 29.0639 14.2922 28.8083 14.0351Z"
                                                fill="#121C27" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1095_37691">
                                                <rect width="29" height="29" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Faqs;
