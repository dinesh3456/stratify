import React from "react";

function Parallax() {
    return (
        <>

        <div className="parallax-area" data-speed="0.3" data-parallax="scroll" style={{ backgroundImage: `url(assets/images/bg/parallax.jpg)`}}>
            <div className="parallax__icon">
                <img className="animation__rotate" src="assets/images/icon/parallax-icon.png" alt="icon" />
            </div>
        </div>

        </>
    )
}
export default Parallax
