import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
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

            <ul>
                <li>
                    <Link href="/">Home <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 1 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/">Home Page 1</Link></li>
                        <li><Link href="/index-2">Home Page 2</Link></li>
                        <li><Link href="/index-3">Home Page 3</Link></li>
                        <li><Link href="/index-4">Home Page 4</Link></li>
                        <li><Link href="/index-5">Home Page 5</Link></li>
                        <li><Link href="/index-6">Home Page 5</Link></li>
                        <li><Link href="/index-7">Home Page 5</Link></li>
                        <li><Link href="/index-8">Home Page 8</Link></li>
                        <li><Link href="/index-9">Home Page 9</Link></li>
                        <li><Link href="/index-10">Home Page 10</Link></li>
                        <li><Link href="/index-11">Home Page 11</Link></li>
                        <li><Link href="/index-12">Home Page 12</Link></li>
                        <li><Link href="/index-13">Home Page 13</Link></li>
                        <li><Link href="/index-14">Home Page 14</Link></li>
                        <li><Link href="/index-15">Home Page 15</Link></li>
                        <li><Link href="/index-16">Home Page 16</Link></li>
                        <li><Link href="/index-17">Home Page 17</Link></li>
                        <li><Link href="/index-18">Home Page 18</Link></li>
                        <li><Link href="/index-19">Home Page 19</Link></li>
                        <li><Link href="/index-20">Home Page 20</Link></li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="/">Home Single <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 5 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/index-single">Single Page 1</Link></li>
                        <li><Link href="/index-2-single">Single Page 2</Link></li>
                        <li><Link href="/index-3-single">Single Page 3</Link></li>
                        <li><Link href="/index-4-single">Single Page 4</Link></li>
                        <li><Link href="/index-5-single">Single Page 5</Link></li>
                        <li><Link href="/index-6-single">Single Page 5</Link></li>
                        <li><Link href="/index-7-single">Single Page 5</Link></li>
                        <li><Link href="/index-8-single">Single Page 8</Link></li>
                        <li><Link href="/index-9-single">Single Page 9</Link></li>
                        <li><Link href="/index-10-single">Single Page 10</Link></li>
                        <li><Link href="/index-11-single">Single Page 11</Link></li>
                        <li><Link href="/index-12-single">Single Page 12</Link></li>
                        <li><Link href="/index-13-single">Single Page 13</Link></li>
                        <li><Link href="/index-14-single">Single Page 14</Link></li>
                        <li><Link href="/index-15-single">Single Page 15</Link></li>
                        <li><Link href="/index-16-single">Single Page 16</Link></li>
                        <li><Link href="/index-17-single">Single Page 17</Link></li>
                        <li><Link href="/index-18-single">Single Page 18</Link></li>
                        <li><Link href="/index-19-single">Single Page 19</Link></li>
                        <li><Link href="/index-20-single">Single Page 20</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="/">Home Dark <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 6 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/index-dark">Dark Page 1</Link></li>
                        <li><Link href="/index-2-dark">Dark Page 2</Link></li>
                        <li><Link href="/index-3-dark">Dark Page 3</Link></li>
                        <li><Link href="/index-4-dark">Dark Page 4</Link></li>
                        <li><Link href="/index-5-dark">Dark Page 5</Link></li>
                        <li><Link href="/index-6-dark">Dark Page 5</Link></li>
                        <li><Link href="/index-7-dark">Dark Page 5</Link></li>
                        <li><Link href="/index-8-dark">Dark Page 8</Link></li>
                        <li><Link href="/index-9-dark">Dark Page 9</Link></li>
                        <li><Link href="/index-10-dark">Dark Page 10</Link></li>
                        <li><Link href="/index-11-dark">Dark Page 11</Link></li>
                        <li><Link href="/index-12-dark">Dark Page 12</Link></li>
                        <li><Link href="/index-13-dark">Dark Page 13</Link></li>
                        <li><Link href="/index-14-dark">Dark Page 14</Link></li>
                        <li><Link href="/index-15-dark">Dark Page 15</Link></li>
                        <li><Link href="/index-16-dark">Dark Page 16</Link></li>
                        <li><Link href="/index-17-dark">Dark Page 17</Link></li>
                        <li><Link href="/index-18-dark">Dark Page 18</Link></li>
                        <li><Link href="/index-19-dark">Dark Page 19</Link></li>
                        <li><Link href="/index-20-dark">Dark Page 20</Link></li>
                    </ul>
                    <div className={isActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(6)}><i className="fa fa-angle-down" /></div>
                </li>
                <li><Link href="/page-about">About Us</Link></li>
                <li>
                    <Link href="/">Services <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 2 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/page-services">Service Grid</Link></li>
                        <li><Link href="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="/">Pages <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 3 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/contact">Contact V1</Link></li>
                        <li><Link href="/page-gallery">Gallery</Link></li>
                        <li><Link href="/page-projects">Project Grid</Link></li>
                        <li><Link href="/page-project-details">Project Details</Link></li>
                        <li><Link href="/page-team">Team</Link></li>
                        <li><Link href="/page-team-details">Team Details</Link></li>
                        <li><Link href="/page-testimonial">Testimonials</Link></li>
                        <li><Link href="/page-faq">FAQ’s</Link></li>
                        <li><Link href="/shop-products">Shop Product</Link></li>
                        <li><Link href="/shop-products-sidebar">Products Sidebar</Link></li>
                        <li><Link href="/shop-product-details">Product Details</Link></li>
                        <li><Link href="/shop-checkout">Checkout</Link></li>
                        <li><Link href="/shop-cart">Cart</Link></li>
                        <li><Link href="/page-404">404 Error</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div>
                </li>
                <li>
                    <Link href="/">Blog <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 4 ? "sub-menu d-block" : "d-none"}>
                        <li><Link href="/news-grid">Blog Grid</Link></li>
                        <li><Link href="/news-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div>
                </li>
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>

        </>
    );
};

export default MobileMenu;