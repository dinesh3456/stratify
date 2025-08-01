import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesList from '../elements/ServicesList';
import MenuLinks from '../elements/MenuList';
import SocialLinks from '../elements/SocialLinks';
import LogoLight from '../../public/assets/images/logo/logo-light.png';

const Footer3 = () => {
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

        <footer className="footer-three-area">
            <div className="footer-three__shape-left">
                <img src="assets/images/shape/footer-three-shape-left.png" alt="shape" />
            </div>
            <div className="footer-three__shape-right">
                <img src="assets/images/shape/footer-three-shape-right.png" alt="shape" />
            </div>
            <div className="container">
                <div className="footer-three__wrp pt-120 pb-120">
                    <div className="footer-three__left">
                        <Link href="/" className="logo"><Image src={LogoLight} alt="logo" /></Link>
                    </div>
                    <div className="footer-three__right">
                        <div className="footer-three__item-wrp">
                            <div className="footer-three__item">
                                <h4 className="title">Service</h4>
                                <ServicesList />
                            </div>
                            <div className="footer-three__item">
                                <h4 className="title">Company</h4>
                                <MenuLinks/>
                            </div>
                            <div className="footer-three__item-last">
                                <h4 className="title">Newsletter</h4>
                                <p>Feel free to reach out if you want to collaborate with us, or simply chat.</p>
                                <div className="mailUs mt-30">
                                    <form onSubmit={handleSubmit}>
                                        <span>
                                            <i className="fa-light fa-envelope" aria-hidden="true" />
                                            <label htmlFor="newsletter-email" className="sr-only">Your Email</label>
                                        </span>
                                        <input type="email" id="newsletter-email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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

                        <div className="footer-three__item-wrp mt-80">
                            <div className="footer-three__item">
                                <h4 className="title">New York</h4>
                                <ul>
                                    <li><Link href="/">2464 Royal Ln. Mesa, New Jersey 45463</Link></li>
                                    <li><Link href="/">(000) 222-0000 info@yourwebsite.com</Link></li>
                                </ul>
                            </div>
                            <div className="footer-three__item">
                                <h4 className="title">London</h4>
                                <ul>
                                    <li><Link href="/">1901 Thornridge Cir. Shiloh, Hawaii 81063</Link></li>
                                    <li><Link href="/">(229) 555-0109 info@yourwebsite.com</Link></li>
                                </ul>
                            </div>
                            <div className="footer-three__item-last">
                                <h4 className="title">Follow Us</h4>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-three__copyright">
                <p>Copyright &copy; 2025 <Link href="/">ThemeMascot</Link> Agency</p>
            </div>
        </footer>

        </>
    );
};

export default Footer3;