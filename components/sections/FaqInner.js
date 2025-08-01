import React, { useState } from 'react';

function Faqs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });
    const handleToggle = (key) => {
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

        <section className="faq-one-area pt-130 pb-0">
            <div className="container-lg">
                <div className="faq-one__wrp">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="faq-one__accordion">
                                <div className="section-header mb-30">
                                    <h3>Knowledge about business</h3>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={isActive.key == 1 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(1)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> What are the primary goals of your business?</button>
                                        </h2>
                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We work with a variety of clients. We work with the heads of
                                                    municipalities’ transportation planning, traffic engineering, or
                                                    economic development departments.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={isActive.key == 2 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(2)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"> How do you currently
                                                engage with them?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We work with a variety of clients. We work with the heads of
                                                    municipalities’ transportation planning, traffic engineering, or
                                                    economic development departments.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={isActive.key == 3 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(3)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree"> What are the
                                                biggest challenges your business is facing right now?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We work with a variety of clients. We work with the heads of
                                                    municipalities’ transportation planning, traffic engineering, or
                                                    economic development departments.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item border-0">
                                        <h2 className="accordion-header">
                                            <button className={isActive.key == 4 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(4)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour"> What differentiates
                                                your business from competitors?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We work with a variety of clients. We work with the heads of
                                                    municipalities’ transportation planning, traffic engineering, or
                                                    economic development departments.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-one__accordion">
                                <div className="section-header mb-30">
                                    <h3>Knowledge about invesment</h3>
                                </div>
                                <div className="accordion" id="accordionExample2">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={isActive.key == 5 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(5)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapsefive"> What are the primary goals of your business?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We work with a variety of clients. We work with the heads of
                                                    municipalities’ transportation planning, traffic engineering, or
                                                    economic development departments.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={isActive.key == 6 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(6)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix"> How do you currently
                                                engage with them?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We work with a variety of clients. We work with the heads of
                                                    municipalities’ transportation planning, traffic engineering, or
                                                    economic development departments.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={isActive.key == 7 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(7)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven"> What are the biggest challenges your business is facing right now?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We work with a variety of clients. We work with the heads of
                                                    municipalities’ transportation planning, traffic engineering, or
                                                    economic development departments.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item border-0">
                                        <h2 className="accordion-header">
                                            <button className={isActive.key == 8 ? "accordion-button collapsed" : "accordion-button"} onClick={() => handleToggle(8)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight"> What differentiates
                                                your business from competitors?
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We work with a variety of clients. We work with the heads of
                                                    municipalities’ transportation planning, traffic engineering, or
                                                    economic development departments.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Faqs;