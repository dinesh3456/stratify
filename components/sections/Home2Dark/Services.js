import React from "react";
import Link from 'next/link';

function Services() {

    return (
        <>
            
            <section id="service-menu" className="service-aera pt-130 pb-130">
                <div className="container">
                    <div className="section-header mb-50">
                        <h2 className="wow splt-txt" data-splitting>We Are Experts in Our Fields</h2>
                        <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">True experts in the field will offer you the best strategy to navigate <br /> your investments.</p>
                    </div>
                    <div className="service__wrp">
                        <div className="row g-5">
                            <div className="col-md-6 col-xl-3">
                                <div className="service__item dark-mode">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_298_26830)">
                                                <path
                                                    d="M8.47298 20.998L3.02936 15.5544L16.1957 2.38808L21.6393 7.83171L8.47298 20.998ZM2.52052 16.5133L7.51409 21.5069L0.0273438 24.0001L2.52052 16.5133ZM23.3136 6.16459L22.3694 7.10879L16.9186 1.65797L17.8628 0.713767C18.8139 -0.237922 20.3563 -0.237922 21.3074 0.713767L23.3136 2.72001C24.2578 3.67429 24.2578 5.2106 23.3136 6.16459Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_298_26830">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4><Link href="/page-service-details">Business Strategy and Planning</Link></h4>
                                    <div className="image">
                                        <img src="assets/images/service/service-image1.jpg" alt="image" />
                                    </div>
                                    <p className="text">Business Consulting, Strategy, Branding Identity, Interaction Design & Development, & SEO</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="service__item dark-mode second-child">
                                    <div className="icon">
                                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_356_28149)">
                                                <path
                                                    d="M13.4107 18.697C12.913 19.5257 12.1843 20.2082 11.2245 20.7323C10.2589 21.2563 9.12135 21.5488 7.80019 21.6037V23.773H6.13542V21.5732C4.2929 21.4148 2.81178 20.848 1.68021 19.873C0.548633 18.898 -0.0497396 17.5757 -0.114909 15.8938H4.62467C4.73131 16.9663 5.2349 17.6549 6.13542 17.9596V13.7245C4.77871 13.3649 3.70046 13.0176 2.8888 12.6763C2.08307 12.3351 1.37214 11.7927 0.767839 11.0432C0.157618 10.2937 -0.144531 9.26383 -0.144531 7.95977C-0.144531 6.33273 0.441993 5.02867 1.61504 4.04758C2.78809 3.06648 4.2929 2.51195 6.13542 2.38398V0.220703H7.80019V2.39008C9.62493 2.53633 11.0646 3.07867 12.1251 4.0232C13.1855 4.96773 13.7721 6.28398 13.8965 7.95977H9.12728C9.02064 6.99695 8.58223 6.3693 7.80019 6.08289V10.2388C9.23984 10.6471 10.3536 11.0188 11.1357 11.3357C11.9177 11.6587 12.6168 12.1888 13.2329 12.9323C13.8491 13.6757 14.1572 14.6873 14.1572 15.973C14.1572 16.942 13.9024 17.8804 13.4107 18.697ZM4.96829 8.87992C5.2349 9.18461 5.62591 9.45273 6.12949 9.6843V5.96102C5.64368 6.05242 5.25859 6.24133 4.98607 6.53992C4.70762 6.83242 4.57135 7.2407 4.57135 7.75867C4.56543 8.19742 4.70169 8.57523 4.96829 8.87992ZM9.03249 17.399C9.33463 17.0577 9.48867 16.6373 9.48867 16.1376C9.48867 15.6745 9.34648 15.2966 9.05618 14.998C8.77181 14.7055 8.35117 14.4496 7.79427 14.2363V18.0388C8.31562 17.9535 8.73034 17.7402 9.03249 17.399Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_356_28149">
                                                    <rect width="14" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4><Link href="/page-service-details">International Business Consulting</Link></h4>
                                    <div className="image">
                                        <img src="assets/images/service/service-image2.jpg" alt="image" />
                                    </div>
                                    <p className="text">Financial Consulting, Insurance Consulting, Financial Management, Investment</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="service__item dark-mode">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.75 13.5H2.25C1.83579 13.5 1.5 13.8358 1.5 14.25V21.75C1.5 22.1642 1.83579 22.5 2.25 22.5H6.75C7.16421 22.5 7.5 22.1642 7.5 21.75V14.25C7.5 13.8358 7.16421 13.5 6.75 13.5Z"
                                                fill="white" />
                                            <path
                                                d="M21.75 7.5H17.25C16.8358 7.5 16.5 7.83579 16.5 8.25V21.75C16.5 22.1642 16.8358 22.5 17.25 22.5H21.75C22.1642 22.5 22.5 22.1642 22.5 21.75V8.25C22.5 7.83579 22.1642 7.5 21.75 7.5Z"
                                                fill="white" />
                                            <path
                                                d="M14.25 1.5H9.75C9.33579 1.5 9 1.83579 9 2.25V21.75C9 22.1642 9.33579 22.5 9.75 22.5H14.25C14.6642 22.5 15 22.1642 15 21.75V2.25C15 1.83579 14.6642 1.5 14.25 1.5Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <h4><Link href="/page-service-details">E-Commerce and Market</Link></h4>
                                    <div className="image">
                                        <img src="assets/images/service/service-image3.jpg" alt="image" />
                                    </div>
                                    <p className="text">Analysis Market. E-Commerce Strategy, <br /> Consumer Consulting</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="service__item dark-mode last-child">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.57141 12.0002C9.41918 12.0002 10.2479 11.7488 10.9528 11.2778C11.6577 10.8068 12.2071 10.1373 12.5315 9.35409C12.8558 8.57084 12.9407 7.70898 12.7752 6.8775C12.6098 6.04603 12.2015 5.2823 11.602 4.68288C11.0025 4.08347 10.2387 3.67531 9.40715 3.51C8.57565 3.3447 7.71381 3.42969 6.93061 3.75422C6.14741 4.07875 5.47804 4.62825 5.00715 5.33322C4.53627 6.03819 4.28501 6.86696 4.28516 7.71474C4.28635 8.85109 4.73834 9.94054 5.54193 10.744C6.34552 11.5474 7.43506 11.9992 8.57141 12.0002Z"
                                                fill="white" />
                                            <path
                                                d="M14.1788 15.5405C13.0926 14.4264 11.699 13.6614 10.176 13.3432C8.65303 13.0249 7.06973 13.1679 5.62839 13.7539C4.18705 14.3398 2.95309 15.3422 2.08414 16.6328C1.21519 17.9234 0.750703 19.4438 0.75 20.9997C0.75 21.1986 0.829018 21.3894 0.96967 21.53C1.11032 21.6707 1.30109 21.7497 1.5 21.7497H15.645C15.8439 21.7497 16.0347 21.6707 16.1753 21.53C16.316 21.3894 16.395 21.1986 16.395 20.9997C16.3979 20.2044 16.2751 19.4137 16.0312 18.6567C15.6681 17.4864 15.0333 16.4186 14.1788 15.5405Z"
                                                fill="white" />
                                            <path
                                                d="M17.625 12.375C19.3854 12.375 20.8125 10.9479 20.8125 9.1875C20.8125 7.42709 19.3854 6 17.625 6C15.8646 6 14.4375 7.42709 14.4375 9.1875C14.4375 10.9479 15.8646 12.375 17.625 12.375Z"
                                                fill="white" />
                                            <path
                                                d="M17.626 13.2529C16.6206 13.2567 15.6348 13.5305 14.7715 14.0457C14.9342 14.1912 15.0985 14.3344 15.2522 14.4919C16.2735 15.5416 17.0321 16.8178 17.4662 18.2164C17.6149 18.6769 17.7246 19.1491 17.794 19.6279H22.501C22.6999 19.6279 22.8907 19.5489 23.0313 19.4083C23.172 19.2676 23.251 19.0768 23.251 18.8779C23.2494 17.3866 22.6563 15.9568 21.6017 14.9022C20.5472 13.8477 19.1173 13.2545 17.626 13.2529Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <h4><Link href="/page-service-details">Human Resources and Management</Link></h4>
                                    <div className="image">
                                        <img src="assets/images/service/service-image4.jpg" alt="image" />
                                    </div>
                                    <p className="text">HR Consulting, Legal Advice, and Business ManagementSEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Services