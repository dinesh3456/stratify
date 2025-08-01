import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (

        <ul>
            <li className="megamenu-li">
                <Link href="/">Home <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu megamenu">
                    <li>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li className="title"><Link href="/">Home Layout</Link></li>
                                    <li><Link href="/">Home Page 01</Link></li>
                                    <li><Link href="/index-2">Home Page 02</Link></li>
                                    <li><Link href="/index-3">Home Page 03</Link></li>
                                    <li><Link href="/index-4">Home Page 04</Link></li>
                                    <li><Link href="/index-5">Home Page 05</Link></li>
                                    <li><Link href="/index-6">Home Page 06</Link></li>
                                    <li><Link href="/index-7">Home Page 07</Link></li>
                                    <li><Link href="/index-8">Home Page 08</Link></li>
                                    <li><Link href="/index-9">Home Page 09</Link></li>
                                    <li><Link href="/index-10">Home Page 10</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><Link href="/index-11">Home Page 11</Link></li>
                                    <li><Link href="/index-12">Home Page 12</Link></li>
                                    <li><Link href="/index-13">Home Page 13</Link></li>
                                    <li className="title new-badge"><Link href="/">Single Layout</Link></li>
                                    <li><Link href="/index-single">Home Single</Link></li>
                                    <li><Link href="/index-2-single">Home Single 02</Link></li>
                                    <li><Link href="/index-3-single">Home Single 03</Link></li>
                                    <li><Link href="/index-4-single">Home Single 04</Link></li>
                                    <li><Link href="/index-5-single">Home Single 05</Link></li>
                                    <li><Link href="/index-6-single">Home Single 06</Link></li>
                                    <li><Link href="/index-7-single">Home Single 07</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><Link href="/index-8-single">Home Single 08</Link></li>
                                    <li><Link href="/index-9-single">Home Single 09</Link></li>
                                    <li><Link href="/index-10-single">Home Single 10</Link></li>                                    
                                    <li><Link href="/index-11-single">Home Single 11</Link></li>
                                    <li><Link href="/index-12-single">Home Single 12</Link></li>
                                    <li><Link href="/index-13-single">Home Single 13</Link></li>
                                    <li className="title new-badge"><Link href="/">Dark Layout</Link></li>
                                    <li><Link href="/index-dark">Home Dark</Link></li>
                                    <li><Link href="/index-2-dark">Home Dark 02</Link></li>
                                    <li><Link href="/index-3-dark">Home Dark 03</Link></li>
                                    <li><Link href="/index-4-dark">Home Dark 04</Link></li>                                    
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className="title new-badge"><Link href="/">Dark Layout</Link></li>
                                    <li><Link href="/index-5-dark">Home Dark 05</Link></li>
                                    <li><Link href="/index-6-dark">Home Dark 06</Link></li>
                                    <li><Link href="/index-7-dark">Home Dark 07</Link></li>
                                    <li><Link href="/index-8-dark">Home Dark 08</Link></li>
                                    <li><Link href="/index-9-dark">Home Dark 09</Link></li>
                                    <li><Link href="/index-10-dark">Home Dark 10</Link></li>
                                    <li><Link href="/index-11-dark">Home Dark 11</Link></li>
                                    <li><Link href="/index-12-dark">Home Dark 12</Link></li>
                                    <li><Link href="/index-13-dark">Home Dark 13</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>

            <li>
                <Link href="/">Pages <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/page-about">About Us</Link></li>
                    <li>
                        <Link href="/">Project <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/page-projects">Project Grid</Link></li>
                            <li><Link href="/page-project-details">Project Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/">Team <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/page-team">Team Grid</Link></li>
                            <li><Link href="/page-team-details">Team Details</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-testimonial">Testimonials</Link></li>
                    <li><Link href="/page-faq">FAQ’s</Link></li>
                    <li><Link href="/page-pricing">Pricing Table</Link></li>
                    <li>
                        <Link href="/">Shop <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/shop-products">Shop Product</Link></li>
                            <li><Link href="/shop-products-sidebar">Products Sidebar</Link></li>
                            <li><Link href="/shop-product-details">Product Details</Link></li>
                            <li><Link href="/shop-checkout">Checkout</Link></li>
                            <li><Link href="/shop-cart">Cart</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-404">404 Error</Link></li>
                </ul>
            </li>

            <li>
                <Link href="/">Services <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/page-services">Service Grid</Link></li>
                    <li><Link href="/page-service-details">Service Details</Link></li>
                </ul>
            </li>

            <li>
                <Link href="/page-portfolio">Portfolio <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/page-portfolio">Portfolio</Link></li>
                    <li><Link href="/page-portfolio-details">Portfolio Details</Link></li>
                </ul>
            </li>

            <li>
                <Link href="/">Blog <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                    <li><Link href="/news-grid">Blog Grid</Link></li>
                    <li><Link href="/news-details">Blog Details</Link></li>
                </ul>
            </li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>

    );
};

export default NavLinks;