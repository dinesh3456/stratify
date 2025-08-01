import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';


function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        <div className="video-three-area">
            <div className="video-three__wrp" data-speed="0.3" data-parallax="scroll" style={{ backgroundImage: `url(assets/images/bg/video-bg.jpg)`}}>
                <div className="video__btn">
                    <div className="btn-video video-pulse">
                        <a onClick={() => setOpen(true)} className="item-btn video-popup"><i className="fa-sharp fa-light fa-play" /></a>
                    </div>
                </div>
            </div>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UalTfOIDQ7M" onClose={() => setOpen(false)} />

        </>
    )
}
export default Video
