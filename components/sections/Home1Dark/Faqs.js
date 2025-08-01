import React, { useState } from 'react';
import Link from 'next/link';

const faqData = [
    {
        question: "What are the primary goals of your business?",
        answer: "We work with a variety of clients. We collaborate with heads of municipalities’ transportation planning, traffic engineering, and economic development departments."
    },
    {
        question: "How do you currently engage with them?",
        answer: "We engage through various consulting and strategic development processes, ensuring that the solutions are tailored to each client's needs."
    },
    {
        question: "What are the biggest challenges your business is facing right now?",
        answer: "The biggest challenge is adapting to the ever-evolving market and technological landscape while maintaining quality services."
    },
    {
        question: "What differentiates your business from competitors?",
        answer: "Our unique approach to customer engagement and our deep expertise in municipal transportation planning sets us apart."
    }
];

function Faq() {
    const [activeKey, setActiveKey] = useState(1);
    const handleToggle = (key) => {
        setActiveKey(prevKey => (prevKey === key ? null : key));
    };
    return (
        <>

        <section className="faq-one-area pt-130 pb-100">
            <div className="faq-one__bg">
                <img src="assets/images/faq/faq-one-bg-dark.png" alt="FAQ Background" />
            </div>
            <div className="faq-one__image">
                <img className="animation__arryLeftRight" src="assets/images/faq/faq-one-image.png" alt="FAQ Image" />
            </div>
            <div className="container">
                <div className="faq-one__wrp">
                    <div className="row g-5 g-lg-4 justify-content-between">
                        <div className="col-lg-4">
                            <div className="faq-one-left">
                                <div className="section-header">
                                    <h6>FREQUENTLY ASKED QUESTIONS</h6>
                                    <h2 className="wow splt-txt" data-splitting>Curious about something? Just ask us!</h2>
                                    <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        Stratify is here to address all your business and consultancy-related questions.
                                        If you have inquiries beyond what’s listed, feel free to email us!
                                    </p>
                                </div>
                                <Link href="/page-faq" className="btn-two wow fadeInUp mt-50" data-wow-delay="200ms" data-wow-duration="1500ms" data-splitting data-text="Browse More">
                                    Browse More
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="faq-one__accordion">
                                <div className="section-header mb-30">
                                    <h6>To know more about us</h6>
                                    <h2 className="wow splt-txt" data-splitting>Frequently Asked Questions</h2>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    {faqData.map((faq, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-button ${activeKey === index ? '' : 'collapsed'}`}
                                                    onClick={() => handleToggle(index)}
                                                    type="button"
                                                    aria-expanded={activeKey === index ? 'true' : 'false'}
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${activeKey === index ? 'show' : ''}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
export default Faq;