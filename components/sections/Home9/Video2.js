import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ProgressBar from '../../elements/ProgressBar2';


function Video2()  {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        <section className="video-nine-aera">
            <div className="row g-0">
                <div className="col-lg-6">
                    <div className="video-nine__image imageRightToLeft gsap__parallax wow">
                        <img src="assets/images/video/video-nine-image.jpg" alt="image" />
                        <div className="btn-video video-pulse">
                            <a onClick={() => setOpen(true)} className="video-popup"><i className="fa-sharp fa-light fa-play"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="video-nine__item" style={{ backgroundImage: `url(assets/images/bg/video-nine-bg-right.jpg)`}}>
                        <div className="section-header mb-30">
                            <h6 className="text-white">30 Years of Growing Together with Our Clients</h6>
                            <h2 className="wow text-white splt-txt" data-splitting>Scale, grow, and optimize as Quickly as
                                you need to.
                            </h2>
                        </div>
                        <ProgressBar title="Project Complete" count={55} duration={0.55} />
                        <ProgressBar title="Happy Clients" count={93} duration={0.95} />
                        <ProgressBar title="Our Company Growth" count={67} duration={0.60} />                        
                        <p className="text mt-30">Stratify offers a comprehensive range of consultancy and training
                            methods in data analysis, business consultation, and
                            strategic business solutions, providing valuable opportunities for new ventures.</p>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UalTfOIDQ7M" onClose={() => setOpen(false)} />

        </>
    )
}
export default Video2;
