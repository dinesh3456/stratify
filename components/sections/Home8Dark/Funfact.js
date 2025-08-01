import React from 'react';
import CounterUp from '../../elements/CounterUp';


function Funfact() {
    return (
        <>

        <section className="funfact-eight-area pb-130">
            <div className="container">
                <div className="funfact-eight__wrp light-area">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="funfact-eight__item" style={{ backgroundImage: `url(assets/images/funfact/funfact-eight-image1.jpg)`}}>
                                <div className="inner-box">
                                    <h2 className="cout-text"><span className="count"><CounterUp end={87} /></span>%</h2>
                                    <h3 className="title">Number Of Times Won</h3>
                                    <p className="text">We always strive to win for our customers even in the most difficult
                                        cases</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="funfact-eight__item" style={{ backgroundImage: `url(assets/images/funfact/funfact-eight-image2.jpg)`}}>
                                <div className="inner-box">
                                    <h2 className="cout-text"><span className="count"><CounterUp end={90} /></span>%</h2>
                                    <h3 className="title">Happy Customer</h3>
                                    <p className="text">We always strive to win for our customers even in the most difficult
                                        cases</p>
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
export default Funfact;
