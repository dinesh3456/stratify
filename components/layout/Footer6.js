import React from 'react';
import Link from 'next/link';
import ServicesList from '../elements/ServicesList';
import UsefulLinks from '../elements/UsefulLinks';
import SocialLinks2 from '../elements/SocialLinks2';

const Footer6 = () => {
    return (
        <>

        <footer className="footer-six-area">
            <div className="footer-six__wrp">
                <div className="container">
                    <div className="row g-5 g-lg-4">
                        <div className="col-lg-6 col-xl-3 col-xxl-4">
                            <div className="footer-six__item">
                                <Link href="/" className="logo">
                                    <img src="assets/images/logo/logo-dark.png" alt="logo" />
                                </Link>
                                <p className="mt-30">We are professional organization that offers <br /> specialized expertise
                                    advice.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 col-xxl-3">
                            <div className="footer-six__item address">
                                <h4 className="title">Address</h4>
                                <ul>
                                    <li><Link href="/">4140 Parker Rd. Allentown, <br /> New Mexico 31134</Link></li>
                                    <li><Link href="/">(000) 222-0000</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-2 col-xxl-2">
                            <div className="footer-six__item">
                                <h4 className="title">Service</h4>
                                <ServicesList />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-2 col-xxl-2">
                            <div className="footer-six__item">
                                <h4 className="title">Useful links</h4>
                                <UsefulLinks />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-2 col-xxl-1">
                            <div className="footer-six__item">
                                <h4 className="title">Follow Us</h4>
                                <SocialLinks2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-six__copyright">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-1 gap-sm-4">
                        <p>&copy; 2025 <Link href="/">ThemeMascot</Link> All Rights Reserved.</p>
                        <Link href="/" className="policy">Privacy & Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>

        </>
    );
};

export default Footer6;