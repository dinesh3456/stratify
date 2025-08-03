import React, { useState } from "react";
import Link from "next/link";
import SocialLinks from "../elements/SocialLinks";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("Thanks for subscribing!");
      setEmail("");

      setTimeout(() => setSuccess(""), 3000);
    }, 1500);
  };

  return (
    <footer className="footer-area">
      {/* Shapes */}
      <div className="footer__shape-left">
        <img src="/assets/images/shape/footer-shape-left.png" alt="shape" />
      </div>

      <div className="container">
        <div className="footer__wrp pt-130 pb-130">
          {/* Left */}
          <div className="footer__left" style={{ maxWidth: "350px" }}>
            <Link href="/" className="logo">
              <img src="assets/images/logo/logo-light.png" alt="logo" />
            </Link>
            <p
              className="mt-30"
              style={{ lineHeight: "1.6", marginRight: "20px" }}
            >
              We help businesses scale smarter, move faster, and stay secure—
              leveraging cutting-edge cloud technologies to turn bold ideas into
              reality.
            </p>

            {/* Social Links */}
            <div className="mt-60" style={{ display: "flex", gap: "32px" }}>
              <SocialLinks />
            </div>
          </div>

          {/* Right */}
          <div className="footer__right">
            <div className="footer__item-wrp">
              {/* IT Solution */}
              <div className="footer__item">
                <h4 className="title">IT Solution</h4>
                <ul>
                  <li>
                    <Link href="/">IT Management</Link>
                  </li>
                  <li>
                    <Link href="/">SEO Optimization</Link>
                  </li>
                  <li>
                    <Link href="/">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="/">Data Security</Link>
                  </li>
                </ul>
              </div>

              {/* Quick Link */}
              <div className="footer__item">
                <h4 className="title">Quick Link</h4>
                <ul>
                  <li>
                    <Link href="/">About Strat</Link>
                  </li>
                  <li>
                    <Link href="/">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="/">Our Projects</Link>
                  </li>
                  <li>
                    <Link href="/">Our Team</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="footer__item-last">
                <h4 className="title">Contact Us</h4>
                <div className="footer__contact-info">
                  <p className="address">
                    Suite 304, 800 N King Street,
                    <br />
                    Wilmington, DE 19801, United States
                  </p>

                  <div className="opening-hours mt-20">
                    <p className="hours-title">Opening Hours:</p>
                    <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
                  </div>

                  <div className="phone-info mt-20">
                    <p className="phone-title">Phone Call:</p>
                    <p>
                      <Link href="tel:+13463058999">+1 (346) 305-8999</Link>,{" "}
                      <Link href="tel:+919900297673">+91 9900297673</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-1 gap-sm-4">
            <Link href="/" className="policy">
              Privacy & Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Rectangle Shapes */}
      <div className="footer__rectangle">
        <div className="item wow" />
        <div className="item-dark wow" />
      </div>
    </footer>
  );
};

export default Footer;
