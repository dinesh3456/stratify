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
                    <div className="faq__item">
                        <div className="section-header mb-30">
                            <h6>To know more about us</h6>
                            <h2 className="wow splt-txt" data-splitting>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq__accordion wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 1 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(1)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How can financial consulting help my business/personal finances?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 2 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(2)} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What qualifications and certifications do your advisors have?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 3 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(3)} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is the process for working with your firm?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 4 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(4)} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            How do you charge for your services?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 5 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(5)} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Can you provide examples of successful client outcomes?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={isActive.key == 6 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(6)} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            What is your approach to investment planning and management?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="faq__image gsap__parallax imageRightToLeft wow">
                        <img src="assets/images/faq/faq-five-image.jpg" alt="image" />
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Faqs