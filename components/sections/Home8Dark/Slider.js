import React, { useEffect, useRef } from 'react';
import Link from 'next/link';


function Slider() {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
        // Attempt to autoplay the video
        videoRef.current.play().catch((error) => {
            console.error('Autoplay failed:', error);
        });
        }
    }, []);

    return (
        <>

        <section id='home-menu' className="banner-eight-area light-area paralax__animation">
            <video className="banner-eight__video" ref={videoRef} muted loop playsInline autoPlay>
                <source src="assets/images/video/banner-eight-video.mp4" type="video/mp4" />
            </video>
            <div className="container">
                <div className="banner-eight__content">
                    <h1 className="title wow fadeInUp" data-depth="0.03" data-wow-delay="00ms" data-wow-duration="1500ms">
                        Guidance for
                        Corporate Financial Success!</h1>
                    <p data-depth="0.01" className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        Partner with us to
                        empower your business with the financial expertise required for
                        long-term success.</p>
                    <div className="btns mt-40">
                        <Link data-depth="0.05" href="/page-about" className="btn-two-light wow fadeInUp"
                            data-wow-delay="400ms" data-wow-duration="1500ms">About Us<i className="fa-light fa-arrow-right"></i></Link>
                        <Link data-depth="0.05" href="/page-services" className="btn-one-light wow fadeInUp"
                            data-wow-delay="500ms" data-wow-duration="1500ms">Our Services<i className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Slider;
