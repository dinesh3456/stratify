import React, { useEffect } from "react";
import Link from 'next/link';


function Achivement() {

    useEffect(() => {
        const serviceImgItems = document.querySelectorAll(".achivement__item");

        serviceImgItems.forEach((item) => {
            const hoverImage = item.querySelector(".hover-image");
            if (!hoverImage) return;

            const handleMouseMove = ({ clientX, clientY }) => {
                const { x, y } = item.getBoundingClientRect();
                const dx = clientX - x;
                const dy = clientY - y;
                hoverImage.style.transform = `translate(${dx}px, ${dy}px)`;
            };

            item.addEventListener("mousemove", handleMouseMove);

            return () => {
                item.removeEventListener("mousemove", handleMouseMove);
            };
        });
    }, []);

    return (
        <>
            
        <section className="achivement-area pt-130 pb-130">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="achivement-left">
                            <div className="section-header">
                                <h6>ACHIVEMENTS</h6>
                                <h2 className="wow splt-txt" data-splitting>Nominated agency as top of the best business
                                    agencies
                                    Worldwide
                                </h2>
                            </div>
                            <Link href="/page-portfolio" className="btn-two mt-50" data-splitting data-text="Browse More">Browse More</Link>
                            <div className="shape">
                                <img className="animation__rotate" src="assets/images/shape/achive-dual-circle.png" alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="achivement-right">
                            <div className="achivement__item">
                                <h4 className="title">Awwwards Interior excellence</h4>
                                <h4 className="sub-title">Nominee</h4>
                                <h4 className="year">2017</h4>
                                <div className="hover-image" style={{ backgroundImage: `url(assets/images/achivement/1.jpg)`}} />
                            </div>
                            <div className="achivement__item">
                                <h4 className="title">Best Site
                                    of the Year Awards.</h4>
                                <h4 className="sub-title">Winner</h4>
                                <h4 className="year">2018</h4>
                                <div className="hover-image" style={{ backgroundImage: `url(assets/images/achivement/2.jpg)`}} />
                            </div>
                            <div className="achivement__item">
                                <h4 className="title">Template of the seasons in this month.</h4>
                                <h4 className="sub-title">Champion</h4>
                                <h4 className="year">2020</h4>
                                <div className="hover-image" style={{ backgroundImage: `url(assets/images/achivement/3.jpg)`}} />
                            </div>
                            <div className="achivement__item">
                                <h4 className="title">Best Selling of this week & month.</h4>
                                <h4 className="sub-title">Nominee</h4>
                                <h4 className="year">2023</h4>
                                <div className="hover-image" style={{ backgroundImage: `url(assets/images/achivement/4.jpg)`}} />
                            </div>
                            <div className="achivement__item">
                                <h4 className="title">Advance high technology</h4>
                                <h4 className="sub-title">Champion</h4>
                                <h4 className="year">2024</h4>
                                <div className="hover-image" style={{ backgroundImage: `url(assets/images/achivement/5.jpg)`}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Achivement