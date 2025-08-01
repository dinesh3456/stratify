import React from 'react';
import Link from 'next/link';
import UsefulLinks from '../elements/UsefulLinks';
import SupportLinks from '../elements/SupportLinks';
import SocialLinks from '../elements/SocialLinks';

const Footer2 = () => {
    return (
        <>

        <footer className="footer-two-area pt-130">
            <div className="container">
                <div className="footer-two__wrp">
                    <div className="footer-two__top">
                        <h2 className="title"><Link href="/contact">Get in Touch<i className="fa-thin fa-arrow-up-right" /></Link>
                        </h2>
                    </div>
                    <div className="footer-two__item-wrp">
                        <div className="row g-5">
                            <div className="col-sm-6 col-xl-3">
                                <div className="footer-two__item">
                                    <Link href="/" className="logo">
                                        <img src="assets/images/logo/logo-light.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-5">
                                <div className="footer-two__item-adress">
                                    <h4 className="title">Address</h4>
                                    <ul>
                                        <li><h4 className="adress-text"><Link href="/">2464 Royal Ln. Mesa, New Jersey 45463</Link></h4></li>
                                        <li><h4 className="adress-text"><Link href="/">(000) 222-0000</Link></h4></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-2">
                                <div className="footer-two__item">
                                    <h4 className="title">Useful Links</h4>
                                    <UsefulLinks />
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-2">
                                <div className="footer-two__item">
                                    <h4 className="title">Support</h4>
                                    <SupportLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-two__bottom">
                        <SocialLinks />
                        <p className="text">&copy; 2025 Stratify is Proudly Powered by <Link href="/">ThemeMascot</Link></p>
                    </div>
                </div>
            </div>
            <div className="footer-two__rectangle-left">
                <div className="item-one wow" />
                <div className="item-two wow" />
                <div className="item-three wow" />
            </div>
            <div className="footer-two__rectangle-right">
                <div className="item-one wow" />
                <div className="item-two wow" />
                <div className="item-three wow" />
            </div>
        </footer>

        </>
    );
};

export default Footer2;