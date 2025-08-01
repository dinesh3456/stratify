import React from 'react'
import Link from 'next/link'

function Features() {
    return (
        <>

        <section className="feature-two-area pt-130 pb-130">
            <div className="container">
                <div className="feature-two__wrp">
                    <div className="section-header text-center mb-50">
                        <h6>OUR SPECIALIZE</h6>
                        <h2 className="wow splt-txt" data-splitting>Complete Features</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="feature-two__item dark-mode">
                                <div className="feature__icon">
                                    <svg width="91" height="74" viewBox="0 0 91 74" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M45.6823 73.9986C45.368 73.9986 45.0621 73.8655 44.8388 73.6244L0.314609 25.0699C-0.0327193 24.6874 -0.0988771 24.1137 0.157484 23.6646L11.6772 3.04208C11.8839 2.67619 12.2644 2.44336 12.6778 2.44336H18.7313C19.368 2.44336 19.889 2.97555 19.889 3.63248C19.889 4.28941 19.368 4.8216 18.7313 4.8216H13.3477L2.58878 24.0804L45.6823 71.0715L88.3954 24.1137L76.4126 4.82992H45.5004C44.8636 4.82992 44.3426 4.29773 44.3426 3.6408C44.3426 2.98387 44.8636 2.45167 45.5004 2.45167H77.0411C77.438 2.45167 77.8019 2.65956 78.0169 3.0005L90.8184 23.623C91.0996 24.0804 91.05 24.6791 90.6861 25.0699L46.5258 73.6244C46.3025 73.8655 45.9965 73.9986 45.6823 73.9986Z"
                                            fill="white" />
                                        <path
                                            d="M65.0673 52.6864C64.7696 52.6864 64.4719 52.57 64.2486 52.3371L18.2773 4.4729C17.8307 4.00722 17.8307 3.25051 18.2855 2.79316C18.7404 2.3358 19.4681 2.3358 19.9229 2.80147L65.886 50.6657C66.3326 51.1314 66.3326 51.8881 65.8778 52.3455C65.6545 52.57 65.365 52.6864 65.0673 52.6864Z"
                                            fill="white" />
                                        <path
                                            d="M37.0564 9.50416C34.5093 9.50416 32.4336 7.37538 32.4336 4.75599C32.4336 2.13659 34.5093 0.0078125 37.0564 0.0078125C39.6034 0.0078125 41.6791 2.13659 41.6791 4.75599C41.6874 7.37538 39.6117 9.50416 37.0564 9.50416ZM37.0564 2.37774C35.7828 2.37774 34.7408 3.44213 34.7408 4.75599C34.7408 6.06984 35.7746 7.13423 37.0564 7.13423C38.3299 7.13423 39.3719 6.06984 39.3719 4.75599C39.3719 3.44213 38.3382 2.37774 37.0564 2.37774Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <div className="feature__content">
                                    <h4><Link className="hover-link" href="/page-service-details">Punctual Service
                                            Delivery</Link></h4>
                                    <p>Punctual Service Delivery
                                        We specialize in serving industries like healthcare, finance customized
                                        solutions
                                        tailored to their unique needs.</p>
                                </div>
                                <Link href="/page-service-details" className="readMore-btn">Read More <i
                                        className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="feature-two__item dark-mode active">
                                <div className="feature__icon">
                                    <svg width="91" height="74" viewBox="0 0 91 74" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1349_19225)">
                                            <path
                                                d="M35.9189 74C35.6425 74 35.3735 73.887 35.1793 73.6837L0.306297 37.7645C0.11206 37.5611 0 37.2824 0 37.0038C0 36.7176 0.11206 36.4464 0.306297 36.2431L35.1793 0.316336C35.5902 -0.105445 36.2476 -0.105445 36.6585 0.316336L71.5315 36.2431C71.9424 36.6648 71.9424 37.3427 71.5315 37.7645L36.6585 73.6912C36.4568 73.887 36.1953 74 35.9189 74ZM2.52508 37.0038L35.9189 71.4091L69.3127 37.0038L35.9189 2.59847L2.52508 37.0038Z"
                                                fill="white" />
                                            <path
                                                d="M62.9324 65.9115C62.6634 65.9115 62.3945 65.8061 62.1928 65.5952L53.1234 56.2557C52.7125 55.834 52.7125 55.1561 53.1234 54.7343C53.5343 54.3125 54.1917 54.3125 54.6026 54.7343L62.9324 63.313L88.4745 36.9969L62.9324 10.6883L36.6506 37.7652C36.2397 38.1869 35.5823 38.1869 35.1714 37.7652C34.7606 37.3434 34.7606 36.6655 35.1714 36.2437L62.1928 8.40618C62.6037 7.9844 63.2611 7.9844 63.672 8.40618L90.6933 36.2437C91.1042 36.6655 91.1042 37.3434 90.6933 37.7652L63.672 65.5952C63.4703 65.8061 63.2013 65.9115 62.9324 65.9115Z"
                                                fill="white" />
                                            <path
                                                d="M29.2034 48.2185C26.9025 48.2185 25.0273 46.2904 25.0273 43.9179C25.0273 41.5453 26.9025 39.6172 29.2034 39.6172C31.5044 39.6172 33.3795 41.5453 33.3795 43.9179C33.3795 46.2904 31.5119 48.2185 29.2034 48.2185ZM29.2034 41.7638C28.053 41.7638 27.1117 42.7278 27.1117 43.9179C27.1117 45.1079 28.0455 46.0719 29.2034 46.0719C30.3614 46.0719 31.2952 45.1079 31.2952 43.9179C31.2952 42.7278 30.3539 41.7638 29.2034 41.7638Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1349_19225">
                                                <rect width="91" height="74" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="feature__content">
                                    <h4><Link className="hover-link" href="/page-service-details">Cutting-Edge
                                            Technology</Link></h4>
                                    <p>We focus on key sectors like healthcare, finance, and manufacturing, crafting
                                        bespoke
                                        solutions tailored to address
                                        their distinct challenges."</p>
                                </div>
                                <Link href="/page-service-details" className="readMore-btn">Read More <i
                                        className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="feature-two__item dark-mode">
                                <div className="feature__icon">
                                    <svg width="72" height="74" viewBox="0 0 72 74" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1349_19250)">
                                            <path
                                                d="M36.0361 73.9996C35.8251 73.9996 35.6203 73.9122 35.4714 73.7624L0.234672 37.5426C-0.0756197 37.2243 -0.0756197 36.7063 0.234672 36.3879L35.4031 0.236787C35.7134 -0.0815331 36.2161 -0.0815331 36.5263 0.236787L71.7692 36.4566C72.0795 36.7749 72.0795 37.293 71.7692 37.6113L36.6008 73.7562C36.4457 73.9122 36.2471 73.9996 36.0361 73.9996ZM1.91645 36.9622L36.0299 72.0273L70.0751 37.0371L35.9678 1.97194L1.91645 36.9622Z"
                                                fill="white" />
                                            <path
                                                d="M35.3855 53.0213C35.1807 53.0213 34.9759 52.9401 34.8208 52.7841L22.7132 40.3384C22.4029 40.0201 22.4029 39.502 22.7132 39.1837L31.6744 29.9712C31.9847 29.6528 32.4874 29.6528 32.7977 29.9712C33.1079 30.2895 33.1079 30.8075 32.7977 31.1258L24.4012 39.7642L35.3855 51.0489L60.1157 25.6333C60.426 25.315 60.9287 25.315 61.239 25.6333C61.5493 25.9516 61.5493 26.4696 61.239 26.788L35.9502 52.7841C35.7951 52.9401 35.5903 53.0213 35.3855 53.0213Z"
                                                fill="white" />
                                            <path
                                                d="M36.4837 28.9913C35.7887 28.9913 35.0874 28.7167 34.5537 28.1736C33.4925 27.0814 33.4925 25.3088 34.5537 24.2165C35.6149 23.1242 37.3463 23.1305 38.4075 24.2227C38.9226 24.7533 39.2081 25.4523 39.2081 26.2013C39.2081 26.9503 38.9288 27.6556 38.4137 28.1799C37.8738 28.7167 37.1788 28.9913 36.4837 28.9913ZM36.4775 25.0279C36.1858 25.0279 35.9004 25.1402 35.677 25.3649C35.2364 25.8206 35.2364 26.5571 35.6832 27.0127C36.1238 27.4683 36.8437 27.4683 37.2843 27.0127C37.4953 26.7942 37.6132 26.5009 37.6132 26.1888C37.6132 25.8767 37.4953 25.5834 37.2781 25.3649C37.0547 25.1465 36.763 25.0279 36.4775 25.0279Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1349_19250">
                                                <rect width="72" height="74" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="feature__content">
                                    <h4><Link className="hover-link" href="/page-service-details">Manage Investment</Link>
                                    </h4>
                                    <p>We cater to industries like healthcare, finance, and manufacturing, crafting
                                        bespoke
                                        solutions uniquely tailored to
                                        address their distinct challenges.</p>
                                </div>
                                <Link href="/page-service-details" className="readMore-btn">Read More <i
                                        className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="feature-two__text mt-50 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <img src="assets/images/icon/users.png" alt="image" />
                        <p>Save your precious time and effort spent for finding a solution. <Link href="/contact">
                                Contact Us Now</Link></p>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Features