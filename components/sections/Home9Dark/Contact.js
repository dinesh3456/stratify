import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

function Contact() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        setLoading(true);
        console.log('Form Submitted:', data);
        setTimeout(() => {
            setLoading(false);
            reset();
            alert('Your message has been sent!');
        }, 2000);
    };
    return (
        <>

        <section id="contact-menu" className="contact-nine-area contact-seven__dark-mode">
            <div className="container">
                <div className="contact-nine__wrp">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="contact-four__image imageRightToLeft wow light-area">
                                <img src="assets/images/contact/contact-nine-image.jpg" alt="image" />
                                <div className="content">
                                    <h4 className="text wow splt-txt" data-splitting>An insightful consulting firm with an engaged team, providing solutions that blend analytics.</h4>
                                    <div className="info">
                                        <div>
                                            <h5 className="text-white">Robert Fox</h5>
                                            <span className="text-white">Founder & CEO</span>
                                        </div>
                                        <img className="logo" src="assets/images/contact/logo.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-four__form bor border-start-0 dark-area">
                                <div className="section-header mb-40">
                                    <h6>Let's connect</h6>
                                    <h2 className="wow splt-txt" data-splitting>We’re here to help</h2>
                                    <p className="mt-3">Need help with a project or have a question about our work? We're
                                        here for you.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="your-name" className="sr-only">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="your-name"
                                        name="name"
                                        placeholder="Your Name" 
                                        {...register('name')}
                                    />
                                    {errors.name && <p className="error">{errors.name.message}</p>}
                                    <label htmlFor="your-email" className="sr-only">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="your-email" 
                                        name="email"
                                        placeholder="Email Address" 
                                        {...register('email')}
                                    />
                                    {errors.email && <p className="error">{errors.email.message}</p>}
                                    <label htmlFor="message" className="sr-only">Your Message</label>
                                    <textarea
                                        id="message" 
                                        name="message"
                                        placeholder="Write a Message" 
                                        {...register('message')}
                                    ></textarea>
                                    {errors.message && <p className="error">{errors.message.message}</p>}
                                    <button type="submit" className="btn-one dark-mode rounded-0 w-100" data-splitting disabled={loading}>
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle light-area">
                        <div className="item wow"></div>
                        <div className="item-dark wow"></div>
                    </div>
                </div>
            </div>
        </section>       

        </>
    )
}
export default Contact;