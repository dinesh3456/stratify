import React, { useState } from 'react';
import Link from 'next/link';
import SocialLinks from '../elements/SocialLinks';
import ServicesList from '../elements/ServicesList';
import MenuList from '../elements/MenuList';

const FooterDark = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email');
            return;
        }

        // Clear error & show loading
        setError('');
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess('Thanks for subscribing!');
            setEmail('');

            // Clear success message after 3 sec
            setTimeout(() => setSuccess(''), 3000);
        }, 1500);
    };

    return (
        <>
            <footer className="footer-area bg-sub">
                <div className="footer__shape-left">
                    <img src="assets/images/shape/footer-shape-left.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="footer__wrp light-area pt-130 pb-130">
                        <div className="footer__left">
                            <Link href="/" className="logo">
                                <img src="assets/images/logo/logo-light.png" alt="logo" />
                            </Link>
                            <p className="mt-30">We are professional organization that offers specialized expertise advice.</p>
                        </div>
                        <div className="footer__right">
                            <div className="footer__item-wrp">
                                <div className="footer__item">
                                    <h4 className="title">Service</h4>
                                    <ServicesList />
                                </div>
                                <div className="footer__item">
                                    <h4 className="title">Company</h4>
                                    <MenuList />
                                </div>
                                <div className="footer__item-last">
                                    <h4 className="title">Newsletter</h4>
                                    <p>Feel free to reach out if you want to collaborate with us, or simply chat.</p>
                                    <div className="mailUs mt-30">
                                        <form onSubmit={handleSubmit}>
                                            <span>
                                                <i className="fa-light fa-envelope" aria-hidden="true" />
                                                <label htmlFor="newsletter-email" className="sr-only">Your Email</label>
                                            </span>
                                            <input
                                                type="email"
                                                id="newsletter-email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <button type="submit" disabled={loading}>
                                                <i className="fa-sharp fa-solid fa-paper-plane" aria-hidden="true" />
                                                <span className="sr-only">Submit</span>
                                            </button>
                                        </form>

                                        {/* Show error */}
                                        {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}

                                        {/* Show success */}
                                        {success && <p style={{ color: 'green', marginTop: '5px' }}>{success}</p>}

                                        {/* Show loading */}
                                        {loading && <p style={{ color: 'blue', marginTop: '5px' }}>Sending...</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="footer__item-wrp mt-80">
                                <div className="footer__item">
                                    <h4 className="title">New York</h4>
                                    <ul>
                                        <li><Link href="/">2464 Royal Ln. Mesa, New Jersey 45463</Link></li>
                                        <li><Link href="/">(000) 222-0000 info@yourwebsite.com</Link></li>
                                    </ul>
                                </div>
                                <div className="footer__item">
                                    <h4 className="title">London</h4>
                                    <ul>
                                        <li><Link href="/">1901 Thornridge Cir. Shiloh, Hawaii 81063</Link></li>
                                        <li><Link href="/">(229) 555-0109 info@yourwebsite.com</Link></li>
                                    </ul>
                                </div>
                                <div className="footer__item-last">
                                    <h4 className="title">Follow Us</h4>
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright light-area">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-1 gap-sm-4">
                            <p>&copy; 2025 <Link href="/">ThemeMascot</Link> Agency</p>
                            <Link href="/" className="policy">Privacy & Cookie Policy</Link>
                        </div>
                    </div>
                </div>
                <div className="footer__rectangle">
                    <div className="item wow" />
                    <div className="item-dark wow" />
                </div>
            </footer>
        </>
    );
};

export default FooterDark;