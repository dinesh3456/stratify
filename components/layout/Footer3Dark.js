import React from 'react';
import Link from 'next/link';
import ContactInfo from '../elements/ContactInfo';
import UsefulLinks2 from '../elements/UsefulLink2';
import SocialLinks from '../elements/SocialLinks';

function Footer3Dark () {
    return (
        <>

        <footer className="footer-four-area light-area">
            <div className="row g-0 light-area">
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-four__item">
                        <div className="top">
                            <Link href="/" className="logo">
                                <img src="assets/images/logo/logo-light.png" alt="logo" />
                            </Link>
                            <p className="text">We are professional organization that offers specialized expertise advice.</p>
                        </div>
                        <div className="bottom">
                            <p className="copyright-text">&copy; 2025 <Link href="/">Theme Mascot</Link>, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-four__item">
                        <div className="top">
                            <h5 className="title">CONTACT INFO</h5>
                        </div>
                        <div className="bottom">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-four__item">
                        <div className="top">
                            <h5 className="title">USEFUL LINKS</h5>
                        </div>
                        <div className="bottom">
                            <UsefulLinks2 />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-four__item">
                        <div className="top">
                            <h5 className="title">CONNECT</h5>
                        </div>
                        <div className="bottom">
                            <ul>
                                <li>
                                    <h5 className="address-text">Address</h5>
                                    <Link href="/">2464 Royal Ln. Mesa, New Jersey 45463</Link>
                                    <h5 className="address-text">(000) 222-0000</h5>
                                </li>
                            </ul>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    );
};

export default Footer3Dark;