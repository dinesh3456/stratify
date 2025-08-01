import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';

function Chooseus() {
    const [isOpen, setOpen] = useState(false)    
    return (
        <>

        <section className="choose-four-area pt-130 pb-130">
            <div className="container">
                <div className="choose-four__wrp">
                    <div className="section-header text-center mb-50">
                        <h2 className="wow splt-txt text-white" data-splitting>Let's make something great work together.<br /> Got a project in mind? </h2>
                    </div>
                    <div className="choose-four__video mb-100">
                        <img src="assets/images/choose/choose-four-image.jpg" alt="image" />
                        <div className="choose-four__video-btn">
                            <div className="btn-video video-pulse">
                                <a onClick={() => setOpen(true)} className="video-popup"><i className="fa-sharp fa-light fa-play" /></a>
                            </div>
                            <h4>Click to Watch</h4>
                        </div>
                        <h2 className="title">WATCH VIDEO</h2>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-four-left">
                                <div className="item">
                                    <h2 className="info"><span className="count"><CounterUp end={25} /></span>k+</h2>
                                    <h3 className="wow text-white mt-20 splt-txt" data-splitting>Customers are served behind the digital marketing</h3>
                                    <p className="text-white mt-15">Stratify provides comprehensive consultancy and training services, specializing in data-driven solutions.</p>
                                    <Link href="/page-about" className="btn-two-light mt-50" data-splitting data-text="Learn More">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-four-right float-none float-lg-end">
                                <div className="progress-area">
                                    <div className="progress__title mb-1">
                                        <h4>Business Planning</h4>
                                        <span><span className="progress-count"><CounterUp end={56} /></span>%</span>
                                    </div>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar wow slideInLeft" 
                                            data-wow-duration=".55s"
                                            role="progressbar" 
                                            style={{ width: '55%' }} 
                                            aria-valuenow="55" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-area mt-50">
                                    <div className="progress__title mb-1">
                                        <h4>Financial Management</h4>
                                        <span><span className="progress-count"><CounterUp end={85} /></span>%</span>
                                    </div>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar wow slideInLeft" 
                                            data-wow-duration=".85s"
                                            role="progressbar" 
                                            style={{ width: '85%' }} 
                                            aria-valuenow="85" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-area mt-50">
                                    <div className="progress__title mb-1">
                                        <h4>Market Analysis</h4>
                                        <span><span className="progress-count"><CounterUp end={69} /></span>%</span>
                                    </div>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar wow slideInLeft" 
                                            data-wow-duration=".60s"
                                            role="progressbar" 
                                            style={{ width: '67%' }} 
                                            aria-valuenow="67" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                                <p className="text mt-50">
                                    Stratify offers a comprehensive range of consultancy and training methods in data analysis, business consultation, and strategic business solutions, providing valuable opportunities for new ventures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-four__bg">
                <img src="assets/images/bg/choose-four-bg-image.jpg" alt="bg-image" />
            </div>
            <div className="choose-four__rectangle">
                <div className="item wow" />
                <div className="item-dark wow" />
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UalTfOIDQ7M" onClose={() => setOpen(false)} />

        </>
    );
}
export default Chooseus